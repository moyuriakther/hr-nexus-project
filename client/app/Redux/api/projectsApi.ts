import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

export const projectsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createProject: build.mutation({
      query: (data) => ({
        url: "/projects/create-project",
        method: "POST",
        data: data,
      }),
      invalidatesTags: [tagTypes.project],
    }),
    getAllProjects: build.query({
       query: () => ({
        url: "/projects",
        method: "GET",
        }),
        providesTags: [tagTypes.project]
    }),
     getProject: build.query({
       query: (id) => ({
        url: `/projects/${id}`,
        method: "GET",
        }),
        providesTags: [tagTypes.project]
    }),
    updateProject: build.mutation({
      query: (data) => ({
        url: `/projects/${data.clientId}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.project],
    }),
    deleteProject: build.mutation({
      query: (id) => ({
        url: `/projects/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.project],
    }),
  }),
});

export const { 
    useCreateProjectMutation,
    useGetAllProjectsQuery, 
    useGetProjectQuery, useUpdateProjectMutation, 
    useDeleteProjectMutation 
} = projectsApi;
