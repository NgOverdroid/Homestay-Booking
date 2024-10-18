import { createSlice } from "@reduxjs/toolkit";

export const darkmodeSlice = createSlice({
    name: "darkmode",
    initialState: {
        value: "light"
    },
    reducers: {
        flip: (state) => {
            state.value = "dark";
        }
    } 
})

export const { flip } = darkmodeSlice.actions;
export default darkmodeSlice.reducer;