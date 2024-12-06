"use client";

import HRForm from "@/app/components/Form/HRForm";
import HRInput from "@/app/components/Form/HRInput";
import HRModal from "@/app/components/Modal/HRModal";
import { useCreatePositionMutation } from "@/app/Redux/api/positionApi";
import { Button, Divider } from "@nextui-org/react";
import { useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { FaPlusCircle } from "react-icons/fa";
import { toast } from "sonner";

const CreatePositionModalContent = () => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [createPosition] = useCreatePositionMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);

    const res = await createPosition(data).unwrap();
    if (res?.id) {
      toast.success("Position Created Successfully");
      setModalIsOpen(false);
    }
  };

  return (
    <div>
      <Button
        onClick={() => setModalIsOpen(!modalIsOpen)}
        size="sm"
        className="bg-primary rounded-[4px] text-sm text-white"
      >
        <FaPlusCircle /> Add position
      </Button>

      <HRModal
        modalIsOpen={modalIsOpen}
        setIsOpen={setModalIsOpen}
        modalTitle="New position"
      >
        <HRForm onSubmit={onSubmit}>
          <div className="flex items-center gap-x-10">
            <p className="font-medium">Position Name</p>
            <HRInput
              name="positionName"
              type="text"
              className="lg:w-[560px]"
              required={true}
              placeholder="Position Name"
            />
          </div>
          <div className="flex items-center gap-x-10">
            <p className="font-medium">Position Detail</p>
            <HRInput
              name="PositionDetails"
              type="text"
              required={true}
              className="lg:w-[560px]"
              placeholder="Position Details"
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

export default CreatePositionModalContent;
