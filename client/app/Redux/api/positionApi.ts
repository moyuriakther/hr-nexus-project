import { TQueryParams } from "@/app/types";
import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

export const positionApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createPosition: build.mutation({
      query: (data) => {
        return {
          url: "/position/create-position",
          method: "POST",
          data: data,
        };
      },
      invalidatesTags: [tagTypes.position],
    }),

    getAllPosition: build.query({
      query: (args) => {
        const params = new URLSearchParams();

        args?.forEach((item: TQueryParams) => {
          params.append(item.name, item.value as string);
        });
        return {
          url: "/position",
          method: "GET",
        };
      },

      providesTags: [tagTypes.position],
    }),

    getSinglePosition: build.query({
      query: (id) => ({
        url: `/position/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.position],
    }),

    updatePosition: build.mutation({
      query: (data) => ({
        url: `/position/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.position],
    }),

    deletePosition: build.mutation({
      query: (id) => ({
        url: `/position/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useCreatePositionMutation,
  useGetAllPositionQuery,
  useGetSinglePositionQuery,
  useUpdatePositionMutation,
  useDeletePositionMutation,
} = positionApi;
