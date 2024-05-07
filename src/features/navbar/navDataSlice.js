import { createSlice } from "@reduxjs/toolkit";
import navData from "../../assets/data/navData";

const initialState = navData;

export const navbarDataSlice = createSlice({
  name: "navdata",
  initialState,
  reducers: {},
});

export default navbarDataSlice.reducer;
