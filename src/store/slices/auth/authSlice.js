import { createSlice } from "@reduxjs/toolkit";
import {estados} from "./estados"

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        id:null,
        estado:null,
        displayName:null,
        email:null, 
    },
    reducers: {

        checkingCredentials: (state) => {
            state.errorResponse = null,
            state.estado = estados.chequeando
        },

        login: (state, { payload } ) => {

            state.id = payload.id,
            state.estado = estados.autenticado
            state.displayName = payload.name
            state.email = payload.email
            state.photoUrl = payload.profile_picture
        },

        logout: (state, {payload}) => {

            localStorage.removeItem("token");

            state.id = null,
            state.estado = estados.noAutenticado,
            state.displayName = null,
            state.email = null,
            state.photoUrl = null
            state.errorResponse= payload
        },
    }
})

export const { checkingCredentials, login, logout } = authSlice.actions