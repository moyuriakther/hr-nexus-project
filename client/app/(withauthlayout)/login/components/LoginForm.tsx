"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
import HRForm from "@/app/components/Form/HRForm";
import HRInput from "@/app/components/Form/HRInput";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  loginDefaultValues,
  loginValidationSchema,
} from "@/app/Validations/loginValidation";
import { Button } from "@nextui-org/react";

const LoginForm = () => {
  const handleLogin: SubmitHandler<FieldValues> = async (data) => {
    try {
      console.log(data);
    } catch (error: any) {
      toast.error(error.message);
    }
  };
  return (
    <HRForm
      onSubmit={handleLogin}
      defaultValues={loginDefaultValues}
      resolver={zodResolver(loginValidationSchema)}
    >
      <div className="mb-5">
        <HRInput
          label="Email Address"
          type="email"
          placeholder="Enter Email Address"
          name="email"
        />
      </div>
      <div className="pb-2 relative">
        <HRInput
          label="Password"
          name="password"
          type="password"
          placeholder="Enter Password"
        />
      </div>

      <Button
        type="submit"
        fullWidth
        className="font-semibold text-white rounded-none w-full bg-primary"
      >
        Sign in
      </Button>
    </HRForm>
  );
};

export default LoginForm;
