"use client";

import PageHeader from "@/app/(withDashboardLayout)/components/PageHeader/PageHeader";
// import HRIconsButton from "@/app/(withDashboardLayout)/components/UI/HRIconsButton";
import {
  useDeletePaymentMutation,
  useGetAllPaymentQuery,
} from "@/app/Redux/api/paymentApi";
import HRTable from "@/app/components/Table/HRTable";
import HRTableRow from "@/app/components/Table/HRTableRow";
import { Payment } from "@/app/types";
import { getMonthAndYear } from "@/app/utils/getYearAndMonth";
import { Button } from "@nextui-org/react";
import { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { pageHeaderData } from "../components/pageHeaderData";
import AddSalaryAdvancePage from "./components/AddSalaryAdvance";
import UpdateSalaryAdvanceModal from "./components/UpdateSalaryAdvanceModal";
import { toast } from "sonner";

const SalaryAdvancePage = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { data: payments, isLoading } = useGetAllPaymentQuery("");
  const [deletePayment, { isLoading: isDeleteLoading }] =
    useDeletePaymentMutation();

  const tableHeader = [
    "Sl",
    "Employee name",
    "Amount",
    "Release amount",
    "Salary month",
    "Status",
    "Action",
  ];

  const handleDelete = async (id: string) => {
    console.log(id);
    const res = await deletePayment(id).unwrap();

    if (res?.id) {
      toast.success("Employee delete successful!");
    }
  };

  return (
    <div className="min-h-[89vh]">
      <PageHeader item={pageHeaderData} />

      <div className="bg-white rounded-[3px] mt-4 px-6 py-4">
        <AddSalaryAdvancePage />
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
                          ? "text-green-500 bg-green-200 h-6 text-sm rounded-[4px]"
                          : payroll?.status === "REJECTED"
                          ? "text-[#dc3545] bg-red-100 h-6 text-sm rounded-[4px]"
                          : payroll?.status === "PENDING"
                          ? "bg-blue-100 text-blue-500 h-6 text-sm rounded-[4px]"
                          : ""
                      }`}
                    >
                      {payroll?.status}
                    </Button>
                  </HRTableRow>

                  <HRTableRow>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setIsOpen(true)}
                        className="bg-blue-100 text-blue-500 border border-blue-500 rounded-[4px] p-1 w-8 h-8 font-[400] flex justify-center items-center"
                      >
                        <FaEdit className="text-base" />
                      </button>
                      <button
                        disabled={isDeleteLoading}
                        onClick={() => handleDelete(payroll?.id)}
                        className="bg-red-100  text-red-500 border border-red-500 rounded-[4px] p-1 w-8 h-8 font-[400] flex justify-center items-center"
                      >
                        <FaTrash className="text-base" />
                      </button>
                    </div>
                  </HRTableRow>
                  <UpdateSalaryAdvanceModal
                    payment={payroll}
                    setIsOpen={setIsOpen}
                    modalIsOpen={isOpen}
                  />
                </tr>
              ))}
        </HRTable>
      </div>
    </div>
  );
};

export default SalaryAdvancePage;
