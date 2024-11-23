import { TSidebarItem } from "@/app/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type TSubMenuProps = {
  item: TSidebarItem;
};

const SubMenu: React.FC<TSubMenuProps> = ({ item }) => {
  const pathname = usePathname();

  return (
    <Link
      href={`/hr/${item.path}`}
      className={`${
        pathname === item.path && "text-primary"
      } cursor-pointer hover:bg-primary hover:bg-opacity-20 hover:text-primary flex items-center rounded mx-4 pl-6`}
    >
      <div className="size-1.5 bg-primary rounded-full"></div>
      <div>
        <div className="px-2 py-1.5 rounded-md">
          <h2
            className={`${
              pathname === item.path ? "font-semibold" : "font-normal"
            } text-sm`}
          >
            {item?.title}
          </h2>
        </div>
      </div>
    </Link>
  );
};

export default SubMenu;
