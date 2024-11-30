import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

export const clientApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createClient: build.mutation({
      query: (data) => ({
        url: "/clients/create-client",
        method: "POST",
        data: data,
      }),
      invalidatesTags: [tagTypes.client],
    }),
    getAllClients: build.query({
       query: () => ({
        url: "/clients",
        method: "GET",
        }),
        providesTags: [tagTypes.client]
    }),
     getClient: build.query({
       query: (id) => ({
        url: `/clients/${id}`,
        method: "GET",
        }),
        providesTags: [tagTypes.client]
    }),
    updateClient: build.mutation({
      query: (data) => ({
        url: `/clients/${data.clientId}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.client],
    }),
    deleteClient: build.mutation({
      query: (id) => ({
        url: `/clients/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.client],
    }),
  }),
});

export const { useCreateClientMutation, useGetAllClientsQuery, useGetClientQuery, useUpdateClientMutation, useDeleteClientMutation } = clientApi;
