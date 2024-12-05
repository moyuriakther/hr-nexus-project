import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

export const subDepartmentApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createSubDepartment: build.mutation({
      query: (data) => ({
        url: "/sub-department/create-sub-department",
        method: "POST",
        data: data,
      }),
      invalidatesTags: [tagTypes.subDepartment],
    }),
    getAllSubDepartments: build.query({
       query: () => ({
        url: "/sub-department",
        method: "GET",
        }),
        providesTags: [tagTypes.subDepartment]
    }),
    getSubDepartment: build.query({
       query: (id) => ({
        url: `/sub-department/${id}`,
        method: "GET",
        }),
        providesTags: [tagTypes.subDepartment]
    }),
    updateSubDepartment: build.mutation({
      query: (data) => ({
        url: `/sub-department/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.subDepartment],
    }),
    deleteSubDepartment: build.mutation({
      query: (data) => ({
        url: `/sub-department/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.subDepartment],
    }),
  }),
});

export const { useCreateSubDepartmentMutation, useGetAllSubDepartmentsQuery, useGetSubDepartmentQuery, useUpdateSubDepartmentMutation, useDeleteSubDepartmentMutation } = subDepartmentApi;
