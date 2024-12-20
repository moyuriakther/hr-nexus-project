import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

export const interview = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createInterview: build.mutation({
      query: (data) => ({
        url: "/candidates/create-candidate-interview",
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.interview],
    }),
    getAllInterview: build.query({
     
      query: ({ searchTerm }) => ({
        url: `/candidates/interviews${searchTerm ? `?searchTerm=${searchTerm}` : ""}`,
        method: "GET",
      }),
      providesTags: [tagTypes.interview],
    }),
    getSingleInterview: build.query({
      query: (id) => ({
        url: `/candidates/interviews/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.interview],
    }),

    deleteInterview: build.mutation({
      query: (id) => ({
        url: `/candidates/interviews/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.interview],
    }),

    updateInterview: build.mutation({
      query: (data) => ({
        url: `/candidates/interview/${data.id}`,
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
