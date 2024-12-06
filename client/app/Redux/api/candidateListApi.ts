import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

export const candidateListApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createCandidate: build.mutation({
      query: (data) => ({
        url: "candidateList/create-leave",
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.candidateList],
    }),
    getAllCandidate: build.query({
      query: () => ({
        url: "candidateList", 
        method: "GET",
      }),
      providesTags: [tagTypes.candidateList],
    }),
    getSingleCandidate: build.query({
      query: (id) => ({
        url: `candidateList/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.candidateList],
    }),

    deleteCandidate: build.mutation({
      query: (id) => ({
        url: `candidateList/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.candidateList],
    }),

    updateCandidate: build.mutation({
      query: (data) => ({
        url: `candidateList/${data.id}`,
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
