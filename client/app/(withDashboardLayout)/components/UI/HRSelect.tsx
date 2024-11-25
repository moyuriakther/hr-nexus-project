import { TSelect } from "@/app/types";

type THRSelectProps = {
  data: TSelect[];
};

const HRSelect: React.FC<THRSelectProps> = ({ data }) => {
  return (
    <select className="border p-[2px] rounded-[3px] border-primary">
      {data.map((item, i) => (
        <option key={i} value={item.value}>
          {item.key}
        </option>
      ))}
    </select>
  );
};

export default HRSelect;
