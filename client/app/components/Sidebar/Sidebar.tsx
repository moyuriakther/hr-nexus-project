"use client";
import { assets } from "@/app/assets";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Header from "./Header";
import SidebarMenus from "./SidebarMenus";

const Sidebar = () => {
  const [open, setOpen] = useState<boolean>(true);
  const [dropdownText, setDropdownText] = useState<string>("");

  return (
    <div className="flex">
      <div
        className={`bg-white min-h-screen ${
          open ? "w-72" : "w-[71px]"
        } duration-500 border-r shadow-2xl border-gray-100`}
      >
        <div className="py-3 px-4">
          <div className="flex items-center justify-center">
            <Link href="/">
              <Image
                src={assets.images.logo}
                className={`cursor-pointer lg:w-28 w-12 duration-500 `}
                alt=""
                width={500}
                height={500}
              />
            </Link>
          </div>
        </div>

        <ul className="mt-4 flex flex-col gap-2 relative">
          <SidebarMenus
            open={open}
            setOpen={setOpen}
            dropdownText={dropdownText}
            setDropdownText={setDropdownText}
          />
        </ul>
      </div>
      <div className="">
        <Header open={open} setOpen={setOpen} />
      </div>
    </div>
  );
};

export default Sidebar;
