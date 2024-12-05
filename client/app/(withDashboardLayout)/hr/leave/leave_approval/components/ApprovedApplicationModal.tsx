"use client";

import { useUpdateLeaveMutation } from "@/app/Redux/api/leaveApi";
import HRForm from "@/app/components/Form/HRForm";
import HRInput from "@/app/components/Form/HRInput";
import HRModal from "@/app/components/Modal/HRModal";
import { TLeave } from "@/app/types";
import { getDayMonthAndYear } from "@/app/utils/getYearAndMonth";
import { Button, Divider } from "@nextui-org/react";
import React from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

type TProps = {
  modalIsOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  leave: TLeave;
};

const ApprovedApplicationModal = ({
  modalIsOpen,
  setIsOpen,
  leave,
}: TProps) => {
  const [updateLeaveType, { isLoading }] = useUpdateLeaveMutation();

  const defaultValues = {
    days: Number(leave?.days),
    startDate: getDayMonthAndYear(leave?.startDate),
    endDate: getDayMonthAndYear(leave?.endDate),
  };

  const handleSubmit = async (values: FieldValues) => {
    const resData = {
      body: {
        startDate: new Date(values?.startDate).toISOString(),
        endDate: new Date(values?.endDate).toISOString(),
        managerComment: values?.managerComment,
        status: "APPROVED",
      },
      id: leave?.id,
    };

    const res = await updateLeaveType(resData).unwrap();
    if (res?.id) {
      toast.success("Leave approved successful!");
      setIsOpen(false);
    }
  };

  return (
    <HRModal
      modalIsOpen={modalIsOpen}
      modalTitle="Application approved by manager"
      setIsOpen={setIsOpen}
    >
      <HRForm onSubmit={handleSubmit} defaultValues={defaultValues}>
        <div className="mt-4 w-[790px]">
          <HRInput name="startDate" type="date" label="From Date" required />
        </div>

        <div className="mt-4">
          <HRInput name="endDate" type="date" label="End Date" required />
        </div>

        <div className="mt-4">
          <HRInput
            name="days"
            type="text"
            disabled
            label="Total days"
            placeholder="Total days"
          />
        </div>

        <div className="mt-4 mb-5">
          <HRInput
            name="managerComment"
            type="text"
            label="Description"
            placeholder="Description"
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
            {isLoading ? "Approving..." : "Approved Leave"}
          </Button>
        </div>
      </HRForm>
    </HRModal>
  );
};

export default ApprovedApplicationModal;
