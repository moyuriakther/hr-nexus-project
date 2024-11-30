"use client";

import { useUpdateHolidayMutation } from "@/app/Redux/api/holidayApi";
import HRForm from "@/app/components/Form/HRForm";
import HRInput from "@/app/components/Form/HRInput";
import HRModal from "@/app/components/Modal/HRModal";
import { THoliday } from "@/app/types";
import { getDayMonthAndYear } from "@/app/utils/getYearAndMonth";
import { Button, Divider } from "@nextui-org/react";
import React from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

type TProps = {
  modalIsOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  holiday: THoliday;
};

const UpdateHolidayModal = ({ modalIsOpen, setIsOpen, holiday }: TProps) => {
  const [updateHoliday, { isLoading }] = useUpdateHolidayMutation();

  const defaultValues = {
    holidayName: holiday?.holidayName,
    fromDate: getDayMonthAndYear(holiday?.fromDate),
    toDate: getDayMonthAndYear(holiday?.toDate),
    totalDays: Number(holiday?.totalDays),
  };

  const handleSubmit = async (values: FieldValues) => {
    const resData = {
      body: {
        holidayName: values?.holidayName,
        fromDate: new Date(values?.fromDate).toISOString(),
        toDate: new Date(values?.toDate).toISOString(),
        totalDays: Number(values?.totalDays),
      },
      id: holiday?.id,
    };

    const res = await updateHoliday(resData).unwrap();
    console.log(res?.id);
    if (res?.id) {
      toast.success("Update holiday successful!");
      setIsOpen(false);
    }
  };

  return (
    <HRModal
      modalIsOpen={modalIsOpen}
      modalTitle="Edit holiday"
      setIsOpen={setIsOpen}
    >
      <HRForm onSubmit={handleSubmit} defaultValues={defaultValues}>
        <div className="mt-4 w-[790px]">
          <HRInput
            name="holidayName"
            type="text"
            placeholder="Holiday name"
            label="Holiday name"
          />
        </div>

        <div className="mt-4">
          <HRInput name="fromDate" type="date" label="From date" />
        </div>

        <div className="mt-4">
          <HRInput name="toDate" type="date" label="End date" />
        </div>

        <div className="mt-4 mb-5">
          <HRInput
            name="totalDays"
            type="text"
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
            {isLoading ? "Updating..." : "Update"}
          </Button>
        </div>
      </HRForm>
    </HRModal>
  );
};

export default UpdateHolidayModal;
