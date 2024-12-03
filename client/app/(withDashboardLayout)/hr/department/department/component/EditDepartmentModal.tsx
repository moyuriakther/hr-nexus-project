/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import HRForm from "@/app/components/Form/HRForm";
import HRInput from "@/app/components/Form/HRInput";
import HRRadioInput from "@/app/components/Form/HRRadioInput";
import HRModal from "@/app/components/Modal/HRModal";
import { useUpdateDepartmentMutation } from "@/app/Redux/api/departmentApi";
import { Button, Divider } from "@nextui-org/react";
import { useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { FaEdit } from "react-icons/fa";
import { toast } from "sonner";

const EditDepartmentModal = ({ departmentId }: any) => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [updateDepartment] = useUpdateDepartmentMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (values) => {
    console.log(values);
    values["date"] = values?.data && new Date(values?.date)?.toISOString();
    try {
      const res = await updateDepartment({
        departmentId: departmentId,
        body: { ...values },
      }).unwrap();
      console.log(res);
      if (res?.id) {
        toast.success("Department Updated Successfully");
        setModalIsOpen(false);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const radioOptions = [
    {
      value: "true",
      label: "Active",
    },
    {
      value: "false",
      label: "Inactive",
    },
  ];

  return (
    <div>
      <Button
        onClick={() => setModalIsOpen(!modalIsOpen)}
        size="sm"
        className="bg-green-100 text-green-500 border border-green-500 min-w-1"
      >
        <FaEdit className="text-base" />
      </Button>
      <HRModal
        modalIsOpen={modalIsOpen}
        setIsOpen={setModalIsOpen}
        modalTitle="New position"
      >
        <HRForm onSubmit={onSubmit}>
          <div className="flex items-center gap-x-4">
            <p className="font-medium">Department name</p>
            <HRInput
              name="departmentName"
              type="text"
              className="lg:w-[560px]"
              placeholder="Department name"
            />
          </div>
          <div className="flex items-center gap-x-20">
            <p className="font-medium">Is Active</p>
            <HRRadioInput name="isActive" options={radioOptions} />
          </div>

          <div>
            <Divider />
            <div className="mt-5 flex items-center justify-end gap-2">
              <Button
                onClick={() => setModalIsOpen(false)}
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
          </div>
        </HRForm>
      </HRModal>
    </div>
  );
};

export default EditDepartmentModal;
