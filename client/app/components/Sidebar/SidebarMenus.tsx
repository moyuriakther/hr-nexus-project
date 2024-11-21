/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoChevronDown } from "react-icons/io5";
import { Menus } from "./menu";
import SubMenu from "./SubMenu";

type TSidebarMenusProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  dropdownText: string;
  setDropdownText: React.Dispatch<React.SetStateAction<string>>;
};

const SidebarMenus: React.FC<TSidebarMenusProps> = ({
  open,
  setOpen,
  dropdownText,
  setDropdownText,
}) => {
  const setDropdownTextHandler = (value: string) => {
    if (value === dropdownText) {
      setDropdownText("");
    } else {
      setDropdownText(value);
    }
  };

  return (
    <>
      {Menus?.map((menu, i) => {
        return (
          <>
            <li
              key={i}
              className={` ${
                dropdownText === menu.name && "border-l-4 border-primary"
              }  `}
              onClick={() => {
                setDropdownTextHandler(menu.name);
              }}
                onMouseEnter={() => setOpen(true)}
            >
              <div
                className={`${
                  dropdownText === menu.name && "bg-[#00b07426] text-primary"
                } cursor-pointer group flex items-center justify-between hover:bg-[#00b07426] hover:text-primary  px-2 rounded ${
                  open ? "mx-4" : "mx-2"
                }`}
              >
                <div className="group font-medium flex items-center lg:gap-3.5 p-2 rounded-md transition">
                  <div className="">{menu.icon}</div>
                  <h2
                    className={`whitespace-pre hover:text-primary transition duration-100 ${
                      !open && "opacity-0 translate-x-28 overflow-hidden"
                    }`}
                  >
                    {menu?.name}
                  </h2>
                  <h2
                    className={`${
                      open && "hidden"
                    } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 hover:text-white rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
                  >
                    {menu?.name}
                  </h2>
                </div>

                <div className={`${!open && "hidden"}`}>
                  {dropdownText === menu.name ? (
                    <IoChevronDown />
                  ) : (
                    <IoIosArrowBack />
                  )}
                </div>
              </div>
            </li>
            <div
              style={{
                maxHeight: dropdownText === menu.name ? "500px" : "0",
                transition: "max-height 0.4s ease",
                overflow: "hidden",
              }}
              className={open ? "block" : "hidden"}
            >
              <ul className="pl-6">
                {menu.children.map((item: any, i: number) => {
                  return <SubMenu key={i} item={item} />;
                })}
              </ul>
            </div>
          </>
        );
      })}
    </>
  );
};

export default SidebarMenus;