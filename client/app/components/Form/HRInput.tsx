import { cn } from "@/app/utils/cn";
import { Controller, useFormContext } from "react-hook-form";

type TInputProps = {
  type: string;
  name: string;
  required?: boolean;
  placeholder?: string;
  label?: string;
  className?: string;
};

const HRInput = ({
  type,
  name,
  placeholder,
  label,
  className,
}: TInputProps) => {
  const { control } = useFormContext();

  return (
    <div>
      <Controller
        name={name}
        control={control}
        render={({ field: { value, ...field }, fieldState: { error } }) => (
          <>
            <label className="mb-2 block">{label}</label>
            <input
              {...field}
              value={value}
              type={type}
              placeholder={placeholder}
              className={cn(
                "h-11 rounded-none border w-full px-4 outline-[#198754]  transition duration-200 outline-[1px]",
                className
              )}
            />
            <p className="text-red-500 text-sm my-1">{error?.message}</p>
          </>
        )}
      />
    </div>
  );
};

export default HRInput;