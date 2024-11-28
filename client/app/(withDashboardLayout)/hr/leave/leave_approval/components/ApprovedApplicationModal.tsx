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

const ApprovedApplicationModal = ({ modalIsOpen, setIsOpen }: TProps) => {
  //TODO: Approved application
  const handleSubmit = (values: FieldValues) => {
    console.log(values);
  };

  return (
    <HRModal
      modalIsOpen={modalIsOpen}
      modalTitle="Application approved by manager"
      setIsOpen={setIsOpen}
    >
      <HRForm onSubmit={handleSubmit}>
        <div className="mt-4 w-[790px]">
          <HRInput name="fromDate" type="date" label="From Date" required />
        </div>

        <div className="mt-4">
          <HRInput name="endDate" type="date" label="End Date" required />
        </div>

        <div className="mt-4">
          <HRInput
            name="totalDays"
            type="text"
            label="Total days"
            placeholder="Total days"
          />
        </div>

        <div className="mt-4 mb-5">
          <HRInput
            name="description"
            type="text"
            label="Description"
            placeholder="Description"
          />
        </div>

        <Divider />
        <Button
          size="sm"
          type="submit"
          className="bg-primary text-white rounded-[3px] text-base mt-4 flex justify-end"
        >
          Approved Leave
        </Button>
      </HRForm>
    </HRModal>
  );
};

export default ApprovedApplicationModal;
