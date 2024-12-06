import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

export const selectedCandidateApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createSelectedCandidate: build.mutation({
      query: (data) => ({
        url: "/selectedCandidate/create-selection",
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.candidateSelection],
    }),
    getAllSelectedCandidate: build.query({
      query: () => ({
        url: "/selectedCandidate",
        method: "GET",
      }),
      providesTags: [tagTypes.candidateSelection],
    }),
    getSingleSelectedCandidate: build.query({
      query: (id) => ({
        url: `/selectedCandidate/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.candidateSelection],
    }),

    deleteSelectedCandidate: build.mutation({
      query: (id) => ({
        url: `/selectedCandidate/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.candidateSelection],
    }),

    updateSelectedCandidate: build.mutation({
      query: (data) => ({
        url: `/selectedCandidate/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.candidateSelection],
    }),
  }),
});

export const {
  useCreateSelectedCandidateMutation,
  useGetAllSelectedCandidateQuery,
  useGetSingleSelectedCandidateQuery,
  useDeleteSelectedCandidateMutation,
  useUpdateSelectedCandidateMutation,
} = selectedCandidateApi;
