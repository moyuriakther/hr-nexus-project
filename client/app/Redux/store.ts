import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./sidebar/sidebarSlice";
import { baseApi } from "./api/baseApi";
import multiStepperReducer from "./multiStepper/multiStepperSlice";
import searchSliceReducer from "./api/searchSlice";

// Combine reducers
const reducer = {
  sidebar: sidebarReducer,
  filters: searchSliceReducer,
  multiStepper: multiStepperReducer,
  [baseApi.reducerPath]: baseApi.reducer,
};

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
