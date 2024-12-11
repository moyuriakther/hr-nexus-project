import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

export const notice = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createNotice: build.mutation({
      query: (data) => ({
        url: "/noticeboard/create",
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.notice],
    }),
    getAllNotice: build.query({
      query: ({ searchTerm }) => ({
        url: `/noticeboard${searchTerm ? `?searchTerm=${searchTerm}` : ""}`,
        method: "GET",
      }),
      providesTags: [tagTypes.notice],
    }),
    getSingleNotice: build.query({
      query: (id) => ({
        url: `/noticeboard/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.notice],
    }),

    deleteNotice: build.mutation({
      query: (id) => ({
        url: `/noticeboard/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.notice],
    }),

    updateNotice: build.mutation({
      query: (data) => ({
        url: `/noticeboard/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.notice],
    }),
  }),
});

export const {
  useCreateNoticeMutation,
  useGetAllNoticeQuery,
  useGetSingleNoticeQuery,
  useDeleteNoticeMutation,
  useUpdateNoticeMutation,
} = notice;
