"use server";

import { FieldValues } from "react-hook-form";

export type TLoginProps = {
  email: string;
};

export const resetPassword = async (payload: FieldValues, token: string) => {
  const res = await fetch(`http://localhost:5000/api/auth/reset-password`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `${token}`,
    },
    body: JSON.stringify(payload),
    credentials: "include",
  });

  const data = await res.json();

  return data;
};
