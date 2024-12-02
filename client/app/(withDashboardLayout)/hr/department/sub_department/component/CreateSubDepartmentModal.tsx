/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import HRForm from "@/app/components/Form/HRForm";
import HRInput from "@/app/components/Form/HRInput";
import HRRadioInput from "@/app/components/Form/HRRadioInput";
import HRSelect from "@/app/components/Form/HRSelect";
import HRModal from "@/app/components/Modal/HRModal";
import { useGetAllDepartmentsQuery } from "@/app/Redux/api/departmentApi";
import { useCreateSubDepartmentMutation } from "@/app/Redux/api/subDepartmentApi";
import { Button, Divider } from "@nextui-org/react";
import { useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { FaPlusCircle } from "react-icons/fa";
import { toast } from "sonner";

const CreateSubDepartmentModal = () => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [createSubDepartment] = useCreateSubDepartmentMutation();
  const {data} = useGetAllDepartmentsQuery({})
  const departments= data?.data;

  const onSubmit: SubmitHandler<FieldValues> = async (values) => {
      const departmentId =await departments?.find((dep:any) =>dep.departmentName === values.department);
      
      const subDepData = {
        ...values,
        departmentId: departmentId?.id,
        description: "Responsible for recruitment"

      }
      console.log(subDepData)
   try {
      const res = await createSubDepartment(subDepData).unwrap();
      if (res?.id) {
        toast.success("Sub Department Created Successfully");
        setModalIsOpen(false);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const deptOptions = departments?.map((dep:any) =>(
    ({ value: dep.departmentName, label: dep.departmentName})
  ));
  const radioOptions = [
    {
      value: true,
      label: "Active",
    },
    {
      value: false,
      label: "Inactive",
    },
  ];

  return (
    <div>
      <Button
        onClick={() => setModalIsOpen(!modalIsOpen)}
        size="sm"
        className="bg-primary rounded-[4px] text-sm text-white"
      >
        <FaPlusCircle />Add Sub department
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
              name="subDepartmentName"
              type="text"
              className="lg:w-[560px]"
              placeholder="Sub Department name"
            />
          </div>
          <div className="flex items-center gap-x-20">
            <p className="font-medium">Department</p>
            <HRSelect
            name="department"
            placeholder="Choose a department"
            options={deptOptions}
          />
          </div>
          <div className="flex items-center gap-x-20">
            <p className="font-medium mr-6">Is Active</p>
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

export default CreateSubDepartmentModal;
