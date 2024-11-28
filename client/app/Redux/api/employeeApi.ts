import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

export const employeeApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createEmployee: build.mutation({
      query: (data) => ({
        url: "/employee/create-employee",
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.employee],
    }),
    getAllEmployee: build.query({
      query: () => ({
        url: "/employee/get-employees",
        method: "GET",
      }),
      providesTags: [tagTypes.employee],
    }),
    getSingleEmployee: build.query({
      query: (id) => ({
        url: `/employee/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.employee],
    }),

    deleteEmployee: build.mutation({
      query: (data) => ({
        url: `/employee/${data.id}`,
        method: "DELETE",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.employee],
    }),

    updateEmployee: build.mutation({
      query: (data) => ({
        url: `/employee/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.employee],
    }),
  }),
});

export const {
  useCreateEmployeeMutation,
  useGetAllEmployeeQuery,
  useGetSingleEmployeeQuery,
  useDeleteEmployeeMutation,
  useUpdateEmployeeMutation,
} = employeeApi;
