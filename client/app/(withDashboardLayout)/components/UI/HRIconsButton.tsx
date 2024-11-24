import { cn } from "@/lib/utils";
import { Button } from "@nextui-org/react";
import React, { ReactNode } from "react";

type THRIconsButton = {
  className?: string;
  children: ReactNode;
};

const HRIconsButton: React.FC<THRIconsButton> = ({ className, children }) => {
  return (
    <Button size="sm" isIconOnly className={cn(className, "rounded-[4px] ")}>
      {children}
    </Button>
  );
};

export default HRIconsButton;
