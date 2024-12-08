import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

export const shortlistCandidateApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createShortlistCandidate: build.mutation({
      query: (data) => ({
        url: "shortlistCandidate/create-shortlistCandidate",
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.candidateShortlist],
    }),
    getAllShortlistCandidate: build.query({
      query: () => ({
        url: "shortlistCandidate",
        method: "GET",
      }),
      providesTags: [tagTypes.candidateShortlist],
    }),
    getSingleShortlistCandidate: build.query({
      query: (id) => ({
        url: `shortlistCandidate/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.candidateShortlist],
    }),

    deleteShortlistCandidate: build.mutation({
      query: (id) => ({
        url: `shortlistCandidate/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.candidateShortlist],
    }),

    updateShortlistCandidate: build.mutation({
      query: (data) => ({
        url: `shortlistCandidate/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.candidateShortlist],
    }),
  }),
});

export const {
  useCreateShortlistCandidateMutation,
  useGetAllShortlistCandidateQuery,
  useGetSingleShortlistCandidateQuery,
  useDeleteShortlistCandidateMutation,
  useUpdateShortlistCandidateMutation,
} = shortlistCandidateApi;
