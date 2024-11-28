"use client";

import PageHeader from "@/app/(withDashboardLayout)/components/PageHeader/PageHeader";
import { useState } from "react";
import { pageHeaderData } from "../components/pageHeaderData";
import HRTable from "@/app/components/Table/HRTable";
import HRTableRow from "@/app/components/Table/HRTableRow";
import HRIconsButton from "@/app/(withDashboardLayout)/components/UI/HRIconsButton";
import { FaEdit, FaTrash } from "react-icons/fa";
import { fakeData } from "./components/fakeData";
import { Button } from "@nextui-org/react";
import AddSalaryAdvancePage from "./components/AddSalaryAdvance";
import UpdateSalaryAdvanceModal from "./components/UpdateSalaryAdvanceModal";
import { useGetAllPaymentQuery } from "@/app/Redux/api/paymentApi";

const SalaryAdvancePage = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { data: payments, isLoading } = useGetAllPaymentQuery("");

  console.log(payments?.data);

  const tableHeader = [
    "Sl",
    "Employee name",
    "Amount",
    "Release amount",
    "Salary month",
    "Status",
    "Action",
  ];

  return (
    <div className="min-h-[89vh]">
      <PageHeader item={pageHeaderData} />

      <div className="bg-white rounded-[3px] mt-4 px-6 py-4">
        <AddSalaryAdvancePage />
        <HRTable tableHeader={tableHeader}>
          {fakeData.map((payroll, i) => (
            <tr
              className={`${i % 2 === 0 ? "bg-gray-100" : ""} hover:bg-gray-50`}
              key={payroll.id}
            >
              <HRTableRow>{payroll.id}</HRTableRow>
              <HRTableRow>{payroll.employeeName}</HRTableRow>
              <HRTableRow>{payroll.amount}</HRTableRow>
              <HRTableRow>{payroll.releaseAmount}</HRTableRow>
              <HRTableRow>{payroll.salaryMonth}</HRTableRow>
              <HRTableRow>
                <Button
                  size="sm"
                  className={`${
                    payroll.status === "Active"
                      ? "text-[#28a745] bg-green-100 h-6 text-sm rounded-[4px]"
                      : "text-[#dc3545] bg-red-100 h-6 text-sm rounded-[4px]"
                  }`}
                >
                  {payroll.status}
                </Button>
              </HRTableRow>

              <HRTableRow>
                <div className="flex items-center gap-2">
                  <Button
                    onClick={() => setIsOpen(true)}
                    className="bg-blue-100 text-blue-500 border w-1 border-blue-500"
                  >
                    <FaEdit className="text-base" />
                  </Button>
                  <HRIconsButton className="bg-red-100 border border-red-500 text-red-500">
                    <FaTrash className="text-base" />
                  </HRIconsButton>
                </div>
              </HRTableRow>
            </tr>
          ))}
        </HRTable>
      </div>
      <UpdateSalaryAdvanceModal setIsOpen={setIsOpen} modalIsOpen={isOpen} />
    </div>
  );
};

export default SalaryAdvancePage;
