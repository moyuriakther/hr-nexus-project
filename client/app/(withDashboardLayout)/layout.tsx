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
        <div>
          <Sidebar />
        </div>

        <div className="h-full w-full  flex-1">
          <div className="">
            <Header />
            <div className="bg-secondary p-4">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
