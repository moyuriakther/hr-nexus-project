// import { axiosBaseQuery } from "@/helpers/axios/axiosBaseQuery";
import { createApi } from "@reduxjs/toolkit/query/react";

import { axiosBaseQuery } from "@/app/helpers/axios/axiosBaseQuery";
import { tagTypesList } from "../tagTypes";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery({
    baseUrl: "https://hr-server-kappa.vercel.app/api",
  }),
  endpoints: () => ({}),
  tagTypes: tagTypesList,
});
