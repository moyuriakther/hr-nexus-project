import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

export const candidateListApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createCandidate: build.mutation({
      query: (data) => ({
        url: "/candidates/create-candidate",
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.candidateList],
    }),
    getAllCandidate: build.query({
      query: () => ({
        url: "/candidates", 
        method: "GET",
      }),
      providesTags: [tagTypes.candidateList],
    }),
    getSingleCandidate: build.query({
      query: (id) => ({
        url: `/candidates/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.candidateList],
    }),

    deleteCandidate: build.mutation({
      query: (id) => ({
        url: `candidates/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.candidateList],
    }),

    updateCandidate: build.mutation({
      query: (data) => ({
        url: `candidates/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.candidateList],
    }),
  }),
});

export const {
  useCreateCandidateMutation,
  useGetAllCandidateQuery,
  useGetSingleCandidateQuery,
  useDeleteCandidateMutation,
  useUpdateCandidateMutation,
} = candidateListApi;
