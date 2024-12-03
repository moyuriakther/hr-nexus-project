"use client";

import { TPageHeader } from "@/app/types";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type TPageHeaderProps = {
  item: TPageHeader[];
};

const PageHeader: React.FC<TPageHeaderProps> = ({ item }) => {
  const pathname = usePathname();
  return (
    <div className="bg-white lg:px-6 px-3 py-3 rounded-[3px]">
      <div className="flex lg:items-center flex-wrap gap-3">
        {item.map((item, i: number) => (
          <div key={i}>
            <Button
              size="sm"
              className={`${
                item.path === pathname
                  ? "bg-primary text-white "
                  : "bg-transparent"
              } rounded-[3px] text-base hover:bg-primary hover:bg-opacity-20 hover:text-primary`}
            >
              <Link href={`${item.path}`}>{item.name}</Link>
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PageHeader;
