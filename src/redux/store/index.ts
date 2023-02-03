import {configureStore} from "@reduxjs/toolkit";
import {rootReducer} from "redux/reducers/root";

const store = configureStore({
   reducer: rootReducer,
});

export { store };

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
