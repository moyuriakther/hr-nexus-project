import { Toaster } from "sonner";
import LoginPage from "./(withauthlayout)/login/page";

export default function Home() {
  return (
    <div className="min-h-screen">
       <Toaster />
      <LoginPage />
    </div>
  );
}
