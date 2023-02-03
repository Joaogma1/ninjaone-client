import {DevicesActionTypes, DevicesState, UPDATE_DEVICES} from "types/redux/devices";

const initialState: DevicesState = {
   devices: [],
};

export const devicesReducer = (state = initialState, action: DevicesActionTypes): DevicesState => {
   switch (action.type) {
      case UPDATE_DEVICES:
         return {
            devices: action.payload.devices,
         };
      default:
         return state;
   }
};
