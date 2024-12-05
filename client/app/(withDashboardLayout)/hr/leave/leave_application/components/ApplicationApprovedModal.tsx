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

const ApplicationApprovedModal = ({ modalIsOpen, setIsOpen }: TProps) => {
  //TODO: Approved application
  const handleSubmit = (values: FieldValues) => {
    console.log(values);
  };

  return (
    <HRModal
      modalIsOpen={modalIsOpen}
      modalTitle="Application approved"
      setIsOpen={setIsOpen}
    >
      <HRForm onSubmit={handleSubmit}>
        <div className="mt-4 w-[790px]">
          <HRInput name="fromDate" type="date" label="From Date" required />
        </div>

        <div className="mt-4">
          <HRInput name="endDate" type="date" label="End Date" required />
        </div>

        <div className="mt-4 mb-5">
          <HRInput
            name="totalDays"
            type="text"
            label="Total days"
            placeholder="Total days"
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
            // isDisabled={isLoading}
            size="sm"
            type="submit"
            className="bg-primary text-white rounded-[3px] text-base mt-4 flex justify-end"
          >
            {/* {isLoading ? "Approving..." : "Approved Application"} */}
          </Button>
        </div>
      </HRForm>
    </HRModal>
  );
};

export default ApplicationApprovedModal;
