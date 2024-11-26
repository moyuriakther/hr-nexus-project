"use client";

import PageHeader from "@/app/(withDashboardLayout)/components/PageHeader/PageHeader";
import HRForm from "@/app/components/Form/HRForm";
import HRInput from "@/app/components/Form/HRInput";
import { Button, Divider } from "@nextui-org/react";
import { FieldValues } from "react-hook-form";
import { pageHeaderData } from "../../../components/pageHeaderData";
import HRMultipleSelect from "@/app/components/Form/HRMultipleSelect";

const inputOption = [
  { label: "Saturday", value: "saturday" },
  { label: "Sunday", value: "sunday" },
  { label: "Monday", value: "monday" },
  { label: "Tuesday", value: "tuesday" },
  { label: "Wednesday", value: "wednesday" },
  { label: "Thursday", value: "thursday" },
  { label: "Friday", value: "friday" },
];

const UpdateWeekdayHolidayPage = ({
  useParams,
}: {
  useParams: { id: string };
}) => {
  //TODO: Implement Update Weekly Holiday
  const handleSubmit = (value: FieldValues) => {
    console.log(value);
  };

  return (
    <div className="min-h-[89vh]">
      <PageHeader item={pageHeaderData} />
      <div className="bg-white rounded-[3px] mt-4 py-4">
        <div className="mb-5">
          <div className="flex items-center justify-between flex-wrap  lg:px-6 px-3 pb-4 lg:gap-0 gap-2 ">
            <h2 className="font-semibold text-lg">Weekly holiday update</h2>
          </div>
          <Divider />

          <div className="mt-6 lg:px-6 px-3 ">
            <HRForm onSubmit={handleSubmit}>
              <HRMultipleSelect
                name="leaveDay"
                options={inputOption}
                label="Weekly Leave Day"
              />
              <Button
                size="sm"
                type="submit"
                className="bg-primary text-white rounded-[3px] text-base mt-4"
              >
                Update
              </Button>
            </HRForm>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateWeekdayHolidayPage;
