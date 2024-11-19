import { Metadata } from "next";
import LoginForm from "./components/LoginForm";

export const metadata: Metadata = {
  title: "Login",
};

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-[400px] mx-auto p-6 border">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
