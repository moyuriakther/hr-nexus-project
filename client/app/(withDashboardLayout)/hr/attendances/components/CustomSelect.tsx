import React from "react";
import Select, { Props as SelectProps } from "react-select";

interface CustomSelectProps extends SelectProps {
  label?: string;
  error?: string;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  label,
  error,
  ...selectProps
}) => {
  return (
    <div className="mb-2">
      {label && (
        <label className="block text-xs font-bold text-gray-700 mb-1">
          {label} <span className="text-red-500">*</span>
        </label>
      )}
      <Select
        {...selectProps}
        className="react-select-container"
        classNamePrefix="react-select"
        placeholder="Select one"
      />
      {error && <p className="text-red-500 font-bold mt-1">{error}</p>}
    </div>
  );
};

export default CustomSelect;
