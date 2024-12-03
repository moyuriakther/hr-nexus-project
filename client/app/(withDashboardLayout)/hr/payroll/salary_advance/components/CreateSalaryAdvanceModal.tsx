"use client";

import { useGetAllEmployeeQuery } from "@/app/Redux/api/employeeApi";
import { useCreatePaymentMutation } from "@/app/Redux/api/paymentApi";
import HRForm from "@/app/components/Form/HRForm";
import HRInput from "@/app/components/Form/HRInput";
// import HRMultipleSelect from "@/app/components/Form/HRMultipleSelect";
import HRRadioInput from "@/app/components/Form/HRRadioInput";
import HRSelectDropdown from "@/app/components/Form/HRSelectDropdown";
import HRModal from "@/app/components/Modal/HRModal";
import { Employee } from "@/app/types";
import { Button, Divider } from "@nextui-org/react";
import React from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

type TProps = {
  modalIsOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const CreateSalaryAdvanceModal = ({ modalIsOpen, setIsOpen }: TProps) => {
  const { data: employees, isLoading: employeeLoading } =
    useGetAllEmployeeQuery("");

  const [createPayment, { isLoading }] = useCreatePaymentMutation();

  const employeeOptions = employees?.map((employee: Employee) => ({
    label: `${employee.firstName} ${employee.middleName} ${employee.lastName}`,
    value: employee.id,
  }));

  const handleSubmit = async (values: FieldValues) => {
    const resData = {
      employeeId: values?.employeeId,
      totalSalary: Number(values?.totalSalary),
      releaseAmount: Number(values?.releaseAmount),
      salaryMonth: values?.salaryMonth,
      status: values?.status,
    };

    const res = await createPayment(resData).unwrap();

    if (res?.id) {
      toast.success("Create Employee successful!");
      setIsOpen(false);
    }
  };

  return (
    <HRModal
      modalIsOpen={modalIsOpen}
      modalTitle="Add salary advance"
      setIsOpen={setIsOpen}
    >
      {employeeLoading ? (
        "Loading...."
      ) : (
        <HRForm onSubmit={handleSubmit}>
          <div className="mt-4 w-[790px]">
            <HRSelectDropdown
              options={employeeOptions}
              name="employeeId"
              placeholder="Select Employee"
              label="Employee"
            />
          </div>

          <div className="mt-4 w-[790px]">
            <HRInput
              name="totalSalary"
              required
              type="text"
              label="Total Salary"
              placeholder="Total Salary"
            />
          </div>

          <div className="mt-4">
            <HRInput
              name="releaseAmount"
              required
              type="text"
              label="Release Amount"
              placeholder="Release Amount"
            />
          </div>

          <div className="mt-4">
            <HRInput
              name="salaryMonth"
              required
              type="month"
              label="Salary month"
              placeholder="Salary month"
            />
          </div>

          <div className="mt-4 mb-5">
            <HRRadioInput
              name="status"
              required
              label="Status"
              options={[
                { value: "PAID", label: "paid" },
                { value: "PENDING", label: "Pending" },
                { value: "REJECTED", label: "Rejected" },
              ]}
            />
          </div>

          <Divider />
          <div className="flex gap-4 justify-end">
            <Button
              onClick={() => setIsOpen(false)}
              size="sm"
              className="bg-red-500 text-white rounded-[3px] text-base mt-4 flex justify-end"
            >
              Close
            </Button>
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
      )}
    </HRModal>
  );
};

export default CreateSalaryAdvanceModal;
