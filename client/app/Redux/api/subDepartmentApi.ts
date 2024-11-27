import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

export const subDepartmentApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createSubDepartment: build.mutation({
      query: (loginData) => ({
        url: "/sub-department/create-sub-department",
        method: "POST",
        data: loginData,
      }),
      invalidatesTags: [tagTypes.subDepartment],
    }),
    getAllSubDepartments: build.query({
       query: () => ({
        url: "/sub-department",
        method: "GET",
        }),
        providesTags: [tagTypes.subDepartment]
    })
  }),
});

export const { useCreateSubDepartmentMutation, useGetAllSubDepartmentsQuery } = subDepartmentApi;
