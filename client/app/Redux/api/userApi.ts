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
        method: "patch",
        data: data,
      }),
      invalidatesTags: [tagTypes.user, tagTypes.employee, tagTypes.admin],
    }),
    changePassword: build.mutation({
      query: (data) => ({
        url: "/auth/change-password",
        method: "POST",
        data: data,
      }),
      invalidatesTags: [tagTypes.user, tagTypes.employee, tagTypes.admin],
    }),
  }),
});

export const {
  useGetMyProfileQuery,
  useUpdateMyProfileMutation,
  useChangePasswordMutation,
} = userApi;
