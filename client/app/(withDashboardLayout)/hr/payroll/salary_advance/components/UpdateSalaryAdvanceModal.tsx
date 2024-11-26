"use client";

import HRForm from "@/app/components/Form/HRForm";
import HRInput from "@/app/components/Form/HRInput";
import HRRadioInput from "@/app/components/Form/HRRadioInput";
import HRModal from "@/app/components/Modal/HRModal";
import { Button, Divider } from "@nextui-org/react";
import React from "react";
import { FieldValues } from "react-hook-form";

type TProps = {
  modalIsOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const UpdateSalaryAdvanceModal = ({ modalIsOpen, setIsOpen }: TProps) => {
  //TODO: Add Leave Type
  const handleSubmit = (values: FieldValues) => {
    console.log(values);
  };

  return (
    <HRModal
      modalIsOpen={modalIsOpen}
      modalTitle="Edit salary advance"
      setIsOpen={setIsOpen}
    >
      <HRForm onSubmit={handleSubmit}>
        <div className="mt-4 w-[790px]">
          <HRInput
            name="employee"
            type="text"
            placeholder="Employee"
            label="Employee"
            required
          />
        </div>

        <div className="mt-4">
          <HRInput
            name="amount"
            required
            type="text"
            label="Amount"
            placeholder="Amount"
          />
        </div>

        <div className="mt-4">
          <HRInput
            name="salaryMonth"
            required
            type="date"
            label="Salary month"
            placeholder="Salary month"
          />
        </div>

        <div className="mt-4 mb-5">
          <HRRadioInput
            name="isActive"
            required
            label="Is active"
            options={[
              { value: "Active", label: "Active" },
              { value: "Inactive", label: "Inactive" },
            ]}
          />
        </div>

        <Divider />
        <Button
          size="sm"
          type="submit"
          className="bg-primary text-white rounded-[3px] text-base mt-4 flex justify-end"
        >
          Update
        </Button>
      </HRForm>
    </HRModal>
  );
};

export default UpdateSalaryAdvanceModal;
