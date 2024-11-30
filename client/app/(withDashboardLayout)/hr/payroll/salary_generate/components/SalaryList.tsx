"use client";

import HRIconsButton from "@/app/(withDashboardLayout)/components/UI/HRIconsButton";
import HRTable from "@/app/components/Table/HRTable";
import HRTableRow from "@/app/components/Table/HRTableRow";
import { Button, Divider } from "@nextui-org/react";
import { FaEdit, FaTrash, FaCheck } from "react-icons/fa";
import { FaChartBar } from "react-icons/fa6";
import { fakeData } from "./fakeData";
import { useGetAllPaymentQuery } from "@/app/Redux/api/paymentApi";
import { Payment } from "@/app/types";
import { getMonthAndYear } from "@/app/utils/getYearAndMonth";

const SalaryList = () => {
  const { data: payments, isLoading } = useGetAllPaymentQuery("");
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
    <div className="bg-white rounded-[3px] py-4">
      <h2 className="text-2xl pb-3 px-6 text-black font-semibold mt-3 mb-4">
        Salary list
      </h2>
      <Divider className="mb-6" />
      <div className="px-6">
        <HRTable tableHeader={tableHeader}>
          {isLoading
            ? "loading..."
            : payments?.data.map((payroll: Payment, i: number) => (
                <tr
                  className={`${
                    i % 2 === 0 ? "bg-gray-100" : ""
                  } hover:bg-gray-50`}
                  key={payroll.id}
                >
                  <HRTableRow>{i + 1}</HRTableRow>
                  <HRTableRow>
                    {payroll?.employee?.firstName} {payroll?.employee?.lastName}
                  </HRTableRow>
                  <HRTableRow>{payroll?.totalSalary}</HRTableRow>
                  <HRTableRow>{payroll?.releaseAmount}</HRTableRow>
                  <HRTableRow>
                    {getMonthAndYear(payroll?.salaryMonth)}
                  </HRTableRow>
                  <HRTableRow>
                    <Button
                      size="sm"
                      className={`${
                        payroll?.status === "PAID"
                          ? "text-[#28a745] bg-green-100 h-6 text-sm rounded-[4px]"
                          : "text-[#dc3545] bg-red-100 h-6 text-sm rounded-[4px]"
                      }`}
                    >
                      {payroll?.status}
                    </Button>
                  </HRTableRow>

                  <HRTableRow>
                    <div className="flex items-center gap-2">
                      <a
                        href={`salary_generate/salary-approval/${payroll?.id}`}
                      >
                        <HRIconsButton className="bg-blue-100 text-blue-500 border w-1 border-blue-500">
                          <FaCheck className="text-base" />
                        </HRIconsButton>
                      </a>

                      <a href={`salary_generate/salary-chart/${payroll?.id}`}>
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