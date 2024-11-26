"use client";

import HRIconsButton from "@/app/(withDashboardLayout)/components/UI/HRIconsButton";
import HRTable from "@/app/components/Table/HRTable";
import HRTableRow from "@/app/components/Table/HRTableRow";
import { Button, Divider } from "@nextui-org/react";
import { FaEdit, FaTrash, FaCheck } from "react-icons/fa";
import { FaChartBar } from "react-icons/fa6";
import { fakeData } from "./fakeData";

const SalaryList = () => {
  const tableHeader = [
    "Sl",
    "Salary name",
    "Generate date",
    "Generate by",
    "Status",
    "Approved date",
    "Approved by",
    "Action",
  ];

  return (
    <div className="bg-white rounded-[3px] py-4">
      <h2 className="text-2xl pb-3 px-6 text-black font-semibold mt-3 mb-4">
        Salary list
      </h2>
      <Divider className="mb-6" />
      <div className="px-6">
        <HRTable tableHeader={tableHeader}>
          {fakeData.map((salary, i) => (
            <tr
              className={`${i % 2 === 0 ? "bg-gray-100" : ""} hover:bg-gray-50`}
              key={salary.id}
            >
              <HRTableRow>{salary.id}</HRTableRow>
              <HRTableRow>{salary.salaryName}</HRTableRow>
              <HRTableRow>{salary.generateDate}</HRTableRow>
              <HRTableRow>{salary.generateBy}</HRTableRow>
              <HRTableRow>
                <Button
                  size="sm"
                  className="h-6 text-sm text-white bg-primary rounded-[4px]"
                >
                  {salary.status}
                </Button>
              </HRTableRow>
              <HRTableRow>{salary.approvedDate}</HRTableRow>
              <HRTableRow>{salary.approvedBy}</HRTableRow>

              <HRTableRow>
                <div className="flex items-center gap-2">
                  <a href={`salary_generate/salary-approval/${salary?.id}`}>
                    <HRIconsButton className="bg-blue-100 text-blue-500 border w-1 border-blue-500">
                      <FaCheck className="text-base" />
                    </HRIconsButton>
                  </a>

                  <a href={`salary_generate/salary-chart/${salary?.id}`}>
                    <HRIconsButton className="bg-blue-100 text-blue-500 border w-1 border-blue-500">
                      <FaChartBar className="text-base" />
                    </HRIconsButton>
                  </a>
                </div>
              </HRTableRow>
            </tr>
          ))}
        </HRTable>
      </div>
    </div>
  );
};

export default SalaryList;
