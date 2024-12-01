import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./sidebar/sidebarSlice";
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

// Configure the store
export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});
