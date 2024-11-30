"use client";

import { useGetAllEmployeeQuery } from "@/app/Redux/api/employeeApi";
import {
  useCreateLeaveMutation,
  useGetAllLeaveQuery,
} from "@/app/Redux/api/leaveApi";
import HRForm from "@/app/components/Form/HRForm";
import HRInput from "@/app/components/Form/HRInput";
import HRSelectDropdown from "@/app/components/Form/HRSelectDropdown";
import HRModal from "@/app/components/Modal/HRModal";
import { Employee, TLeave } from "@/app/types";
import { Button, Divider } from "@nextui-org/react";
import React from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

type TProps = {
  modalIsOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const CreateLeaveApplicationModal = ({ modalIsOpen, setIsOpen }: TProps) => {
  const { data: employees, isLoading: isEmployeeLoading } =
    useGetAllEmployeeQuery("");
  const { data: holidayType, isLoading: isHolidayTypeLoading } =
    useGetAllLeaveQuery("");
  const [createHoliday, { isLoading }] = useCreateLeaveMutation();

  const employeeOptions = employees?.map((employee: Employee) => ({
    label: `${employee.firstName} ${employee.lastName}`,
    value: employee.id,
  }));

  const holidayTypeOptions = holidayType?.data.map((holidayType: TLeave) => ({
    label: holidayType?.leaveType,
    value: holidayType.leaveType,
  }));

  const handleSubmit = async (values: FieldValues) => {
    const resData = {
      employeeId: values?.employeeId,
      leaveType: values?.leaveType,
      startDate: new Date(values?.startDate).toISOString(),
      endDate: new Date(values?.endDate).toISOString(),
      days: Number(values?.days),
      reason: values?.reason,
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
      modalTitle="Leave application create"
      setIsOpen={setIsOpen}
    >
      {isEmployeeLoading && holidayTypeOptions ? (
        "Loading...."
      ) : (
        <HRForm onSubmit={handleSubmit}>
          <div className="mt-1 w-[790px]">
            <div className="mt-4 w-[790px]">
              <HRSelectDropdown
                options={employeeOptions}
                name="employeeId"
                placeholder="Select Employee"
                label="Employee"
              />
            </div>
          </div>
          <div className="mt-1">
            <div className="mt-4 w-[790px]">
              <HRSelectDropdown
                options={holidayTypeOptions}
                name="leaveType"
                placeholder="Select Leave Type"
                label="Leave Type"
              />
            </div>
          </div>

          <div className="mt-1">
            <HRInput name="startDate" type="date" label="Start Date" required />
          </div>

          <div className="mt-1">
            <HRInput name="endDate" type="date" label="End Date" required />
          </div>

          <div className="mt-1">
            <HRInput
              name="days"
              type="text"
              label="Total days"
              placeholder="Total days"
            />
          </div>

          <div className="mt-1 mb-2">
            <HRInput
              name="reason"
              type="text"
              label="Reason"
              placeholder="Reason"
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
      )}
    </HRModal>
  );
};

export default CreateLeaveApplicationModal;
