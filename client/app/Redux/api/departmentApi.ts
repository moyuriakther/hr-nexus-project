import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

export const departmentApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createDepartment: build.mutation({
      query: (loginData) => ({
        url: "/department/create-department",
        method: "POST",
        data: loginData,
      }),
      invalidatesTags: [tagTypes.department],
    }),
    getAllDepartments: build.query({
       query: () => ({
        url: "/department",
        method: "GET",
        }),
        providesTags: [tagTypes.department]
    }),
  }),
});

export const { useCreateDepartmentMutation, useGetAllDepartmentsQuery } = departmentApi;
