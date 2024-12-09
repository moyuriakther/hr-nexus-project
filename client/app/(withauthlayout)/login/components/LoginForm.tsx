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

const predefinedUsers = [
  {
    email: "admin@admin.com",
    password: "123456",
    role: "Admin",
  },
  {
    email: "user@user.com",
    password: "1234567",
    role: "User",
  },
];

const LoginForm = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(email, password);

  const handleLogin: SubmitHandler<FieldValues> = async (data) => {
    setLoading(true);
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
      setLoading(false);
    }
  };

  const handleAutofill = (user: (typeof predefinedUsers)[0]) => {
    setEmail(user.email);
    setPassword(user.password);
  };

  return (
    <div>
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
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="pb-2 relative">
          <HRInput
            label="Password"
            name="password"
            type="password"
            placeholder="Enter Password"
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mt-5">
          <table className="w-full border border-gray-200 bg-gray-50">
            <thead>
              <tr className="border-b ">
                <th className="p-2 border-r">Email</th>
                <th className="p-2 border-r">Password</th>
                <th className="p-2">Role</th>
              </tr>
            </thead>
            <tbody>
              {predefinedUsers.map((user, index) => (
                <tr
                  key={index}
                  className="cursor-pointer hover:bg-gray-100 text-sm text-center"
                  onClick={() => handleAutofill(user)}
                >
                  <td className="p-2 border-b border-r">{user.email}</td>
                  <td className="p-2 border-b border-r">{user.password}</td>
                  <td className="p-2 border-b ">{user.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-end py-3">
          <p
            className="cursor-pointer text-sm text-primary hover:underline"
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
          isDisabled={loading}
        >
          {loading ? "Logging in..." : "Sign In"}
        </Button>
      </HRForm>
    </div>
  );
};

export default LoginForm;
