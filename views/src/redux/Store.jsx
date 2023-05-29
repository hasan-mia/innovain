import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./slice/AuthSlice";

const Store = configureStore({
    reducer: {
        auth: AuthSlice;
    },
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware({
        serializableCheck: {
                ignoredActions: [
                    'auth/auth/fulfilled',
                ],
            },
    })
});
export default Store;