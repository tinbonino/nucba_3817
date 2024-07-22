import { configureStore } from "@reduxjs/toolkit";
import listReducer from "./listSlice";
import authReducer from "./AuthSlice";


export const store = configureStore({
    reducer: {
        list:listReducer,
        auth:authReducer
    }
});