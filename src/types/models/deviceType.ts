import {OperatingSystem} from "../enums/operatingSystemType";

export interface Device {
   id: string;
   system_name: string;
   type: OperatingSystem;
   hdd_capacity: string;
}
