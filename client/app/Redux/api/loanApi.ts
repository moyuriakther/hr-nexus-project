import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

export const loanApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createLoan: build.mutation({
      query: (data) => ({
        url: "/loan/create-loan",
        method: "POST",
        data: data,
      }),
      invalidatesTags: [tagTypes.loan],
    }),
    getAllLoan: build.query({
      query: () => ({
        url: "/loan",
        method: "GET",
      }),
      providesTags: [tagTypes.loan],
    }),
    getSingleLoan: build.query({
      query: (id) => ({
        url: `/loan/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.loan],
    }),
    updateLoan: build.mutation({
      query: (data) => ({
        url: `/loan/${data?.id}`,
        method: "PATCH",
        data: data?.body,
      }),
      invalidatesTags: [tagTypes.loan],
    }),
    deleteLoan: build.mutation({
      query: (id) => ({
        url: `/loan/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.loan],
    }),
  }),
});

export const {
  useCreateLoanMutation,
  useGetAllLoanQuery,
  useDeleteLoanMutation,
  useUpdateLoanMutation,
  useGetSingleLoanQuery,
} = loanApi;
