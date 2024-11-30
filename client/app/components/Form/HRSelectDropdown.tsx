import { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";

type TSelectProps = {
  name: string;
  options: { label: string; value: string }[];
  label?: string;
  placeholder?: string;
};

const HRSelectDropdown = ({
  name,
  options,
  label,
  placeholder = "Select an option",
}: TSelectProps) => {
  const { control } = useFormContext();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="relative">
      <Controller
        name={name}
        control={control}
        render={({ field: { value, onChange }, fieldState: { error } }) => (
          <>
            {label && (
              <label className="block mb-2 font-medium text-gray-700">
                {label}
              </label>
            )}

            {/* Selected Value and Dropdown Toggle */}
            <div
              className="border rounded-md px-4 py-2 cursor-pointer bg-white shadow-sm"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <span className={value ? "text-gray-700" : "text-gray-400"}>
                {value
                  ? options.find((option) => option.value === value)?.label
                  : placeholder}
              </span>
            </div>

            {/* Dropdown Options */}
            {dropdownOpen && (
              <div className="absolute z-10 mt-1 w-full bg-white border rounded-md shadow-lg max-h-48 overflow-y-auto">
                {options.map((option) => (
                  <div
                    key={option.value}
                    className="px-4 py-2 cursor-pointer hover:bg-blue-100"
                    onClick={() => {
                      onChange(option.value);
                      setDropdownOpen(false);
                    }}
                  >
                    {option.label}
                  </div>
                ))}
              </div>
            )}

            {error && (
              <p className="mt-1 text-sm text-red-500">{error.message}</p>
            )}
          </>
        )}
      />
    </div>
  );
};

export default HRSelectDropdown;
