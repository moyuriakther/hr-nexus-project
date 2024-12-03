import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

export const attendanceApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createAttendance: build.mutation({
      query: (data) => ({
        url: "/attendance/create-attendance",
        method: "POST",
        data: data,
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
    updateAttendance: build.mutation({
      query: (data) => ({
        url: `/attendance/${data?.id}`,
        method: "PATCH",
        data: data?.body,
      }),
      invalidatesTags: [tagTypes.attendance],
    }),
    deleteAttendance: build.mutation({
      query: (id) => ({
        url: `/attendance/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.attendance],
    }),
  }),
});

export const {
  useCreateAttendanceMutation,
  useGetAllAttendanceQuery,
  useDeleteAttendanceMutation,
  useUpdateAttendanceMutation,
} = attendanceApi;
