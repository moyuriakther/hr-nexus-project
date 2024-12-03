"use client";

import PageHeader from "@/app/(withDashboardLayout)/components/PageHeader/PageHeader";
import { useGetAllEmployeeQuery } from "@/app/Redux/api/employeeApi";
import { useCreateLoanMutation } from "@/app/Redux/api/loanApi";
import HRForm from "@/app/components/Form/HRForm";
import HRInput from "@/app/components/Form/HRInput";
import HRRadioInput from "@/app/components/Form/HRRadioInput";
import HRSelectDropdown from "@/app/components/Form/HRSelectDropdown";
import { Employee } from "@/app/types";
import { Button, Divider } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { loanPageHeaderData } from "../../employees/components/pageHeaderData";

const CreateLoanPage = () => {
  const router = useRouter();

  const { data: employees } = useGetAllEmployeeQuery("");
  const [createLoan, { isLoading }] = useCreateLoanMutation();

  const employeeOptions = employees?.map((employee: Employee) => ({
    label: `${employee.firstName} ${employee.lastName}`,
    value: employee.id,
  }));

  const handleSubmit = async (values: FieldValues) => {
    const resData = {
      employeeId: values?.employee,
      permittedBy: values?.permittedBy,
      loanNo: values?.loanNo,
      amount: Number(values?.amount),
      interestRate: Number(values?.interestRate),
      installmentPeriod: Number(values?.installmentPeriod),
      installmentCleared: Number(values?.installmentCleared),
      repaymentAmount: Number(values?.repaymentAmount),
      approvedDate: new Date(values?.approvedDate).toISOString(),
      repaymentFrom: new Date(values?.repaymentFrom).toISOString(),
      status: values?.status,
    };

    const res = await createLoan(resData).unwrap();

    if (res?.id) {
      toast.success("Update loan successful!");
      router.push("/hr/loan");
    }
  };

  return (
    <div>
      <PageHeader item={loanPageHeaderData} />
      <div className="bg-white rounded-[3px] mt-4 px-6 py-4">
        <HRForm onSubmit={handleSubmit}>
          <div className="mt-4">
            <HRSelectDropdown
              name="employee"
              options={employeeOptions}
              placeholder="Employee"
              label="Employee"
            />
          </div>
          <div className="mt-4">
            <HRInput
              name="permittedBy"
              type="text"
              label="Permitted by"
              placeholder="Permitted by"
            />
          </div>
          <div className="mt-4">
            <HRInput
              name="loanNo"
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
              type="date"
              label="Approved date"
              placeholder="Approved date"
            />
          </div>
          <div className="mt-4">
            <HRInput
              name="repaymentFrom"
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
              {isLoading ? "Creating..." : "Create"}
            </Button>
          </div>
        </HRForm>
      </div>
    </div>
  );
};

export default CreateLoanPage;
