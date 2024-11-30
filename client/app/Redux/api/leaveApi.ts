import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

export const leaveApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createLeave: build.mutation({
      query: (data) => ({
        url: "/leave/create-leave",
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.leave],
    }),
    getAllLeave: build.query({
      query: () => ({
        url: "/leave",
        method: "GET",
      }),
      providesTags: [tagTypes.leave],
    }),
    getSingleLeave: build.query({
      query: (id) => ({
        url: `/leave/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.leave],
    }),

    deleteLeave: build.mutation({
      query: (id) => ({
        url: `/leave/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.leave],
    }),

    updateLeave: build.mutation({
      query: (data) => ({
        url: `/leave/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.leave],
    }),
  }),
});

export const {
  useCreateLeaveMutation,
  useGetAllLeaveQuery,
  useGetSingleLeaveQuery,
  useDeleteLeaveMutation,
  useUpdateLeaveMutation,
} = leaveApi;
