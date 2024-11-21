import { ReactNode } from "react";

export type TSidebarItem = {
  title: string;
  path: string;
};

export type TSidebarMenus = {
  name: string;
  icon: ReactNode;
  children: TSidebarItem[];
};
