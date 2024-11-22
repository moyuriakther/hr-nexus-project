"use client";

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
import { AiOutlineFullscreen } from "react-icons/ai";
import { CgMenuRight } from "react-icons/cg";
import { MdCleaningServices } from "react-icons/md";

const Header = () => {
  const dispatch = useAppDispatch();
  const { open } = useAppSelector((state) => state.sidebar);

  return (
    <div className="px-4 py-3 shadow-xl">
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
                  src: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
                }}
                className="transition-transform"
                description="@tonyreichert"
                name="Tony Reichert"
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="User Actions" variant="flat">
              <DropdownItem key="profile" className="h-14 gap-2">
                <p className="font-bold">Signed in as</p>
                <p className="font-bold">@tonyreichert</p>
              </DropdownItem>
              <DropdownItem key="settings">My Settings</DropdownItem>
              <DropdownItem key="team_settings">Team Settings</DropdownItem>
              <DropdownItem key="analytics">Analytics</DropdownItem>
              <DropdownItem key="system">System</DropdownItem>
              <DropdownItem key="configurations">Configurations</DropdownItem>
              <DropdownItem key="help_and_feedback">
                Help & Feedback
              </DropdownItem>
              <DropdownItem key="logout" color="danger">
                Log Out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default Header;
