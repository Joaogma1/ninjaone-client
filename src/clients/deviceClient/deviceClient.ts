import { DeviceListFilterOpts, IDeviceClient, INewDeviceData, IUpdateDeviceData } from "../../types/interfaces/devicesClient";
import { Device } from "types/models/deviceType";
import { api } from "libs/axios";

export default class DeviceClient implements IDeviceClient {
   private async fetchDevices(): Promise<Device[]> {
      return (await api.get<Device[]>("/devices")).data;
   }

   private sortDevices(devices: Device[], filter: DeviceListFilterOpts): Device[] {
      if (!filter?.sortBy.value) {
         return devices;
      }

      const [field, type] = filter.sortBy.value.split(" ");
      devices.sort((a, b) =>
         field === "hdd_capacity"
            ? Number(a[field as keyof Device]) - Number(b[field as keyof Device])
            : a[field as keyof Device].localeCompare(b[field as keyof Device])
      );

      if (type === "desc") {
         devices.reverse();
      }

      return devices;
   }

   private filterDevices(devices: Device[], filter: DeviceListFilterOpts): Device[] {
      let filterResult = devices;
      if (filter.filterType.length > 0)
         filterResult = filterResult.filter((device) =>
            filter.filterType.some((option) => device.type.toLowerCase().includes(option.value?.toLowerCase()))
         );
      if (filter?.name !== "") filterResult = filterResult.filter((x) => x.system_name.toLowerCase().startsWith(filter!.name!.toLocaleLowerCase()));

      return filterResult;
   }

   async listDevices(filter: DeviceListFilterOpts): Promise<Device[]> {
      const data = await this.fetchDevices();
      let filteredData = this.sortDevices(data, filter);
      filteredData = this.filterDevices(filteredData, filter);
      return filteredData;
   }

   async getDeviceById(id: string): Promise<Device | null> {
      const response = await api.get<Device>(`/devices/${id}`);
      return response.data;
   }

   async updateDevice(data: IUpdateDeviceData): Promise<Device | null> {
      const response = await api.put<Device>(`/devices/${data.id}`, {
         system_name: data.system_name,
         type: data.type,
         hdd_capacity: data.hdd_capacity,
      });
      return response.data;
   }

   async createDevice(data: INewDeviceData): Promise<Device | null> {
      const response = await api.post<Device>(`/devices`, {
         system_name: data.system_name,
         type: data.type,
         hdd_capacity: data.hdd_capacity,
      });
      return response.data;
   }

   async deleteDevice(id: string): Promise<boolean> {
      const response = await api.delete(`/devices/${id}`);
      return response.status === 200;
   }
}
