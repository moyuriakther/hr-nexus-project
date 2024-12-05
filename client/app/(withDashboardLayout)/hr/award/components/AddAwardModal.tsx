/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import HRForm from "@/app/components/Form/HRForm";
import HRInput from "@/app/components/Form/HRInput";
import HRSelect from "@/app/components/Form/HRSelect";
import HRModal from "@/app/components/Modal/HRModal";
import { useCreateAwardMutation } from "@/app/Redux/api/awardApi";
import { useGetAllEmployeeQuery } from "@/app/Redux/api/employeeApi";
import { Button, Divider } from "@nextui-org/react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";

const CreateAwardModal = ({ modalIsOpen, setIsOpen }: any) => {
  const [createAward] = useCreateAwardMutation();
  const { data: employees } = useGetAllEmployeeQuery({});

  const empOptions = employees?.map((emp: any) => ({
    value: emp?.id,
    label: emp?.firstName + " " + emp?.lastName,
  }));

  const onSubmit: SubmitHandler<FieldValues> = async (values) => {
    const formattedDate = new Date(values.date).toISOString();
    if (formattedDate) {
      <p>Date is Required</p>;
    }
    const awardData = {
      employeeId: values.employeeId,
      awardName: values.awardName,
      awardDescription: values.awardDescription,
      giftItem: values.giftItem,
      date: formattedDate,
      awardBy: values.awardBy,
    };
    console.log({ formattedDate });
    console.log(awardData);
    try {
      const res = await createAward(awardData).unwrap();
      if (res?.id) {
        toast.success("Award Created Successfully");
        setIsOpen(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <HRModal
        modalIsOpen={modalIsOpen}
        setIsOpen={setIsOpen}
        modalTitle="Award Form"
      >
        <HRForm onSubmit={onSubmit}>
          <div className="space-y-4">
            <div className="flex items-center gap-x-4">
              <label className="font-medium w-[150px]">Award name</label>
              <HRInput
                name="awardName"
                type="text"
                className="flex-1 lg:w-[560px]"
                placeholder="Award name"
              />
            </div>
            <div className="flex items-center gap-x-4">
              <label className="font-medium w-[150px]">Award description</label>
              <HRInput
                name="awardDescription"
                type="text"
                className="flex-1 lg:w-[560px]"
                placeholder="Award description"
              />
            </div>
            <div className="flex items-center gap-x-4">
              <label className="font-medium w-[150px]">Gift item</label>
              <HRInput
                name="giftItem"
                type="text"
                className="flex-1 lg:w-[560px]"
                placeholder="Gift item"
              />
            </div>
            <div className="flex items-center gap-x-4">
              <label className="font-medium w-[150px]">Date</label>
              <HRInput
                name="date"
                type="date"
                className="flex-1 lg:w-[560px]"
                placeholder="Date"
              />
            </div>
            <div className="flex items-center gap-x-4">
              <label className="font-medium w-[150px]">Select Employee </label>
              <HRSelect
                options={empOptions}
                name="employeeId"
                className="flex-1 lg:w-[560px]"
                placeholder="Select Employee name"
              />
            </div>
            <div className="flex items-center gap-x-4">
              <label className="font-medium w-[150px]">Award by</label>
              <HRInput
                name="awardBy"
                type="text"
                className="flex-1 lg:w-[560px]"
                placeholder="Award by"
              />
            </div>
          </div>

          <Divider className="my-4" />
          <div className="mt-5 flex items-center justify-end gap-2">
            <Button
              onClick={() => setIsOpen(!modalIsOpen)}
              className="rounded-[3px] text-base shadow-md h-9"
              color="danger"
              size="sm"
            >
              Close
            </Button>
            <Button
              type="submit"
              className="rounded-[3px] text-base bg-blue-600 text-white h-9"
              size="sm"
            >
              Save
            </Button>
          </div>
        </HRForm>
      </HRModal>
    </div>
  );
};

export default CreateAwardModal;
