import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

export const toggleSlice = createSlice({
  name: "toggle",
  initialState,
  reducers: {
    showSidebar: {
      reducer(state) {
        return true
      },
    },
    hideSidebar: {
      reducer(state) {
        return false
      },
    },
  },
});

export const selectToggle = (state) => state.toggle;
export default toggleSlice.reducer;
export const { showSidebar, hideSidebar } = toggleSlice.actions;
