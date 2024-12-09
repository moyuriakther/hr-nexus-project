"use client";

import HRSelect from "@/app/(withDashboardLayout)/components/UI/HRSelect";
import { Button, Divider } from "@nextui-org/react";
import { useState } from "react";
import { FaFileCsv, FaFileExcel, FaPlusCircle } from "react-icons/fa";
import { limitCount } from "../../../employees/position/components/fakeData/limitCount";
import CreateSalaryAdvanceModal from "./CreateSalaryAdvanceModal";
import { USER_ROLE } from "@/app/constants";
import { getUserFromLocalStorage } from "@/app/utils/localStorage";
import ExcelCSVExport from "@/app/utils/ExcelAndCSV";
import { Payment } from "@/app/types";

interface ComponentHeaderProps {
  onSearch: (searchTerm: string) => void;
  data: Payment[];
}

const AddSalaryAdvancePage = ({ onSearch, data }: ComponentHeaderProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [searchInput, setSearchInput] = useState("");
  const [limit, setLimit] = useState<string>("10");
  const user = getUserFromLocalStorage();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
    onSearch(e.target.value); // Trigger search on every change
  };

  return (
    <div className="mb-5">
      <div className="flex items-center justify-between flex-wrap pb-4 lg:gap-0 gap-2">
        <h2 className="font-semibold text-lg">Salary advanced list</h2>
        <div className="flex items-center gap-1">
          {user?.role === USER_ROLE.ADMIN && (
            <Button
              onClick={() => setIsOpen(true)}
              size="sm"
              className="bg-primary rounded-[4px] text-sm text-white"
            >
              <FaPlusCircle />
              Add salary advanced
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

        <div className="flex items-center">
          <ExcelCSVExport data={data} baseFileName="Payment_Data" />
          {/* <Button
            size="sm"
            className="bg-primary rounded-[4px] text-sm text-white"
          >
            <FaFileCsv /> CSV
          </Button>
          <Button
            size="sm"
            className="bg-primary rounded-[4px] text-sm text-white"
          >
            <FaFileExcel /> Excel
          </Button> */}
        </div>

        <div className="flex items-center gap-1">
          <p>Search: </p>
          <input
            value={searchInput}
            onChange={handleSearchChange}
            className="border rounded-[4px] py-1 px-2 focus:outline-primary outline-1 transition-all duration-200"
          />
        </div>
      </div>
      <CreateSalaryAdvanceModal setIsOpen={setIsOpen} modalIsOpen={isOpen} />
    </div>
  );
};

export default AddSalaryAdvancePage;
