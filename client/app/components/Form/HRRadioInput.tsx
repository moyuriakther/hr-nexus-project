import { cn } from "@/app/utils/cn";
import { Controller, useFormContext } from "react-hook-form";

// Define the type for radio options
type TRadioOption = {
  value: string | number | boolean;
  label: string;
};

// Define the props for the RadioInput component
type TRadioInputProps = {
  name: string;
  options: TRadioOption[];
  required?: boolean;
  label?: string;
  className?: string;
  radioClassName?: string;
  defaultValue?: string | number | boolean;
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
      {/* Render the label if provided */}
      {label && <label className="mb-2 block font-medium">{label}</label>}

      {/* Use the Controller from react-hook-form for form state management */}
      <Controller
        name={name}
        control={control}
        render={({ field: { value, onChange }, fieldState: { error } }) => (
          <>
            <div className="space-y-2">
              {options.map((option) => (
                <label
                  key={String(option.value)}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <input
                    type="radio"
                    value={String(option.value)}
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

            {/* Render the error message if validation fails */}
            {error && (
              <p className="text-red-500 text-sm my-1">{error.message}</p>
            )}
          </>
        )}
      />
    </div>
  );
};

export default HRRadioInput;
