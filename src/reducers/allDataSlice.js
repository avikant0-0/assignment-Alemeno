import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allcourses: [],
  userdata: [],
};

const allCourseSlice = createSlice({
  name: "allcourses",
  initialState,
  reducers: {
    addToAllCourse(state, action) {
      state.allcourses = [...action.payload];
    },
    addToUserData(state, action) {
      state.userdata = [action.payload];
    },
  },
});

export const { addToAllCourse, addToUserData } = allCourseSlice.actions;
export default allCourseSlice.reducer;
