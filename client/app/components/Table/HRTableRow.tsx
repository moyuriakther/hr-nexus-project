import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type THRTableRow = {
  children: ReactNode;
  className?: string;
};

const HRTableRow: React.FC<THRTableRow> = ({ children, className }) => {
  return (
    <td className={`${cn(className)}px-4 py-2 text-sm border border-gray-200`}>
      {children}
    </td>
  );
};

export default HRTableRow;
