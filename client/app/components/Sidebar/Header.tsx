"use client";

import { useGetMyProfileQuery } from "@/app/Redux/api/userApi";
import { useAppDispatch, useAppSelector } from "@/app/Redux/hook";
import { setOpen } from "@/app/Redux/sidebar/sidebarSlice";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  User,
} from "@nextui-org/react";
import Image from "next/image";
import { AiOutlineFullscreen } from "react-icons/ai";
import { CgMenuRight } from "react-icons/cg";
import { MdCleaningServices } from "react-icons/md";

const Header = () => {
  const dispatch = useAppDispatch();
  const { open } = useAppSelector((state) => state.sidebar);
  const { data: myProfile } = useGetMyProfileQuery("");

  return (
    <div className="px-4 py-3 shadow-md sticky top-0 bg-white z-[9]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-5">
          <CgMenuRight
            className="cursor-pointer size-7 text-gray-400"
            onClick={() => dispatch(setOpen(!open))}
          />
          <div>
            <Button
              variant="flat"
              className="text-primary bg-secondary bg-opacity-50 rounded-md font-medium h-11"
            >
              <MdCleaningServices className="size-5" />
              Cache clear
            </Button>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Button
            isIconOnly
            className="bg-secondary bg-opacity-70 rounded-full"
          >
            <AiOutlineFullscreen className="size-5" />
          </Button>

          <Dropdown placement="bottom-start">
            <DropdownTrigger>
              <User
                as="button"
                avatarProps={{
                  isBordered: true,
                  src: myProfile?.photo,
                }}
                className="transition-transform"
                description={myProfile?.name}
                name={myProfile?.role}
              />
            </DropdownTrigger>
            <DropdownMenu
              aria-label="User Actions"
              variant="flat"
              className="p-5  rounded-lg w-[300px]"
            >
              {/* User Profile Section */}
              <DropdownItem key="profile" className="gap-2">
                <div className="flex flex-col items-center">
                  {/* Avatar */}
                  <div className="w-[70px] h-[70px] bg-gray-200 rounded-full flex items-center justify-center">
                    <Image
                      src={
                        myProfile?.photo ||
                        "https://cdn-icons-png.flaticon.com/512/219/219970.png"
                      }
                      alt="Admin Avatar"
                      className="w-full h-full rounded-full"
                      width={50}
                      height={50}
                    />
                  </div>
                  {/* Name and Email */}
                  <h1 className="text-[18px] font-bold text-[#212229] mt-2">
                    {myProfile?.role}
                  </h1>
                  <p className="text-[13px] text-[#70737C]">
                    {myProfile?.email}
                  </p>
                </div>
              </DropdownItem>

              {/* Manage Account */}
              <DropdownItem key="settings" className="mt-3">
                <a
                  href="dashboard/profile"
                  className="text-center block text-[#188753] text-[16px]"
                >
                  Manage your account
                </a>
              </DropdownItem>

              {/* Buttons Section */}
              <DropdownItem key="buttons" className="mt-4">
                <div className="flex justify-center gap-4">
                  <button className="py-2 px-4 bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200">
                    Sign out
                  </button>
                  <button className="py-2 px-4 bg-gray-100 text-red-600 rounded-lg hover:bg-gray-200">
                    Close
                  </button>
                </div>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default Header;
