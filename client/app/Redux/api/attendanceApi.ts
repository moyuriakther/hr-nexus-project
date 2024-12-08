import { TAttendance } from "@/app/types";
import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

interface Meta {
  page: number;
  limit: number;
  total: number;
}

// Define the structure of the API response for getAllLoan
interface GetAllPAttendanceResponse {
  meta: Meta;
  data: TAttendance[]; // The array of loans
}

interface GetAllAttendanceQueryArgs {
  searchTerm?: string;
  [key: string]: any;
}

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

    getAllAttendance: build.query<
      GetAllPAttendanceResponse,
      GetAllAttendanceQueryArgs
    >({
      query: ({ searchTerm = "", ...filters } = {}) => {
        const queryString = new URLSearchParams({
          searchTerm,
          ...filters,
        }).toString();

        return {
          url: `/attendance?${queryString}`,
          method: "GET",
        };
      },
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
