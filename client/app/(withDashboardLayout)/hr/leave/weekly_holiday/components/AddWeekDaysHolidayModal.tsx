"use client";

import HRForm from "@/app/components/Form/HRForm";
import HRMultipleSelect from "@/app/components/Form/HRMultipleSelect";

import HRModal from "@/app/components/Modal/HRModal";

import { Button, Divider } from "@nextui-org/react";
import React from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { inputOption } from "./inputOption";
import { useCreateWeekDaysMutation } from "@/app/Redux/api/weekDaysHolidayApi";

type TProps = {
  modalIsOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const AddWeekDaysHolidayModal = ({ modalIsOpen, setIsOpen }: TProps) => {
  const [createWeekHoliday, { isLoading }] = useCreateWeekDaysMutation();

  const handleSubmit = async (values: FieldValues) => {
    const resData = {
      dayName: values?.dayName,
    };

    const res = await createWeekHoliday(resData).unwrap();
    if (res?.id) {
      toast.success("Create weekday holiday successful!");
      setIsOpen(false);
    }
  };

  return (
    <HRModal
      modalIsOpen={modalIsOpen}
      modalTitle="Add week days holiday"
      setIsOpen={setIsOpen}
    >
      <HRForm onSubmit={handleSubmit}>
        <div className="mt-4 w-[790px]">
          <HRMultipleSelect
            name="dayName"
            options={inputOption}
            label="Weekly Leave Day"
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

export default AddWeekDaysHolidayModal;
