"use server";

import { FieldValues } from "react-hook-form";

export type TLoginProps = {
  email: string;
};

export const forgotPassword = async (payload: FieldValues) => {
  const res = await fetch(
    `https://hr-server-kappa.vercel.app/api/auth/forgot-password`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }
  );

  const data = await res.json();

  return data;
};
