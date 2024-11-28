import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

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
    getAllPayment: build.query({
      query: () => ({
        url: "/payment",
        method: "GET",
      }),
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
      query: (data) => ({
        url: `/payment/${data.id}`,
        method: "DELETE",
        data: data.body,
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
