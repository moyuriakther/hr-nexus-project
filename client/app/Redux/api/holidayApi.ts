import { THoliday } from "@/app/types";
import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

interface Meta {
  page: number;
  limit: number;
  total: number;
}

// Define the structure of the API response for getAllLoan
interface GetAllPHolidayResponse {
  meta: Meta;
  data: THoliday[]; // The array of loans
}

interface GetAllHolidayQueryArgs {
  searchTerm?: string;
  [key: string]: any;
}

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
    getAllHoliday: build.query<GetAllPHolidayResponse, GetAllHolidayQueryArgs>({
      query: ({ searchTerm = "", ...filters } = {}) => {
        const queryString = new URLSearchParams({
          searchTerm,
          ...filters,
        }).toString();

        return {
          url: `/holidays?${queryString}`,
          method: "GET",
        };
      },
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
