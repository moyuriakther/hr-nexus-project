/* eslint-disable @typescript-eslint/no-explicit-any */
import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

export const departmentApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createDepartment: build.mutation({
      query: (data) => ({
        url: "/department/create-department",
        method: "POST",
        data: data,
      }),
      invalidatesTags: [tagTypes.department],
    }),
    getAllDepartments: build.query({
      query: (args: Record<string, any>) => ({
        url: "/department",
        method: "GET",
        params: args,
      }),
      providesTags: [tagTypes.department],
    }),
    getDepartment: build.query({
      query: (id) => ({
        url: `/department/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.department],
    }),
    updateDepartment: build.mutation({
      query: (data) => ({
        url: `/department/${data.departmentId}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.department],
    }),
    deleteDepartment: build.mutation({
      query: (data) => ({
        url: `/department/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.department],
    }),
  }),
});

export const {
  useCreateDepartmentMutation,
  useGetAllDepartmentsQuery,
  useGetDepartmentQuery,
  useUpdateDepartmentMutation,
  useDeleteDepartmentMutation,
} = departmentApi;
