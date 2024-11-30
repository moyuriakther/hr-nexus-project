import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

export const weekDaysHolidayApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createWeekDays: build.mutation({
      query: (data) => ({
        url: "/weekly-holidays/create",
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.weekdaysHoliday],
    }),
    getAllWeekDays: build.query({
      query: () => ({
        url: "/weekly-holidays",
        method: "GET",
      }),
      providesTags: [tagTypes.weekdaysHoliday],
    }),
    getSingleWeekDays: build.query({
      query: (id) => ({
        url: `/weekly-holidays/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.weekdaysHoliday],
    }),

    deleteWeekDays: build.mutation({
      query: (id) => ({
        url: `/weekly-holidays/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.weekdaysHoliday],
    }),

    updateWeekDays: build.mutation({
      query: (data) => ({
        url: `/weekly-holidays/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.weekdaysHoliday],
    }),
  }),
});

export const {
  useCreateWeekDaysMutation,
  useGetAllWeekDaysQuery,
  useGetSingleWeekDaysQuery,
  useDeleteWeekDaysMutation,
  useUpdateWeekDaysMutation,
} = weekDaysHolidayApi;
