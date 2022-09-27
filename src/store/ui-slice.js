import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "toggle",
  initialState: {visibility: false},
  reducers: {
    toggleVisibility: ()
  }
});
