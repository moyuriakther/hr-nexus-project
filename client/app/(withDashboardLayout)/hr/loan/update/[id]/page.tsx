"use client";

import PageHeader from "@/app/(withDashboardLayout)/components/PageHeader/PageHeader";
import {
  useGetSingleLoanQuery,
  useUpdateLoanMutation,
} from "@/app/Redux/api/loanApi";
import HRForm from "@/app/components/Form/HRForm";
import HRInput from "@/app/components/Form/HRInput";
import { getDayMonthAndYear } from "@/app/utils/getYearAndMonth";
import { Button, Divider } from "@nextui-org/react";
import { useParams, useRouter } from "next/navigation";
import React from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { loanPageHeaderData } from "../../../employees/components/pageHeaderData";
import Loader from "@/app/components/utils/Loader";

const UpdateLoanPage = () => {
  const { id } = useParams();
  const router = useRouter();

  const { data: loan, isLoading: isLoanLoading } = useGetSingleLoanQuery(id);
  const [updateLoan, { isLoading: isUpdating }] = useUpdateLoanMutation();

  const defaultValues = {
    permittedBy: loan?.permittedBy ?? "",
    amount: loan?.amount ?? "",
    installmentPeriod: loan?.installmentPeriod ?? "",
    installmentCleared: loan?.installmentCleared ?? "",
    repaymentAmount: loan?.repaymentAmount ?? "",
  };

  const handleSubmit = async (values: FieldValues) => {
    try {
      const resData = {
        body: {
          permittedBy: values?.permittedBy,
          amount: Number(values?.amount),
          installmentPeriod: Number(values?.installmentPeriod),
          installmentCleared: Number(values?.installmentCleared),
          repaymentAmount: Number(values?.repaymentAmount),
        },
        id: loan?.id,
      };

      const res = await updateLoan(resData).unwrap();

      if (res?.id) {
        toast.success("Loan updated successfully!");
        router.push("/hr/loan");
      }
    } catch (error) {
      toast.error("Failed to update the loan. Please try again.");
    }
  };

  return (
    <div>
      <PageHeader item={loanPageHeaderData} />
      <div className="bg-white rounded-[3px] mt-4 px-6 py-4">
        {isLoanLoading ? (
          <Loader />
        ) : (
          <HRForm onSubmit={handleSubmit} defaultValues={defaultValues}>
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
                name="amount"
                type="text"
                label="Amount"
                placeholder="Amount"
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

            <div className="mt-4 mb-5">
              <HRInput
                name="repaymentAmount"
                type="text"
                label="Repayment amount"
                placeholder="Repayment amount"
              />
            </div>

            <Divider />
            <div className="flex gap-4 justify-end">
              <Button
                isDisabled={isUpdating}
                size="sm"
                type="submit"
                className="bg-primary text-white rounded-[3px] text-base mt-4"
              >
                {isUpdating ? "Updating..." : "Update"}
              </Button>
            </div>
          </HRForm>
        )}
      </div>
    </div>
  );
};

export default UpdateLoanPage;
