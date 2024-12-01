import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./sidebar/sidebarSlice";
import multiStepperReducer from "./multiStepper/multiStepperSlice";
import { baseApi } from "./api/baseApi";

// Combine reducers
const reducer = {
  sidebar: sidebarReducer,
  multiStepper: multiStepperReducer,
  [baseApi.reducerPath]: baseApi.reducer,
};

// Configure the store
export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});
