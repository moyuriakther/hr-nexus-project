/* eslint-disable @typescript-eslint/no-explicit-any */
import { cn } from "@/lib/utils";

type TInputProps = {
  type: string;
  name: string;
  required?: boolean;
  placeholder?: string;
  label?: string;
  className?: string;
  onChange: any;
};

const InputWithLabel: React.FC<TInputProps> = ({
  name,
  type,
  className,
  label,
  placeholder,
  required,
  onChange,
}) => {
  return (
    <div className="grid grid-cols-12 items-center gap-2">
      <div className="flex items-center gap-1 lg:col-span-3">
        <p className="font-medium">{label}</p>
        {required && <p className="text-red-500 font-bold">*</p>}
      </div>
      <div className="lg:col-span-9">
        <input
          name={name}
          type={type || ""}
          required={required}
          onChange={onChange}
          className={cn(
            "h-10 rounded-none border w-full px-4 outline-[#198754]  transition duration-200 outline-[1px]",
            className
          )}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default InputWithLabel;
