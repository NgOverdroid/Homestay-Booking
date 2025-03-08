import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: 'auth',
    initialState: { 
        is_loading: true,
        access_token: null,
    },
    reducers: {
        logIn(state, action) {
            state.access_token = action.payload.access_token;
            state.is_loading = false;
        },
        logOut(state) {
            state.access_token = null;
            state.is_loading = false;
        }
    },
});

export const {logIn, logOut}  = authSlice.actions
export default authSlice.reducer;
