import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

export const awardApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createAward: build.mutation({
      query: (loginData) => ({
        url: "/awards/create-award",
        method: "POST",
        body: loginData,
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
  }),
});

export const { useCreateAwardMutation, useGetAllAwardQuery } = awardApi;
