import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./sidebar/sidebarSlice";
import { baseApi } from "./api/baseApi";

export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
import multiStepperReducer from "./multiStepper/multiStepperSlice";
import { baseApi } from "./api/baseApi";
import  searchSliceReducer  from "./api/searchSlice";

// Combine reducers
const reducer = {
  sidebar: sidebarReducer,
  filters: searchSliceReducer,
  multiStepper: multiStepperReducer,
  [baseApi.reducerPath]: baseApi.reducer,
};


