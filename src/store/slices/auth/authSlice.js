import { createSlice } from "@reduxjs/toolkit";


export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        id:null,
        estados:null,
        displayName:null,
        email:null, 
    }
})

export const {  } = authSlice.actions