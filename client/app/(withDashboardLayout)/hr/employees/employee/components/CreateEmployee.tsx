"use client";

import HRSelect from "@/app/(withDashboardLayout)/components/UI/HRSelect";
import { Button, Divider } from "@nextui-org/react";
import { FaFilter, FaPlusCircle } from "react-icons/fa";
import { limitCount } from "../../position/components/fakeData/limitCount";
import Link from "next/link";
import { useGetAllEmployeeQuery } from "@/app/Redux/api/employeeApi";
import Loader from "@/app/components/utils/Loader";
import ExcelCSVExport from "@/app/utils/ExcelAndCSV";

const CreateEmployee = () => {
  const { data: employee, isLoading } = useGetAllEmployeeQuery({});

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="mb-5">
      <div className="flex items-center justify-between flex-wrap pb-4 lg:gap-0 gap-2">
        <h2 className="font-semibold text-lg">Employee list</h2>
        <div className="flex items-center gap-1">
          <Button
            size="sm"
            className="bg-primary rounded-[4px] text-sm text-white"
          >
            <FaFilter /> Filter
          </Button>
          <Button
            size="sm"
            className="bg-primary rounded-[4px] text-sm text-white"
          >
            <Link
              href="/hr/employees/create"
              className="flex items-center gap-2"
            >
              <FaPlusCircle /> Add employee
            </Link>
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
          <ExcelCSVExport data={employee} baseFileName="employees_data" />
        </div>

        <div className="flex items-center gap-1">
          <p>Search: </p>
          <input className="border rounded-[4px] py-1 focus:outline-primary outline-1 transition-all duration-200" />
        </div>
      </div>
    </div>
  );
};

export default CreateEmployee;
