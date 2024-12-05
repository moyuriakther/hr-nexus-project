import { createSlice } from "@reduxjs/toolkit";

type TMultiStepper = {
  file: FileList | null;
};

const initialState: TMultiStepper = {
  file: null,
};

const multiStepperSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    setFile: (state, action) => {
      state.file = action.payload;
    },
  },
});

export const { setFile } = multiStepperSlice.actions;
export default multiStepperSlice.reducer;
