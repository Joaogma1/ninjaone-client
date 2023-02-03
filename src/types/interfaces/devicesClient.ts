import { Device } from "../models/deviceType";

export interface Option {
   value: string;
   label: string;
}
const deviceTypeList: Option[] = [
   { label: "Windows", value: "WINDOWS" },
   { label: "Mac", value: "MAC" },
   { label: "Linux", value: "LINUX" },
];

const sortTypeList: Option[] = [
   { label: "Default", value: "" },
   { value: "hdd_capacity asc", label: "HDD Capacity (Ascending)" },
   { value: "hdd_capacity desc", label: "HDD Capacity (Descending)" },
   { value: "system_name desc", label: "System Name (Descending)" },
   { value: "system_name asc", label: "System Name (Ascending)" },
];

export interface DeviceListFilterOpts {
   name?: string;
   filterType: Option[];
   sortBy: Option;
}

export interface INewDeviceData {
   system_name?: string;
   type?: string;
   hdd_capacity?: string;
}
export interface IUpdateDeviceData extends INewDeviceData {
   id?: string;
}

export interface IDeviceClient {
   listDevices(filter: DeviceListFilterOpts): Promise<Device[]>;
   getDeviceById(id: string): Promise<Device | null>;
   updateDevice(data: IUpdateDeviceData): Promise<Device | null>;
   createDevice(data: INewDeviceData): Promise<Device | null>;
   deleteDevice(id: string): Promise<boolean>;
}
export { sortTypeList, deviceTypeList };
