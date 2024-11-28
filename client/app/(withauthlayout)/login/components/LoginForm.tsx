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

import { useRouter } from "next/navigation";
import { useState } from "react";
import { signInUser } from "@/app/services/actions/userLogin";
import { storeUserInfo } from "@/app/services/actions/auth.services";

const LoginForm = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false); // State for loading

  const handleLogin: SubmitHandler<FieldValues> = async (data) => {
    setLoading(true); // Set loading to true
    try {
      const res = await signInUser(data);
      if (res?.data?.accessToken) {
        toast.success(res?.message || "Login successful!");
        storeUserInfo({ accessToken: res?.data?.accessToken });
        router.refresh();
      } else {
        toast.error("Invalid response from the server");
      }
    } catch (err: any) {
      const errorMessage =
        err?.response?.data?.message ||
        "Account does not exist. Please register first!";
      toast.error(errorMessage);
    } finally {
      setLoading(false); // Reset loading state
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
      <div className="flex justify-end pb-3">
        <p
          className="cursor-pointer font-medium text-primary hover:underline"
          onClick={() => router.push("/forgot-password")}
        >
          Forgot Password?
        </p>
      </div>
      <Button
        type="submit"
        fullWidth
        className={`font-semibold text-white rounded-none w-full ${
          loading ? "bg-gray-400 cursor-not-allowed" : "bg-primary"
        }`}
        isDisabled={loading} // Disable button when loading
      >
        {loading ? "Logging in..." : "Sign In"}
      </Button>
    </HRForm>
  );
};

export default LoginForm;
