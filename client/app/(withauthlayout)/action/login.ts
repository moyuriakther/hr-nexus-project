"use server";

import setAccessToken from "@/app/services/actions/setAccessToken";
import { FieldValues } from "react-hook-form";

export type TLoginProps = {
  email: string;
  password: string;
};

export const loginUser = async (
  payload: FieldValues,
  redirect?: string | undefined
) => {
  const res = await fetch(`https://hr-server-kappa.vercel.app/api/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
    credentials: "include",
  });

  const data = await res.json();

  if (data.success && data?.data?.accessToken) {
    setAccessToken(data?.data?.accessToken, { redirect });
  }

  return data;
};
