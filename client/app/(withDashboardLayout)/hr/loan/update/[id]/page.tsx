"use client";

import PageHeader from "@/app/(withDashboardLayout)/components/PageHeader/PageHeader";
import {
  useGetSingleLoanQuery,
  useUpdateLoanMutation,
} from "@/app/Redux/api/loanApi";
// import {
//   // useGetSinglePaymentQuery,
//   // useUpdatePaymentMutation,
// } from "@/app/Redux/api/paymentApi";
import HRForm from "@/app/components/Form/HRForm";
import HRInput from "@/app/components/Form/HRInput";
import HRRadioInput from "@/app/components/Form/HRRadioInput";
// import HRModal from "@/app/components/Modal/HRModal";
// import { Payment, TLoan } from "@/app/types";
import {
  getDayMonthAndYear,
  // getMonthAndYear,
} from "@/app/utils/getYearAndMonth";
import { Button, Divider } from "@nextui-org/react";
import { useParams, useRouter } from "next/navigation";
import React from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { loanPageHeaderData } from "../../../employees/components/pageHeaderData";

const UpdateLoanPage = () => {
  const { id } = useParams();
  const router = useRouter();

  const { data: loan, isLoading: isLoanLoading } = useGetSingleLoanQuery(id);
  const [updateLoan, { isLoading }] = useUpdateLoanMutation();

  const defaultValues = {
    employee: `${loan?.employee?.firstName ?? ""} ${
      loan?.employee?.lastName ?? ""
    }`.trim(),
    permittedBy: loan?.permittedBy,
    loanNo: loan?.loanNo,
    amount: loan?.amount,
    interestRate: loan?.interestRate,
    installmentPeriod: loan?.installmentPeriod,
    installmentCleared: loan?.installmentCleared,
    repaymentAmount: loan?.repaymentAmount,
    approvedDate: getDayMonthAndYear(loan?.approvedDate),
    repaymentFrom: getDayMonthAndYear(loan?.repaymentFrom),
    status: loan?.status,
  };

  const handleSubmit = async (values: FieldValues) => {
    const resData = {
      body: {
        amount: Number(values?.amount),
        interestRate: Number(values?.interestRate),
        installmentPeriod: Number(values?.installmentPeriod),
        installmentCleared: Number(values?.installmentCleared),
        repaymentAmount: Number(values?.repaymentAmount),
        approvedDate: new Date(values?.approvedDate).toISOString(),
        repaymentFrom: new Date(values?.repaymentFrom).toISOString(),
        status: values?.status,
      },
      id: loan?.id,
    };

    console.log(resData);

    const res = await updateLoan(resData).unwrap();

    if (res?.id) {
      toast.success("Update loan successful!");
      router.push("/hr/loan");
    }
  };

  return (
    <div>
      <PageHeader item={loanPageHeaderData} />
      <div className="bg-white rounded-[3px] mt-4 px-6 py-4">
        {isLoanLoading ? (
          "Loading........."
        ) : (
          <HRForm onSubmit={handleSubmit} defaultValues={defaultValues}>
            <div className="mt-4">
              <HRInput
                name="employee"
                type="text"
                placeholder="Employee"
                label="Employee"
                disabled
              />
            </div>
            <div className="mt-4">
              <HRInput
                name="permittedBy"
                disabled
                type="text"
                label="Permitted by"
                placeholder="Permitted by"
              />
            </div>
            <div className="mt-4">
              <HRInput
                name="loanNo"
                disabled
                type="text"
                label="Loan no"
                placeholder="Loan no"
              />
            </div>
            <div className="mt-4">
              <HRInput
                name="amount"
                type="text"
                label="Amount"
                placeholder="Amount"
              />
            </div>
            <div className="mt-4">
              <HRInput
                name="interestRate"
                type="text"
                label="Interest rate"
                placeholder="Interest rate"
              />
            </div>
            <div className="mt-4">
              <HRInput
                name="installmentPeriod"
                type="text"
                label="Installment period"
                placeholder="Installment period"
              />
            </div>
            <div className="mt-4">
              <HRInput
                name="installmentCleared"
                type="text"
                label="Installment cleared"
                placeholder="Installment cleared"
              />
            </div>
            <div className="mt-4">
              <HRInput
                name="repaymentAmount"
                type="text"
                label="Repayment amount"
                placeholder="Repayment amount"
              />
            </div>
            <div className="mt-4">
              <HRInput
                name="approvedDate"
                disabled
                type="date"
                label="Approved date"
                placeholder="Approved date"
              />
            </div>
            <div className="mt-4">
              <HRInput
                name="repaymentFrom"
                disabled
                type="date"
                label="Repayment From"
                placeholder="Repayment From"
              />
            </div>
            <div className="mt-4 mb-5">
              <HRRadioInput
                name="status"
                required
                label="Status"
                options={[
                  { value: "APPROVED", label: "Approved" },
                  { value: "PENDING", label: "Pending" },
                  { value: "REJECTED", label: "Rejected" },
                ]}
              />
            </div>
            <Divider />
            <div className="flex gap-4 justify-end">
              <Button
                isDisabled={isLoading}
                size="sm"
                type="submit"
                className="bg-primary text-white rounded-[3px] text-base mt-4 flex justify-end"
              >
                {isLoading ? "Updating..." : "Update"}
              </Button>
            </div>
          </HRForm>
        )}
      </div>{" "}
    </div>
  );
};

export default UpdateLoanPage;
