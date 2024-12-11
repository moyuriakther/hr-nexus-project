"use client";

import HRSelect from "@/app/(withDashboardLayout)/components/UI/HRSelect";
import { Button, Divider } from "@nextui-org/react";
import { limitCount } from "../../../employees/position/components/fakeData/limitCount";
import { FaPlusCircle } from "react-icons/fa";
import { useState } from "react";
import AddWeekDaysHolidayModal from "./AddWeekDaysHolidayModal";
import { USER_ROLE } from "@/app/constants";
import { getUserFromLocalStorage } from "@/app/utils/localStorage";

interface ComponentHeaderProps {
  onSearch: (searchTerm: string) => void;
}

const AddHolyday = ({ onSearch }: ComponentHeaderProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [searchInput, setSearchInput] = useState("");
  const [limit, setLimit] = useState<string>("10");
  const user = getUserFromLocalStorage();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="mb-5">
      <div className="flex items-center justify-between flex-wrap pb-4 lg:gap-0 gap-2">
        <h2 className="font-semibold text-lg">Weekly holiday</h2>
        <div className="flex items-center gap-1">
          {user?.role === USER_ROLE.ADMIN && (
            <Button
              onClick={() => setIsOpen(true)}
              size="sm"
              className="bg-primary rounded-[4px] text-sm text-white"
            >
              <FaPlusCircle />
              Add Week Days Holiday
            </Button>
          )}
        </div>
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
            className="border rounded-[4px] py-1 focus:outline-primary outline-1 transition-all px-2 duration-200"
          />
        </div>
      </div>
      <AddWeekDaysHolidayModal setIsOpen={setIsOpen} modalIsOpen={isOpen} />
    </div>
  );
};

export default AddHolyday;
