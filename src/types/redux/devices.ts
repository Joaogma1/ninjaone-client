import {Device} from "types/models/deviceType";

export interface DevicesState {
   devices: Device[];
}

export const UPDATE_DEVICES = "UPDATE_DEVICES";

interface UpdateDevicesAction {
   type: typeof UPDATE_DEVICES;
   payload: {
      devices: Device[];
   };
}

export type DevicesActionTypes = UpdateDevicesAction;

export type { UpdateDevicesAction };
