"use client";

import { useAppSelector } from "@/app/Redux/hook";
import { cn } from "@/app/utils/cn";

type TMobileSidebarProps = {
  children: React.ReactNode;
};

const MobileSidebar = ({ children }: TMobileSidebarProps) => {
  const { open } = useAppSelector((state) => state.sidebar);

  return (
    <div
      className={cn(
        `fixed inset-y-0 left-0 transform ${
          open ? "translate-x-0" : "-translate-x-[1000px]"
        } transition-transform duration-300 ease-in-out w-[255px] bg-white shadow-2xl z-50 `
      )}
    >
      <div>{children}</div>
    </div>
  );
};

export default MobileSidebar;
