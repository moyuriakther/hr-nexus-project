import { cn } from "@/app/utils/cn";
import { Controller, useFormContext } from "react-hook-form";

type TSelectProps = {
  name: string;
  label?: string;
  required?: boolean;
  placeholder?: string;
  options: { value: string | number|boolean; label: string }[];
  className?: string;
  defaultValue?: string | number;
};

const HRSelect = ({
  name,
  label,
  placeholder,
  options,
  className,
  defaultValue,
}: TSelectProps) => {
  const { control } = useFormContext();
console.log(options)
  return (
    <div>
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        render={({ field: { value, ...field }, fieldState: { error } }) => (
          <>
            <label className="mb-2 block font-medium">{label}</label>
            <select
              {...field}
              value={value || ""}
              className={cn(
                "h-10 rounded-none border w-full px-4 outline-[#198754] transition duration-200 outline-[1px]",
                className
              )}
            >
              {placeholder && (
                <option value="" disabled>
                  {placeholder}
                </option>
              )}
              {options?.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <p className="text-red-500 text-sm my-1">{error?.message}</p>
          </>
        )}
      />
    </div>
  );
};

export default HRSelect;
