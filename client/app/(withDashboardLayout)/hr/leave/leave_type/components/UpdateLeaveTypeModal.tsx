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

const UpdateLeaveTypeModal = ({ modalIsOpen, setIsOpen }: TProps) => {
  //TODO: Update Leave Type
  const handleSubmit = (values: FieldValues) => {
    console.log(values);
  };

  return (
    <HRModal
      modalIsOpen={modalIsOpen}
      modalTitle="Update application create"
      setIsOpen={setIsOpen}
    >
      <HRForm onSubmit={handleSubmit}>
        <div className="mt-4 w-[790px]">
          <HRInput
            name="leaveType"
            type="text"
            placeholder="Leave type"
            label="Leave type"
            required
          />
        </div>

        <div className="mt-4">
          <HRInput
            name="leaveCode"
            required
            type="text"
            label="Leave code"
            placeholder="Leave code"
          />
        </div>

        <div className="mt-4 mb-5">
          <HRInput
            name="leaveDays"
            required
            type="text"
            label="Leave Days"
            placeholder="Leave Days"
          />
        </div>

        <Divider />
        <Button
          size="sm"
          type="submit"
          className="bg-primary text-white rounded-[3px] text-base mt-4 flex justify-end"
        >
          Create
        </Button>
      </HRForm>
    </HRModal>
  );
};

export default UpdateLeaveTypeModal;
