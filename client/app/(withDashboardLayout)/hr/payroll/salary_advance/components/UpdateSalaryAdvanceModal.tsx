"use client";

import {
  useGetSinglePaymentQuery,
  useUpdatePaymentMutation,
} from "@/app/Redux/api/paymentApi";
import HRForm from "@/app/components/Form/HRForm";
import HRInput from "@/app/components/Form/HRInput";
import HRRadioInput from "@/app/components/Form/HRRadioInput";
import HRModal from "@/app/components/Modal/HRModal";
import { Payment } from "@/app/types";
import { getMonthAndYear } from "@/app/utils/getYearAndMonth";
import { Button, Divider } from "@nextui-org/react";
import React from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

type TProps = {
  modalIsOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  payment: Payment;
};

const UpdateSalaryAdvanceModal = ({
  modalIsOpen,
  setIsOpen,
  payment,
}: TProps) => {
  const [updatePayment, { isLoading }] = useUpdatePaymentMutation();

  const defaultValues = {
    employeeName: `${payment?.employee?.firstName ?? ""} ${
      payment?.employee?.lastName ?? ""
    }`.trim(),
    totalSalary: payment?.totalSalary,
    status: payment?.status,
  };

  const handleSubmit = async (values: FieldValues) => {
    const resData = {
      body: {
        totalSalary: Number(values?.totalSalary),
        status: values?.status,
      },
      id: payment?.id,
    };

    const res = await updatePayment(resData).unwrap();
    console.log(res?.id);
    if (res?.id) {
      toast.success("Update Employee successful!");
      setIsOpen(false);
    }
  };

  return (
    <HRModal
      modalIsOpen={modalIsOpen}
      modalTitle="Edit salary advance"
      setIsOpen={setIsOpen}
    >
      <HRForm onSubmit={handleSubmit} defaultValues={defaultValues}>
        <div className="mt-4 w-[790px]">
          <HRInput
            name="employeeName"
            type="text"
            placeholder="Employee"
            label="Employee"
            disabled
          />
        </div>

        <div className="mt-4">
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
            name="salaryMonth"
            disabled
            defaultValue={getMonthAndYear(payment?.salaryMonth)}
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
            {isLoading ? "Updating..." : "Update"}
          </Button>
        </div>
      </HRForm>
    </HRModal>
  );
};

export default UpdateSalaryAdvanceModal;
