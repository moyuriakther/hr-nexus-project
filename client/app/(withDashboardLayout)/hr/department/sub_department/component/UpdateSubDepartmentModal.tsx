/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import HRForm from "@/app/components/Form/HRForm";
import HRInput from "@/app/components/Form/HRInput";
import HRRadioInput from "@/app/components/Form/HRRadioInput";
import HRModal from "@/app/components/Modal/HRModal";
import { useUpdateSubDepartmentMutation } from "@/app/Redux/api/subDepartmentApi";
import { Button, Divider } from "@nextui-org/react";
import { useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { FaEdit } from "react-icons/fa";
import { toast } from "sonner";

const UpdateSubDepartmentModal = ({ subDepartment }: any) => {
  // console.log(subDepartment)
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [updateSubDepartment] = useUpdateSubDepartmentMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (values) => {
    try {
      const res = await updateSubDepartment({
        id: subDepartment.id,
        body: { ...values },
      }).unwrap();
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
          <div className="flex items-center gap-x-3">
            <p className="font-medium">Sub department name</p>
            <HRInput
              defaultValue={subDepartment?.subDepartmentName}
              name="subDepartmentName"
              type="text"
              className="lg:w-[560px]"
              placeholder="Sub Department name"
            />
          </div>
          <div className="flex items-center gap-x-20">
            <p className="font-medium">Department</p>
            <HRInput
              defaultValue={subDepartment?.department?.departmentName}
              name="department"
              type="text"
              className="lg:w-[560px]"
              placeholder="Select Department"
            />
          </div>
          <div className="flex items-center gap-x-20">
            <p className="font-medium mr-6">Is Active</p>
            <HRRadioInput
              checked={subDepartment?.isActive === true}
              name="isActive"
              options={radioOptions}
            />
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

export default UpdateSubDepartmentModal;
