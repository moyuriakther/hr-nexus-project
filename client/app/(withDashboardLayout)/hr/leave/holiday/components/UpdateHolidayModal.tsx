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

const UpdateHolidayModal = ({ modalIsOpen, setIsOpen }: TProps) => {
  //TODO: Update Holiday
  const handleSubmit = (values: FieldValues) => {
    console.log(values);
  };

  return (
    <HRModal
      modalIsOpen={modalIsOpen}
      modalTitle="Edit holiday"
      setIsOpen={setIsOpen}
    >
      <HRForm onSubmit={handleSubmit}>
        <div className="mt-4 w-[790px]">
          <HRInput
            name="holidayName"
            type="text"
            placeholder="Holiday name"
            label="Holiday name"
            required
          />
        </div>

        <div className="mt-4">
          <HRInput name="fromDate" required type="date" label="From date" />
        </div>

        <div className="mt-4">
          <HRInput name="holidayName" required type="date" label="End date" />
        </div>

        <div className="mt-4 mb-5">
          <HRInput
            name="days"
            type="text"
            required
            placeholder="Total days"
            label="Total days"
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

export default UpdateHolidayModal;
