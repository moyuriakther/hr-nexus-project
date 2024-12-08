import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

export const interview = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createInterview: build.mutation({
      query: (data) => ({
        url: "/interview/create-interview",
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.interview],
    }),
    getAllInterview: build.query({
      query: () => ({
        url: "/interview",
        method: "GET",
      }),
      providesTags: [tagTypes.interview],
    }),
    getSingleInterview: build.query({
      query: (id) => ({
        url: `/interview/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.interview],
    }),

    deleteInterview: build.mutation({
      query: (id) => ({
        url: `/interview/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.interview],
    }),

    updateInterview: build.mutation({
      query: (data) => ({
        url: `/interview/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.interview],
    }),
  }),
});

export const {
  useCreateInterviewMutation,
  useGetAllInterviewQuery,
  useGetSingleInterviewQuery,
  useDeleteInterviewMutation,
  useUpdateInterviewMutation,
} = interview;
