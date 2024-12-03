/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import HRModal from "@/app/components/Modal/HRModal";
import { useUpdateAwardMutation } from "@/app/Redux/api/awardApi";
import { useGetAllEmployeeQuery } from "@/app/Redux/api/employeeApi";
import { Button } from "@nextui-org/react";
import { useState } from "react";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { FaEdit } from "react-icons/fa";
import { toast } from "sonner";

// Define the type for the form data
type AwardFormData = {
  awardName: string;
  awardDescription?: string;
  giftItem: string;
  date: string;
  employeeId: string;
  awardBy: string;
};

type AddAwardModalProps = {
  modalIsOpen?: boolean;
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  onSave?: (data: AwardFormData) => void;
  award: any;
};

const UpdateAwardModal: React.FC<AddAwardModalProps> = ({
//   modalIsOpen,
//   setIsOpen,
  award
}) => {
     const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const { register, reset, handleSubmit } = useForm<AwardFormData>();
  const [updateAward, {isSuccess, isLoading}] = useUpdateAwardMutation();
  const {data: employees} = useGetAllEmployeeQuery({})
  // Submit handler for the form
  const onSubmit: SubmitHandler<FieldValues> = async (values) => {
    try {
     const formattedDate = values?.data && new Date(values?.date)?.toISOString();
      const body = {...values, date: values?.data && formattedDate}
      
      const res = await updateAward({id: award?.id, body}).unwrap();
      console.log(res)
      if (res?.id) {
        toast.success("Award Updated Successfully");
        setModalIsOpen(false);
        reset();
      }
    } catch (error) {
      if (error instanceof Error) {
        toast.error(`Error: ${error.message || "An error occurred"}`);
      } else {
        toast.error("Error creating award");
      }
      console.error(error);
    }
  };
if(isSuccess){
  <p>Success...</p>
}
if(isLoading){
  <p>Loading...</p>
}
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
      modalTitle="Award Form"
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-4">
          {/* Award Name */}
          <div className="flex justify-between items-center">
            <label className="block font-medium text-gray-700">
              Award name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              {...register("awardName")}
              defaultValue={award?.awardName}
              placeholder="Award name"
              className="w-80 border rounded-md p-2 ms-10"
            />
          </div>

          {/* Award Description */}
          <div className="flex justify-between items-center">
            <label className="block font-medium text-gray-700">
              Award description
            </label>
            <textarea
              {...register("awardDescription")}
              defaultValue={award?.awardDescription}
              placeholder="Award description"
              className="w-80 border rounded-md p-2"
            />
          </div>

          {/* Gift Item */}
          <div className="flex justify-between items-center">
            <label className="block font-medium text-gray-700">
              Gift item <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              {...register("giftItem")}
              defaultValue={award?.giftItem}
              placeholder="Gift item"
              className="w-80 border rounded-md p-2"
            />
          </div>

          {/* Date */}
          <div className="flex justify-between items-center">
            <label className="block font-medium text-gray-700">
              Date <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              {...register("date")}
              className="w-80 border rounded-md p-2"
            />
          </div>

          {/* Employee Name */}
          <div className="flex justify-between items-center">
            <label className="block font-medium text-gray-700">
              Employee name <span className="text-red-500">*</span>
            </label>
           <select
           defaultValue={award?.employeeId}
            {...register("employeeId", { required: true })}
            className="w-80 border rounded-md p-2"
          >
            <option value="" disabled>
              Select Employee
            </option>
            {employees?.map((employee:any, index:number) => (
              <option key={index} value={employee?.id}>
              {employee?.firstName + " " + employee.lastName}
              </option>
            ))}
          </select>
          </div>

          {/* Awarded By */}
          <div className="flex justify-between items-center">
            <label className="block font-medium text-gray-700">
              Award by <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              defaultValue={award?.awardBy}
              {...register("awardBy")}
              placeholder="Award by"
              className="w-80 border rounded-md p-2"
            />
          </div>
        </div>

        {/* Modal Buttons */}
        <div className="flex justify-end mt-4 space-x-4">
          <button
            type="button"
            className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600"
            onClick={() => setModalIsOpen(false)}
          >
            Close
          </button>
          <button
            type="submit"
            className="bg-[#198754] text-white py-2 px-4 rounded-md hover:bg-green-600"
          >
            Save
          </button>
        </div>
      </form>
    </HRModal>
      </div>
  );
};

export default UpdateAwardModal;
