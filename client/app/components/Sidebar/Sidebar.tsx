"use client";

import { assets } from "@/app/assets";
import { useAppSelector } from "@/app/Redux/hook";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import SidebarMenus from "./SidebarMenus";
import SidebarSearch from "./SidebarSearch";
import style from "./sidebar.module.css";

const Sidebar = () => {
  const { open } = useAppSelector((state) => state.sidebar);
  const [dropdownText, setDropdownText] = useState<string>("");

  return (
    <div className="flex">
      <div
        className={`bg-white h-screen ${style.scrollBar} ${
          open ? "w-[255px]" : "w-[71px]"
        } duration-500 `}
      >
        <div className={`${open ? "border-b h-[68px]" : ""} pt-1 px-2`}>
          <div className="flex items-center justify-center">
            <Link href="/">
              <Image
                src={assets.images.logo}
                className={`cursor-pointer lg:w-24 w-12 duration-500 `}
                alt=""
                width={500}
                height={500}
              />
            </Link>
          </div>
        </div>

        <ul className="mt-2 flex flex-col gap-1.5 relative">
          {/* Search bar */}
          <div className={`${open ? "block" : "hidden"} mx-4 rounded-md`}>
            <SidebarSearch />
          </div>
          {/* Search bar */}

          {/* sidebar */}
          <SidebarMenus
            dropdownText={dropdownText}
            setDropdownText={setDropdownText}
          />
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
