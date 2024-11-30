"use client";

import { useCreateHolidayMutation } from "@/app/Redux/api/holidayApi";
import HRForm from "@/app/components/Form/HRForm";
import HRInput from "@/app/components/Form/HRInput";
import HRModal from "@/app/components/Modal/HRModal";
import { Button, Divider } from "@nextui-org/react";
import React from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

type TProps = {
  modalIsOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const CreateHolidayModal = ({ modalIsOpen, setIsOpen }: TProps) => {
  const [createHoliday, { isLoading }] = useCreateHolidayMutation();

  const handleSubmit = async (values: FieldValues) => {
    const resData = {
      holidayName: values?.holidayName,
      fromDate: new Date(values?.fromDate).toISOString(),
      toDate: new Date(values?.toDate).toISOString(),
      totalDays: Number(values?.totalDays),
    };

    const res = await createHoliday(resData).unwrap();
    if (res?.id) {
      toast.success("Create holiday successful!");
      setIsOpen(false);
    }
  };

  return (
    <HRModal
      modalIsOpen={modalIsOpen}
      modalTitle="New holiday"
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
          <HRInput name="toDate" required type="date" label="End date" />
        </div>

        <div className="mt-4 mb-5">
          <HRInput
            name="totalDays"
            type="text"
            required
            placeholder="Total days"
            label="Total days"
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
    </HRModal>
  );
};

export default CreateHolidayModal;
