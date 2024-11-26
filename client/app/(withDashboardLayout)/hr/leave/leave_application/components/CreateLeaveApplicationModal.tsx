"use client";

import HRForm from "@/app/components/Form/HRForm";
import HRInput from "@/app/components/Form/HRInput";
import HRModal from "@/app/components/Modal/HRModal";
import { Button, Divider } from "@nextui-org/react";
import React from "react";
import { FieldValues } from "react-hook-form";

type TProps = {
  modalIsOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const CreateLeaveApplicationModal = ({ modalIsOpen, setIsOpen }: TProps) => {
  //TODO: Approved application
  const handleSubmit = (values: FieldValues) => {
    console.log(values);
  };

  return (
    <HRModal
      modalIsOpen={modalIsOpen}
      modalTitle="Leave application create"
      setIsOpen={setIsOpen}
    >
      <HRForm onSubmit={handleSubmit}>
        <div className="mt-2 w-[790px]">
          <HRInput
            name="employee"
            type="text"
            label="Employee"
            placeholder="Employee"
            required
          />
        </div>
        <div className="mt-2">
          <HRInput
            name="leaveType"
            type="text"
            label="Leave Type"
            placeholder="Leave Type"
            required
          />
        </div>

        <div className="mt-2">
          <HRInput name="fromDate" type="date" label="From Date" required />
        </div>

        <div className="mt-2">
          <HRInput name="endDate" type="date" label="End Date" required />
        </div>

        <div className="mt-2">
          <HRInput
            name="totalDays"
            type="text"
            label="Total days"
            placeholder="Total days"
          />
        </div>

        <div className="mt-2">
          <HRInput
            name="hardCopy"
            type="file"
            label="Application hard copy"
            placeholder="Application hard copy"
          />
        </div>

        <div className="mt-2 mb-2">
          <HRInput
            name="reason"
            type="text"
            label="Reason"
            placeholder="Reason"
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

export default CreateLeaveApplicationModal;
