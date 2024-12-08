import { Payment } from "@/app/types";
import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

interface Meta {
  page: number;
  limit: number;
  total: number;
}

// Define the structure of the API response for getAllLoan
interface GetAllPaymentResponse {
  meta: Meta;
  data: Payment[]; // The array of loans
}

interface GetAllPaymentQueryArgs {
  searchTerm?: string;
  [key: string]: any;
}

export const paymentApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createPayment: build.mutation({
      query: (data) => ({
        url: "/payment/create-payment",
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.payment],
    }),

    getAllPayment: build.query<GetAllPaymentResponse, GetAllPaymentQueryArgs>({
      query: ({ searchTerm = "", ...filters } = {}) => {
        const queryString = new URLSearchParams({
          searchTerm,
          ...filters,
        }).toString();

        return {
          url: `/payment?${queryString}`,
          method: "GET",
        };
      },
      providesTags: [tagTypes.payment],
    }),
    getSinglePayment: build.query({
      query: (id) => ({
        url: `/payment/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.payment],
    }),

    deletePayment: build.mutation({
      query: (id) => ({
        url: `/payment/${id}`,
        method: "DELETE",
        // data: data.body,
      }),
      invalidatesTags: [tagTypes.payment],
    }),

    updatePayment: build.mutation({
      query: (data) => ({
        url: `/payment/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.payment],
    }),
  }),
});

export const {
  useCreatePaymentMutation,
  useGetAllPaymentQuery,
  useGetSinglePaymentQuery,
  useDeletePaymentMutation,
  useUpdatePaymentMutation,
} = paymentApi;
