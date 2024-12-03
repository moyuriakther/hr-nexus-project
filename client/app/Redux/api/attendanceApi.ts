import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

export const attendanceApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createAttendance: build.mutation({
      query: (loginData) => ({
        url: "/attendance/create-attendance",
        method: "POST",
        data: loginData,
      }),
      invalidatesTags: [tagTypes.attendance],
    }),
    getAllAttendance: build.query({
      query: () => ({
        url: "/attendance",
        method: "GET",
      }),
      providesTags: [tagTypes.attendance],
    }),
  }),
});

export const { useCreateAttendanceMutation, useGetAllAttendanceQuery } =
  attendanceApi;
