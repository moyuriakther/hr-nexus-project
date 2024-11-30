/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import HRForm from "@/app/components/Form/HRForm";
import HRInput from "@/app/components/Form/HRInput";
import HRModal from "@/app/components/Modal/HRModal";
import { useUpdateClientMutation } from "@/app/Redux/api/clientApi";
import { Button, Divider } from "@nextui-org/react";
import { useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { FaEdit } from "react-icons/fa";
import { toast } from "sonner";

const UpdateClientModal = ({clientId}:any) => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [updateClient] = useUpdateClientMutation();

  const onSubmit: SubmitHandler<FieldValues> = async(values) => {
     try {
      const res = await updateClient({clientId: clientId, body: {...values}}).unwrap();
      if (res?.id) {
        toast.success("Client Updated Successfully");
        setModalIsOpen(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

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
          <div className="flex items-center gap-x-14">
            <p className="font-medium">Client name</p>
            <HRInput
              name="clientName"
              type="text"
              className="lg:w-[560px]"
              placeholder="Client name"
            />
          </div>
          <div className="flex items-center gap-x-20">
            <p className="font-medium mr-1">Country</p>
            <HRInput
              name="country"
              type="text"
              className="lg:w-[560px]"
              placeholder="Country"
            />
          </div>
          <div className="flex items-center gap-x-20">
            <p className="font-medium mr-5">Email</p>
            <HRInput
              name="email"
              type="text"
              className="lg:w-[560px]"
              placeholder="Email"
            />
          </div>
          <div className="flex items-center gap-x-7">
            <p className="font-medium">Company Name</p>
            <HRInput
              name="companyName"
              type="text"
              className="lg:w-[560px]"
              placeholder="Company Name"
            />
          </div>
          <div className="flex items-center gap-x-20">
            <p className="font-medium">Address</p>
            <HRInput
              name="address"
              type="text"
              className="lg:w-[560px]"
              placeholder="Address"
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

export default UpdateClientModal;