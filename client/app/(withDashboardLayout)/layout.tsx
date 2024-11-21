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
          <div className="py-10 px-4">{children}</div>
        </div>
      </div>
    </div>
  );
}
