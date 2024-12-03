"use client";

import HRSelect from "@/app/(withDashboardLayout)/components/UI/HRSelect";
import { Button, Divider } from "@nextui-org/react";
import { useState } from "react";
import { FaFileCsv, FaFileExcel, FaPlusCircle } from "react-icons/fa";
import { limitCount } from "../../../employees/position/components/fakeData/limitCount";
import CreateSalaryAdvanceModal from "./CreateSalaryAdvanceModal";

const AddSalaryAdvancePage = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="mb-5">
      <div className="flex items-center justify-between flex-wrap pb-4 lg:gap-0 gap-2">
        <h2 className="font-semibold text-lg">Salary advanced list</h2>
        <div className="flex items-center gap-1">
          <Button
            onClick={() => setIsOpen(true)}
            size="sm"
            className="bg-primary rounded-[4px] text-sm text-white"
          >
            <FaPlusCircle />
            Add salary advanced
          </Button>
        </div>
      </div>
      <Divider />

      <div className="mt-6 flex items-center justify-between flex-wrap lg:gap-0 gap-2">
        <div className="flex items-center gap-1">
          <p>Show</p>
          <HRSelect data={limitCount} />
          <p>entries</p>
        </div>

        <div className="flex items-center">
          <Button
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
          </Button>
        </div>

        <div className="flex items-center gap-1">
          <p>Search: </p>
          <input className="border rounded-[4px] py-1 focus:outline-primary outline-1 transition-all duration-200" />
        </div>
      </div>
      <CreateSalaryAdvanceModal setIsOpen={setIsOpen} modalIsOpen={isOpen} />
    </div>
  );
};

export default AddSalaryAdvancePage;
