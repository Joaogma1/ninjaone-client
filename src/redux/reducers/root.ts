import {devicesReducer} from "./devices";
import {combineReducers} from "redux";
import {RootStateType} from "types/redux/rootState";

export const rootReducer = combineReducers<RootStateType>({
   devices: devicesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
