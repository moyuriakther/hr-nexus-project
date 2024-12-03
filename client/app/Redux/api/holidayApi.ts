import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

export const holidayApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createHoliday: build.mutation({
      query: (data) => ({
        url: "/holidays/create-holiday",
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.holiday],
    }),
    getAllHoliday: build.query({
      query: () => ({
        url: "/holidays",
        method: "GET",
      }),
      providesTags: [tagTypes.holiday],
    }),
    getSingleHoliday: build.query({
      query: (id) => ({
        url: `/holidays/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.holiday],
    }),

    deleteHoliday: build.mutation({
      query: (id) => ({
        url: `/holidays/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.holiday],
    }),

    updateHoliday: build.mutation({
      query: (data) => ({
        url: `/holidays/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.holiday],
    }),
  }),
});

export const {
  useCreateHolidayMutation,
  useGetAllHolidayQuery,
  useGetSingleHolidayQuery,
  useDeleteHolidayMutation,
  useUpdateHolidayMutation,
} = holidayApi;
