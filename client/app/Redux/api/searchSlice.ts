import { createSlice } from "@reduxjs/toolkit";
export const searchSlice = createSlice({
  name: "filters",
  initialState: {
    search: "",
  },
  reducers: {
    updateFilters: (state, action) => {
      const upState = { ...state, ...action.payload };
      return upState;
    },
  },
});
export const { updateFilters } = searchSlice.actions;
export default searchSlice.reducer;
