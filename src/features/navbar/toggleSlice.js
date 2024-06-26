import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

export const toggleSlice = createSlice({
  name: "navdata",
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

export default toggleSlice.reducer;
