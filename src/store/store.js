import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./slices/auth/authSlice";
import { adminApi } from "./api/adminApi";


export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,


        [adminApi.reducerPath]: adminApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(adminApi.middleware)
})