import HRSelect from "@/app/(withDashboardLayout)/components/UI/HRSelect";
import { Divider } from "@nextui-org/react";
import React, { useState } from "react";
import { limitCount } from "../../../employees/position/components/fakeData/limitCount";

interface ComponentHeaderProps {
  onSearch: (searchTerm: string) => void;
}
const AddLeaveApproval = ({ onSearch }: ComponentHeaderProps) => {
  const [searchInput, setSearchInput] = useState("");
  const [limit, setLimit] = useState<string>("10");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
    onSearch(e.target.value); // Trigger search on every change
  };
  return (
    <div className="mb-5">
      <div className="flex items-center justify-between flex-wrap pb-4 lg:gap-0 gap-2">
        <h2 className="font-semibold text-lg">Leave approval list</h2>
      </div>
      <Divider />

      <div className="mt-6 flex items-center justify-between flex-wrap lg:gap-0 gap-2">
        <div className="flex items-center gap-1">
          <p>Show</p>
          <HRSelect setLimit={setLimit} data={limitCount} />
          <p>entries</p>
        </div>

        <div className="flex items-center gap-1">
          <p>Search: </p>
          <input
            value={searchInput}
            onChange={handleSearchChange}
            className="border rounded-[4px] px-2 py-1 focus:outline-primary outline-1 transition-all duration-200"
          />{" "}
        </div>
      </div>
    </div>
  );
};

export default AddLeaveApproval;
