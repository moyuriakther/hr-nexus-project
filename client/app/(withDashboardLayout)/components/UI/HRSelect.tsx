import { TSelect } from "@/app/types";
import React from "react";

type THRSelectProps = {
  data: TSelect[];
  setLimit: React.Dispatch<React.SetStateAction<string>>;
};

const HRSelect: React.FC<THRSelectProps> = ({ data, setLimit }) => {
  return (
    <select
      onChange={(e) => setLimit(e.target.value)}
      className="border p-[2px] rounded-[3px] border-primary"
    >
      {data.map((item, i) => (
        <option key={i} value={item.value}>
          {item.key}
        </option>
      ))}
    </select>
  );
};

export default HRSelect;
