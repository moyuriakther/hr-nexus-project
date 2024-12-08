import { TWeekDay } from "@/app/types";
import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

interface Meta {
  page: number;
  limit: number;
  total: number;
}

// Define the structure of the API response for getAllLoan
interface GetAllHolidayResponse {
  meta: Meta;
  data: TWeekDay[]; // The array of loans
}

interface GetAllHolidayQueryArgs {
  searchTerm?: string;
  [key: string]: any;
}

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

    getAllWeekDays: build.query<GetAllHolidayResponse, GetAllHolidayQueryArgs>({
      query: ({ searchTerm = "", ...filters } = {}) => {
        const queryString = new URLSearchParams({
          searchTerm,
          ...filters,
        }).toString();

        return {
          url: `/weekly-holidays?${queryString}`,
          method: "GET",
        };
      },
      providesTags: [tagTypes.holiday],
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
