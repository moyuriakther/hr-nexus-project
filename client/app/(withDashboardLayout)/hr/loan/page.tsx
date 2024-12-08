/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import PageHeader from "@/app/(withDashboardLayout)/components/PageHeader/PageHeader";
import {
  useDeleteLoanMutation,
  useGetAllLoanQuery,
} from "@/app/Redux/api/loanApi";
import HRTable from "@/app/components/Table/HRTable";
import HRTableRow from "@/app/components/Table/HRTableRow";
import { TLoan } from "@/app/types";
import { getDayMonthAndYear } from "@/app/utils/getYearAndMonth";
import { Button } from "@nextui-org/react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { toast } from "sonner";
import { loanPageHeaderData } from "../employees/components/pageHeaderData";
import ComponentHeader from "./components/ComponentHeader";
import { tableHeader } from "./components/common";
import { useState } from "react";
import { useGetMyProfileQuery } from "@/app/Redux/api/userApi";
import Loader from "@/app/components/utils/Loader";

const LoanPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { data: loans, isLoading: isLoanLoading } = useGetAllLoanQuery({
    searchTerm,
  });
  const [deleteAttendance, { isLoading }] = useDeleteLoanMutation();
  const { data: myProfile } = useGetMyProfileQuery({});

  const handleDelete = async (id: string) => {
    const res = await deleteAttendance(id).unwrap();
    if (res?.id) {
      toast.success("Loan delete successful!");
    }
  };

  return (
    <div>
      <PageHeader item={loanPageHeaderData} />
      <div className="bg-white rounded-[3px] mt-4 px-6 py-4">
        <ComponentHeader onSearch={setSearchTerm} />

        <HRTable tableHeader={tableHeader}>
          {isLoanLoading ? (
            <Loader />
          ) : (
            loans?.data.map((loan: TLoan, i: number) => (
              <tr className={`hover:bg-gray-100`} key={i}>
                <HRTableRow>{i + 1}</HRTableRow>
                <HRTableRow>
                  {loan?.employee?.firstName} {loan?.employee?.lastName}
                </HRTableRow>
                <HRTableRow>{loan?.permittedBy}</HRTableRow>
                <HRTableRow>{loan.loanNo}</HRTableRow>
                <HRTableRow>{loan.amount}</HRTableRow>
                <HRTableRow>{loan.interestRate}</HRTableRow>
                <HRTableRow>{loan.installmentPeriod}</HRTableRow>
                <HRTableRow>{loan.installmentCleared}</HRTableRow>
                {/* <HRTableRow>{loan.repaymentAmount}</HRTableRow>
                <HRTableRow>{getDayMonthAndYear(loan.approvedDate)}</HRTableRow>
                <HRTableRow>{getDayMonthAndYear(loan.repaymentFrom)}</HRTableRow>
                <HRTableRow>
                  <Button
                    size="sm"
                    className={`${
                      loan?.status === "APPROVED"
                        ? "text-green-500 bg-green-200 h-6 text-sm rounded-[4px]"
                        : loan?.status === "REJECTED"
                        ? "text-[#dc3545] bg-red-100 h-6 text-sm rounded-[4px]"
                        : loan?.status === "PENDING"
                        ? "bg-blue-100 text-blue-500 h-6 text-sm rounded-[4px]"
                        : ""
                    }`}
                  >
                    {loan?.status}
                  </Button>
                </HRTableRow> */}

                <HRTableRow>
                  <div className="flex items-center gap-2">
                    {myProfile?.role === "ADMIN" && (
                      <a href={`/hr/loan/update/${loan?.id}`}>
                        <button className=" bg-blue-100 text-blue-500 border border-blue-500 rounded-[4px] p-1 w-8 h-8 font-[400] flex justify-center items-center">
                          <FaEdit className="text-base" />
                        </button>
                      </a>
                    )}

                    <button
                      disabled={isLoading}
                      onClick={() => handleDelete(loan?.id)}
                      className="bg-red-100 border border-red-500 text-red-500 rounded-[4px] p-1 w-8 h-8 font-[400] flex justify-center items-center"
                    >
                      <FaTrash className="text-base" />
                    </button>
                  </div>
                </HRTableRow>
              </tr>
            ))
          )}
        </HRTable>
      </div>
    </div>
  );
};

export default LoanPage;
