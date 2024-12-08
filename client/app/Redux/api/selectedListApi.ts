import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

export const selectedCandidateApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createSelectedCandidate: build.mutation({
      query: (data) => ({
        url: "/candidates/create-candidate-selection",
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.candidateSelection],
    }),
    getAllSelectedCandidate: build.query({
      query: ({ searchTerm }) => ({
        url: `/candidates/selected${searchTerm ? `?searchTerm=${searchTerm}` : ""}`,
        method: "GET",
      }),
      providesTags: [tagTypes.candidateSelection],
    }),
    getSingleSelectedCandidate: build.query({
      query: (id) => ({
        url: `/candidates/selected/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.candidateSelection],
    }),

    deleteSelectedCandidate: build.mutation({
      query: (id) => ({
        url: `/candidates/selected/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.candidateSelection],
    }),

    updateSelectedCandidate: build.mutation({
      query: (data) => ({
        url: `/candidates/selected/${data.id}`,
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
