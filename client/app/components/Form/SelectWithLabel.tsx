import { TSelect } from "@/app/types";
import { cn } from "@/lib/utils";
import React from "react";

/* eslint-disable @typescript-eslint/no-explicit-any */
type TSelectProps = {
  name: string;
  required?: boolean;
  placeholder?: string;
  label?: string;
  className?: string;
  onChange: any;
  options: TSelect[];
};

const SelectWithLabel: React.FC<TSelectProps> = ({
  name,
  onChange,
  className,
  label,
  placeholder,
  required,
  options,
}) => {
  return (
    <div className="grid grid-cols-12 items-center">
      <div className="flex items-center gap-1 lg:col-span-3">
        <p className="font-medium">{label}</p>
        {required && <p className="text-red-500 font-bold">*</p>}
      </div>
      <div className="lg:col-span-9">
        <select
          name={name}
          className={cn(
            "h-10 rounded-none border w-full px-4 outline-[#198754]  transition duration-200 outline-[1px]",
            className
          )}
          onChange={onChange}
        >
          <option>{placeholder}</option>
          {options?.map((item, i) => (
            <option value={item.value} key={i}>
              {item.key}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SelectWithLabel;
