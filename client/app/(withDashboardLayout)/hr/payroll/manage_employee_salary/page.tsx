"use client";

import PageHeader from "@/app/(withDashboardLayout)/components/PageHeader/PageHeader";
import HRTable from "@/app/components/Table/HRTable";
import HRTableRow from "@/app/components/Table/HRTableRow";
import Link from "next/link";
// import { Button } from "@nextui-org/react";
import { FaDownload, FaEye } from "react-icons/fa";
import { pageHeaderData } from "../components/pageHeaderData";
import ManageSalaryTableHeader from "./components/ManageSalaryTableHeader";
import { fakeData } from "./components/fakeData";

const ManageEmployeeSalaryPage = () => {
  const tableHeader = [
    "Sl",
    "Employee name",
    "Salary month",
    "Total salary",
    "Action",
  ];

  return (
    <div className="min-h-[89vh]">
      <PageHeader item={pageHeaderData} />

      <div className="bg-white rounded-[3px] mt-4 px-6 py-4">
        <ManageSalaryTableHeader />
        <HRTable tableHeader={tableHeader}>
          {fakeData.map((salary, i) => (
            <tr
              className={`${i % 2 === 0 ? "bg-gray-100" : ""} hover:bg-gray-50`}
              key={salary.id}
            >
              <HRTableRow>{salary.id}</HRTableRow>
              <HRTableRow>{salary.employeeName}</HRTableRow>
              <HRTableRow>{salary.salaryMonth}</HRTableRow>
              <HRTableRow>{salary.totalSalary}</HRTableRow>

              <HRTableRow>
                <div className="flex items-center gap-2">
                  <Link href={`manage_employee_salary/payslip/${salary?.id}`}>
                    <button
                      // onClick={() => setIsOpen(true)}
                      className="bg-yellow-500 text-black border flex items-center gap-1 py-1 px-2 text-center rounded-[3px] border-yellow-500"
                    >
                      <FaEye className="text-base" /> Payslip
                    </button>
                  </Link>
                  <button className="bg-primary text-white border border-primary  flex items-center gap-1 py-1 px-2 text-center rounded-[3px]">
                    <FaDownload className="text-base" /> Download pay slip
                  </button>
                </div>
              </HRTableRow>
            </tr>
          ))}
        </HRTable>
      </div>
    </div>
  );
};

export default ManageEmployeeSalaryPage;
