import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    userLogin: build.mutation({
      query: (loginData) => ({
        url: "/login",
        method: "POST",
        data: loginData,
      }),
      invalidatesTags: [tagTypes.employee, tagTypes.admin],
    }),
  }),
});

export const { useUserLoginMutation } = authApi;
