import { TLoan } from "../../types/loan";
import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

interface Meta {
  page: number;
  limit: number;
  total: number;
}

// Define the structure of the API response for getAllLoan
interface GetAllLoanResponse {
  meta: Meta;
  data: TLoan[]; // The array of loans
}

interface GetAllLoanQueryArgs {
  searchTerm?: string;
  [key: string]: any;
}

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
    getAllLoan: build.query<GetAllLoanResponse, GetAllLoanQueryArgs>({
      query: ({ searchTerm = "", ...filters } = {}) => {
        // Build query string for filters and search term
        const queryString = new URLSearchParams({
          searchTerm,
          ...filters,
        }).toString();

        return {
          url: `/loan?${queryString}`, // Include query string in the URL
          method: "GET",
        };
      },
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
