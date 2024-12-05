import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";


export const awardApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createAward: build.mutation({
      query: (data) => (console.log({data}),{
        url: "/awards/create-award",
        method: "POST",
        body: data,
      }),
      invalidatesTags: [tagTypes.award],
    }),
    getAllAward: build.query({
      query: () => ({
        url: "/awards",
        method: "GET",
      }),
      providesTags: [tagTypes.award],
    }),
     updateAward: build.mutation({
      query: (data) => ({
        url: `/awards/${data.id}`,
        method: "PATCH",
        body: data.body,
      }),
      invalidatesTags: [tagTypes.award],
    }),
     deleteAward: build.mutation({
      query: (id) => ({
        url: `/awards/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.award],
    }),
  }),
});

export const { useCreateAwardMutation, useGetAllAwardQuery, useUpdateAwardMutation, useDeleteAwardMutation } = awardApi;
