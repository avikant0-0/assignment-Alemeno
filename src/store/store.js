import { configureStore } from "@reduxjs/toolkit";
import allDataSlice from "../reducers/allDataSlice";
export const store = configureStore({
  reducer: allDataSlice,
});
