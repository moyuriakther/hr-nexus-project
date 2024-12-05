"use client";

import { assets } from "@/app/assets";
import { useAppDispatch, useAppSelector } from "@/app/Redux/hook";
import { setOpen } from "@/app/Redux/sidebar/sidebarSlice";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { HiX } from "react-icons/hi";
import style from "./sidebar.module.css";
import MobileSidebar from "./SidebarForMobile";
import SidebarMenus from "./SidebarMenus";
import SidebarSearch from "./SidebarSearch";

const Sidebar = () => {
  const { open } = useAppSelector((state) => state.sidebar);
  const [dropdownText, setDropdownText] = useState<string>("");
  const dispatch = useAppDispatch();

  return (
    <>
      <div className="lg:flex sticky top-0 hidden">
        <div
          className={`bg-white h-screen ${style.scrollBar} ${
            open ? "w-[250px]" : "w-[71px]"
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
      <div className="lg:hidden shadow-2xl">
        <MobileSidebar>
          <div className="flex relative z-[99999] shadow-2xl">
            <div
              className={`bg-white h-screen ${style.scrollBar} ${
                open && "w-[250px]"
              } duration-500 `}
            >
              <div className={`${open ? "border-b h-[68px]" : ""} pt-1 px-2`}>
                <div className="flex items-center justify-between">
                  <Link href="/">
                    <Image
                      src={assets.images.logo}
                      className={`cursor-pointer w-24 duration-500 `}
                      alt=""
                      width={500}
                      height={500}
                    />
                  </Link>
                  <div className="">
                    <Button
                      isIconOnly
                      size="sm"
                      color="primary"
                      className="rounded-full bg-opacity-10 text-primary"
                      onClick={() => dispatch(setOpen(!open))}
                    >
                      <HiX className="size-5" />
                    </Button>
                  </div>
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
        </MobileSidebar>
      </div>
    </>
  );
};

export default Sidebar;
