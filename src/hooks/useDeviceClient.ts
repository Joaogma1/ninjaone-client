import { useCallback, useEffect, useState } from "react";
import { deviceClient } from "clients";
import { DeviceListFilterOpts, deviceTypeList } from "types/interfaces/devicesClient";
import { useAppDispatch, useAppSelector } from "hooks";
import { UpdateDevices } from "redux/actions/devices";

const fetchDevices = (filter: DeviceListFilterOpts) => deviceClient.listDevices(filter);

interface UpdateOrCreateDevice {
   id?: string;
   hdd_capacity: string;
   system_name: string;
   type?: {
      value: string;
      label: string;
   };
}

export default function useDeviceClient() {
   const dispatcher = useAppDispatch();

   const devices = useAppSelector((select) => select.devices?.devices);
   const [loading, setLoading] = useState(true);

   const [filter, setFilter] = useState<DeviceListFilterOpts>({
      filterType: deviceTypeList,
      sortBy: { label: "Default", value: "" },
      name: "",
   });

   const fetchWithCurrentFilter = useCallback(async () => {
      const data = await fetchDevices(filter);
      dispatcher(UpdateDevices(data));
      setLoading(false);
   }, [filter]);

   const submitDelete = (id: string, callback: () => void) => {
      deviceClient.deleteDevice(id).then(reload).then(callback);
   };

   const submitUpdateOrCreate = (data: UpdateOrCreateDevice, callback: () => void) => {
      if (data.id !== "") {
         deviceClient.updateDevice({ ...data, type: data!.type!.value as string }).then(() => {
            reload();
            callback();
         });
      } else {
         deviceClient
            .createDevice({
               type: data?.type?.value as string,
               hdd_capacity: data.hdd_capacity,
               system_name: data.system_name,
            })
            .then(() => {
               reload();
               callback();
            });
      }
   };

   const reload = useCallback(async () => {
      setLoading(true);
      await fetchWithCurrentFilter();
   }, [fetchWithCurrentFilter]);

   const getById = async (id: string) => {
      return await deviceClient.getDeviceById(id);
   };

   useEffect(() => {
      const delayDebounceFn = setTimeout(() => {
         fetchWithCurrentFilter();
      }, 100);
      return () => clearTimeout(delayDebounceFn);
   }, [filter, fetchWithCurrentFilter]);

   return {
      devices,
      loading,
      reload,
      filter,
      setFilter,
      submitDelete,
      submitUpdateOrCreate,
      getById,
   };
}
