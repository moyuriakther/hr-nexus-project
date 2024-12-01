/* eslint-disable @typescript-eslint/no-explicit-any */
import { authKey, USER_ROLE } from "@/app/constants";
import { TAuthUser } from "@/app/types";
import { decodedToken } from "@/app/utils/jwt";
import { getFromLocalStorage } from "@/app/utils/localStorage";
import React from "react";
import { employeesMenu, Menus } from "./menu";
import SubmenuCard from "./SubmenuCard";

type TSidebarMenusProps = {
  dropdownText: string;
  setDropdownText: React.Dispatch<React.SetStateAction<string>>;
};

const SidebarMenus: React.FC<TSidebarMenusProps> = ({
  dropdownText,
  setDropdownText,
}) => {
  const token = getFromLocalStorage(authKey);
  let user;
  if (token) {
    user = decodedToken(token) as TAuthUser;
  }

  return (
    <>
      {user?.role === USER_ROLE.ADMIN ? (
        <>
          {Menus?.map((menu, i) => {
            return (
              <React.Fragment key={i}>
                <SubmenuCard
                  dropdownText={dropdownText}
                  setDropdownText={setDropdownText}
                  menu={menu}
                />
              </React.Fragment>
            );
          })}
        </>
      ) : (
        <>
          {employeesMenu?.map((menu, i) => {
            return (
              <React.Fragment key={i}>
                <SubmenuCard
                  dropdownText={dropdownText}
                  setDropdownText={setDropdownText}
                  menu={menu}
                />
              </React.Fragment>
            );
          })}
        </>
      )}
    </>
  );
};

export default SidebarMenus;
