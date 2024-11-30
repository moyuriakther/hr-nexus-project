"use client";

import { useUpdateLeaveMutation } from "@/app/Redux/api/leaveApi";
import HRForm from "@/app/components/Form/HRForm";
import HRInput from "@/app/components/Form/HRInput";
import HRModal from "@/app/components/Modal/HRModal";
import { TLeave } from "@/app/types";
import { Button, Divider } from "@nextui-org/react";
import React from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

type TProps = {
  modalIsOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  leaveType: TLeave;
};

const UpdateLeaveTypeModal = ({
  modalIsOpen,
  setIsOpen,
  leaveType,
}: TProps) => {
  const [updateLeaveType, { isLoading }] = useUpdateLeaveMutation();

  const defaultValues = {
    days: Number(leaveType?.days),
    leaveType: leaveType?.leaveType,
    leaveCode: leaveType?.leaveCode,
  };

  const handleSubmit = async (values: FieldValues) => {
    const resData = {
      body: {
        days: Number(values?.days),
        leaveType: values?.leaveType,
        leaveCode: values?.leaveCode,
      },
      id: leaveType?.id,
    };

    console.log(resData);

    const res = await updateLeaveType(resData).unwrap();
    if (res?.id) {
      toast.success("Update leave type successful!");
      setIsOpen(false);
    }
  };

  return (
    <HRModal
      modalIsOpen={modalIsOpen}
      modalTitle="Update leave type"
      setIsOpen={setIsOpen}
    >
      <HRForm onSubmit={handleSubmit} defaultValues={defaultValues}>
        <div className="mt-4 w-[790px]">
          <HRInput
            name="leaveType"
            type="text"
            placeholder="Leave type"
            label="Leave type"
          />
        </div>

        <div className="mt-4">
          <HRInput
            name="leaveCode"
            type="text"
            label="Leave code"
            placeholder="Leave code"
          />
        </div>

        <div className="mt-4 mb-5">
          <HRInput
            name="days"
            type="text"
            label="Leave Days"
            placeholder="Leave Days"
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

export default UpdateLeaveTypeModal;
