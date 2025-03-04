import { createSlice } from "@reduxjs/toolkit";

export const signinSlice = createSlice({
    name: "signin",
    initialState: {
        status: false
    },
    reducers: {
        logout: (state) => {
            state.status = false
        },
        login: (state) => {
            state.status = true
        }
    },
    extraReducers: 
});

export const {logout, login} = signinSlice.actions;
export default signinSlice.reducer;