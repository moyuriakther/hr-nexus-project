/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoChevronDown } from "react-icons/io5";
import { Menus } from "./menu";
import SubMenu from "./SubMenu";
import { useAppDispatch, useAppSelector } from "@/app/Redux/hook";
import { setOpen } from "@/app/Redux/sidebar/sidebarSlice";
import Link from "next/link";

type TSidebarMenusProps = {
  dropdownText: string;
  setDropdownText: React.Dispatch<React.SetStateAction<string>>;
};

const SidebarMenus: React.FC<TSidebarMenusProps> = ({
  dropdownText,
  setDropdownText,
}) => {
  const { open } = useAppSelector((state) => state.sidebar);
  const dispatch = useAppDispatch();

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
                dispatch(setOpen(true));
              }}
            >
              <div
                className={`${
                  dropdownText === menu.name && "bg-[#00b07426] text-primary"
                } cursor-pointer group flex items-center justify-between hover:bg-[#00b07426] hover:text-primary py-[2px] px-2 rounded ${
                  open ? "mx-4" : "mx-2"
                }`}
              >
                {menu?.path ? (
                  <>
                    <Link
                      href={menu?.path}
                      className="group font-medium flex items-center gap-3.5 p-2 rounded-md transition"
                    >
                      <p
                        className={`${
                          dropdownText === menu.name && "text-primary"
                        } `}
                      >
                        {menu.icon}
                      </p>
                      <h2
                        className={`whitespace-pre hover:text-primary transition duration-100 text-sm ${
                          !open && "opacity-0 translate-x-28 overflow-hidden "
                        }`}
                      >
                        {menu?.name}
                      </h2>
                    </Link>
                  </>
                ) : (
                  <>
                    <div className="group font-medium flex items-center gap-3.5 p-2 rounded-md transition">
                      <div className="">{menu.icon}</div>
                      <h2
                        className={`whitespace-pre hover:text-primary transition duration-100 text-sm ${
                          !open && "opacity-0 translate-x-28 overflow-hidden "
                        }`}
                      >
                        {menu?.name}
                      </h2>
                    </div>
                  </>
                )}

                {menu?.children?.length ? (
                  <>
                    <div className={`${!open && "hidden"}`}>
                      {dropdownText === menu.name ? (
                        <IoChevronDown />
                      ) : (
                        <IoIosArrowBack />
                      )}
                    </div>
                  </>
                ) : null}
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
                {menu?.children?.map((item: any, i: number) => {
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
