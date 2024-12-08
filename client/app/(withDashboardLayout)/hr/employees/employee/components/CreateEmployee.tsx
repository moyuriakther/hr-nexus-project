"use client";

import HRSelect from "@/app/(withDashboardLayout)/components/UI/HRSelect";
import { Button, Divider } from "@nextui-org/react";
import { FaFileCsv, FaFileExcel, FaFilter, FaPlusCircle } from "react-icons/fa";
import { limitCount } from "../../position/components/fakeData/limitCount";
import Link from "next/link";
import { useGetAllEmployeeQuery } from "@/app/Redux/api/employeeApi";
import { CSVLink } from "react-csv";
import Loader from "@/app/components/utils/Loader";

const CreateEmployee = () => {
  const { data: employee, isLoading } = useGetAllEmployeeQuery({});
  const tableHeader = [
    "Sl",
    // "Employee id",
    "Name of employee",
    "Email",
    "Mobile no",
    "Date of birth",
    "Designation",
    "Joining data",
    "Status",
    "Action",
  ];

  const generateFileName = (extension: string) => {
    const timestamp = new Date();
    const formattedTimestamp = `${timestamp.getDate()}-${
      timestamp.getMonth() + 1
    }-${timestamp.getFullYear()}`;

    return `${"exported_data"}_${formattedTimestamp}.${extension}`;
  };

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
          <Button
            size="sm"
            className="bg-primary rounded-[4px] text-sm text-white"
          >
            <CSVLink
              data={employee}
              headers={tableHeader.map((item) => ({ label: item, key: item }))}
              // headers={tableHeader}
              filename={generateFileName("csv")}
              className="flex items-center gap-2"
            >
              <FaFileCsv /> CSV
            </CSVLink>
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
    </div>
  );
};

export default CreateEmployee;
