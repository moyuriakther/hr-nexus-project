import { cn } from "@/app/utils/cn";
import { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";

type TSelectProps = {
  name: string;
  options: { label: string; value: string }[];
  required?: boolean;
  label?: string;
  className?: string;
  defaultValue?: [string];
};

const HRMultipleSelect = ({
  name,
  options,
  label,
  className,
  defaultValue,
}: TSelectProps) => {
  const { control } = useFormContext();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="relative">
      <Controller
        name={name}
        defaultValue={defaultValue}
        control={control}
        render={({
          field: { value = [], onChange },
          fieldState: { error },
        }) => (
          <>
            <label className="mb-2 block font-medium">{label}</label>
            <div
              className={cn(
                "h-auto border rounded-md px-4 py-2 cursor-pointer outline-[#198754] transition duration-200 outline-[1px] bg-white",
                className
              )}
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <div className="flex flex-wrap gap-1">
                {value.length === 0 && (
                  <span className="text-gray-400">Select day</span>
                )}
                {value.map((selectedValue: string) => {
                  const selectedOption = options.find(
                    (opt) => opt.value === selectedValue
                  );
                  return (
                    <div
                      key={selectedValue}
                      className="flex items-center bg-blue-100 text-blue-600 rounded-md px-2 py-1 text-sm"
                    >
                      {selectedOption?.label}
                      <button
                        type="button"
                        className="ml-2 text-blue-500 hover:text-blue-700"
                        onClick={(e) => {
                          e.stopPropagation();
                          onChange(
                            value.filter((val: string) => val !== selectedValue)
                          );
                        }}
                      >
                        &times;
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Dropdown */}
            {dropdownOpen && (
              <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-48 overflow-auto">
                {options.map((option) => (
                  <div
                    key={option.value}
                    className={cn(
                      "px-4 py-2 rounded cursor-pointer hover:bg-blue-100",
                      value.includes(option.value) ? "bg-blue-100" : ""
                    )}
                    onClick={() => {
                      const newValue = value.includes(option.value)
                        ? value.filter((val: string) => val !== option.value)
                        : [...value, option.value];
                      onChange(newValue);
                    }}
                  >
                    {option.label}
                  </div>
                ))}
              </div>
            )}

            <p className="text-red-500 text-sm my-1">{error?.message}</p>
          </>
        )}
      />
    </div>
  );
};

export default HRMultipleSelect;
