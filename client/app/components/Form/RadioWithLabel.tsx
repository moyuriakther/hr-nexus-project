import { cn } from "@/lib/utils";
import React from "react";

/* eslint-disable @typescript-eslint/no-explicit-any */
type TRadioOption = {
  value: string | number;
  label: string;
};

type TRadioWithLabel = {
  name: string;
  options: TRadioOption[];
  onChange: any;
  required?: boolean;
  label?: string;
};

const RadioWithLabel: React.FC<TRadioWithLabel> = ({
  name,
  onChange,
  label,
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
        <>
          <div className="space-y-2">
            {options.map((option) => (
              <label
                key={option.value}
                className="flex items-center gap-2 cursor-pointer"
              >
                <input
                  name={name}
                  type="radio"
                  value={option.value}
                  checked={option.label === option.value}
                  onChange={onChange}
                  className={cn(
                    "h-4 w-4 border border-gray-300 rounded-full focus:ring-2 focus:ring-[#198754]"
                  )}
                />
                <span>{option.label}</span>
              </label>
            ))}
          </div>
        </>
      </div>
    </div>
  );
};

export default RadioWithLabel;
