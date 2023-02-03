import {Device} from "types/models/deviceType";
import {DevicesActionTypes, UPDATE_DEVICES} from "types/redux/devices";

export function UpdateDevices(devices: Device[]): DevicesActionTypes {
   return {
      type: UPDATE_DEVICES,
      payload: {
         devices,
      },
   };
}
