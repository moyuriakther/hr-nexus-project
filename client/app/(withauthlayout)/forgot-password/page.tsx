"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
import HRForm from "@/app/components/Form/HRForm";
import HRInput from "@/app/components/Form/HRInput";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  loginDefaultValues,
  loginValidationSchema,
} from "@/app/Validations/loginValidation";
import { Button } from "@nextui-org/react";
import { useState } from "react";

import { useRouter } from "next/navigation";

const ForgotPassword = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // Handle form submission
  const handleSubmit = async (data: any) => {
    setLoading(true);
    router.push("/");
    console.log(data);
  };

  return (
    <div className="max-w-sm mx-auto mt-20 p-8 bg-white rounded-xl shadow-sm border">
      <HRForm
        onSubmit={handleSubmit}
        defaultValues={loginDefaultValues}
        resolver={zodResolver(loginValidationSchema)}
      >
        <h2 className="text-2xl text-center">Reset password</h2>
        <h2 className="text-center text-sm text-gray-400 my-2 pb-3">
          Reset password reset instruction
        </h2>

        <div className="mb-5">
          <HRInput
            type="email"
            name="email"
            placeholder="Email Password"
            required
          />
        </div>

        <Button
          type="submit"
          fullWidth
          className={`font-semibold text-white rounded-none w-full ${
            loading ? "bg-gray-400 cursor-not-allowed" : "bg-primary"
          }`}
          isDisabled={loading}
        >
          {loading ? "Sending..." : "Send password reset link"}
        </Button>
        <h2 className="text-center text-sm text-gray-400 mt-3 ">
          Remember Password <span className="text-black ms-2">Sign in</span>
        </h2>
      </HRForm>
    </div>
  );
};

export default ForgotPassword;
