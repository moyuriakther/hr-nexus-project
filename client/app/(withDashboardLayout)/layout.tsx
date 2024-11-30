import Header from "../components/Sidebar/Header";
import Sidebar from "../components/Sidebar/Sidebar";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className="flex text-black bg-white w-full">
        <div className="">
          <Sidebar />
        </div>

        <div className="h-full w-full flex-1">
          <div className="">
            <Header />
            <div className="bg-secondary py-4 px-6 min-h-[89vh]">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
