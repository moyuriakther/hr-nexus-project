import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

export const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getMyProfile: build.query({
      query: () => ({
        url: "/user/get-profile",
        method: "GET",
      }),
      providesTags: [tagTypes.employee, tagTypes.admin, tagTypes.user],
    }),
    updateMyProfile: build.mutation({
      query: (data) => ({
        url: "/user/update-profile",
        method: "PUT",
        data: data,
      }),
      invalidatesTags: [tagTypes.employee, tagTypes.admin, tagTypes.user],
    }),
    changePassword: build.mutation({
      query: (data) => ({
        url: "/auth/change-password",
        method: "POST",
        data: data,
      }),
      invalidatesTags: [tagTypes.employee, tagTypes.admin, tagTypes.user],
    }),
  }),
});

export const {
  useGetMyProfileQuery,
  useUpdateMyProfileMutation,
  useChangePasswordMutation,
} = userApi;
