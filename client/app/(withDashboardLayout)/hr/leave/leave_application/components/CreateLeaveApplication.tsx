"use client";

import HRSelect from "@/app/(withDashboardLayout)/components/UI/HRSelect";
import ExcelExport from "@/app/(withauthlayout)/test/ExcelExport";
import { USER_ROLE } from "@/app/constants";
import { TLeave } from "@/app/types";
import { getUserFromLocalStorage } from "@/app/utils/localStorage";
import { Button, Divider } from "@nextui-org/react";
import React, { useState } from "react";
import { FaFilter, FaPlusCircle } from "react-icons/fa";
import { limitCount } from "../../../employees/position/components/fakeData/limitCount";
import CreateLeaveApplicationModal from "./CreateLeaveApplicationModal";
import { headers } from "./tableHeader";

interface ComponentHeaderProps {
  onSearch: (searchTerm: string) => void;
  data: TLeave[];
  loading: boolean;
}

const CreateLeaveApplication = ({
  onSearch,
  data,
  loading,
}: ComponentHeaderProps) => {
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
        <h2 className="font-semibold text-lg">Leave Application list</h2>
        <div className="flex items-center gap-1">
          <Button
            size="sm"
            className="bg-primary rounded-[4px] text-sm text-white"
          >
            <FaFilter /> Filter
          </Button>
          {user?.role === USER_ROLE.ADMIN && (
            <Button
              onClick={() => setIsOpen(true)}
              size="sm"
              className="bg-primary rounded-[4px] text-sm text-white"
            >
              <FaPlusCircle /> Add Leave Application
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
          <ExcelExport
            data={data}
            headers={headers}
            baseFileName="Holiday_Data"
            isLoading={loading}
            // displayField="name"
          />
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
      <CreateLeaveApplicationModal setIsOpen={setIsOpen} modalIsOpen={isOpen} />
    </div>
  );
};

export default CreateLeaveApplication;
