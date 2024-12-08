import { TLeave } from "@/app/types";
import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

interface Meta {
  page: number;
  limit: number;
  total: number;
}

// Define the structure of the API response for getAllLoan
interface GetAllPLeaveResponse {
  meta: Meta;
  data: TLeave[]; // The array of loans
}

interface GetAllLeaveQueryArgs {
  searchTerm?: string;
  [key: string]: any;
}

export const leaveApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createLeave: build.mutation({
      query: (data) => ({
        url: "/leave/create-leave",
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.leave],
    }),

    getAllLeave: build.query<GetAllPLeaveResponse, GetAllLeaveQueryArgs>({
      query: ({ searchTerm = "", ...filters } = {}) => {
        const queryString = new URLSearchParams({
          searchTerm,
          ...filters,
        }).toString();

        return {
          url: `/leave?${queryString}`,
          method: "GET",
        };
      },
      providesTags: [tagTypes.leave],
    }),
    getSingleLeave: build.query({
      query: (id) => ({
        url: `/leave/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.leave],
    }),

    deleteLeave: build.mutation({
      query: (id) => ({
        url: `/leave/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.leave],
    }),

    updateLeave: build.mutation({
      query: (data) => ({
        url: `/leave/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.leave],
    }),
  }),
});

export const {
  useCreateLeaveMutation,
  useGetAllLeaveQuery,
  useGetSingleLeaveQuery,
  useDeleteLeaveMutation,
  useUpdateLeaveMutation,
} = leaveApi;
