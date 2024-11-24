import { ReactNode } from "react";

export type TSidebarItem = {
  title: string;
  path: string;
};

export type TSidebarMenus = {
  name: string;
  icon: ReactNode;
  path?: string;
  children?: TSidebarItem[];
};

export type TPageHeader = {
  path: string;
  name: string;
};

export type TSelect = {
  key: string;
  value: string;
};
