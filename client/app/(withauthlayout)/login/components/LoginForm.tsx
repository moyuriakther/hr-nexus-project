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
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

const LoginForm = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false); // State for loading

  const handleLogin: SubmitHandler<FieldValues> = async (data) => {
    setLoading(true); // Set loading to true when login starts
    try {
      // Sending the login data to the server
      const response = await axios.post(
        "https://hr-nexus.vercel.app/api/auth/login",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Server Response:", response.data);
      toast.success("Login successful");
      router.push("/dashboard");
    } catch (error: any) {
      // Handle error and show an error toast
      console.error("Login Error:", error);
      toast.error(
        error.response?.data?.message || "An error occurred during login"
      );
    } finally {
      setLoading(false); // Reset loading state when login completes
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
        <p className="cursor-pointer font-medium">Forgot Password</p>
      </div>
      <Button
        type="submit"
        fullWidth
        className="font-semibold text-white rounded-none w-full bg-primary"
        isDisabled={loading} // Disable button when loading
      >
        {loading ? "logging in.." : "Sign in"}
      </Button>
    </HRForm>
  );
};

export default LoginForm;
