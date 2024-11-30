import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

export const employeeApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createEmployee: build.mutation({
      query: (data) => ({
        url: "/employee/create-employee",
        method: "POST",
        data: data,
      }),
      invalidatesTags: [tagTypes.employee],
    }),
  }),
});

export const { useCreateEmployeeMutation } = employeeApi;
