import { cn } from "@/app/utils/cn";
import { Controller, useFormContext } from "react-hook-form";

type TRadioOption = {
  value: string | number;
  label: string;
};

type TRadioInputProps = {
  name: string;
  checked?: boolean;
  options: TRadioOption[];
  required?: boolean;
  label?: string;
  className?: string;
  radioClassName?: string;
};

const HRRadioInput = ({
  name,
  options,
  label,
  className,
  radioClassName,
}: TRadioInputProps) => {
  const { control } = useFormContext();

  return (
    <div className={className}>
      {label && <label className="mb-2 block font-medium">{label}</label>}
      <Controller
        name={name}
        control={control}
        render={({ field: { value, onChange }, fieldState: { error } }) => (
          <>
            <div className="space-y-2">
              {options.map((option) => (
                <label
                  key={option.value}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <input
                    type="radio"
                    value={option.value}
                    checked={value === option.value}
                    onChange={() => onChange(option.value)}
                    className={cn(
                      "h-4 w-4 border border-gray-300 rounded-full focus:ring-2 focus:ring-[#198754]",
                      radioClassName
                    )}
                  />
                  <span>{option.label}</span>
                </label>
              ))}
            </div>
            <p className="text-red-500 text-sm my-1">{error?.message}</p>
          </>
        )}
      />
    </div>
  );
};

export default HRRadioInput;
