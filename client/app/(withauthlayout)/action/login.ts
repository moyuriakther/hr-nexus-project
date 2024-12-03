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
  const res = await fetch(`http://localhost:5000/api/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
    credentials: "include",
  });

  const data = await res.json();

  console.log(data)

  if (data.success && data?.data?.token) {
    setAccessToken(data?.data?.token, { redirect });
  }

  return data;
};
