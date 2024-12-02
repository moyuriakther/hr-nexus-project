"use client";

import HRModal from "@/app/components/Modal/HRModal";
import { useCreateAwardMutation } from "@/app/Redux/api/awardApi";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";

// Define the type for the form data
type AwardFormData = {
  awardName: string;
  awardDescription?: string;
  giftItem: string;
  date: string;
  employeeName: string;
  awardedBy: string;
};

type AddAwardModalProps = {
  modalIsOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onSave: (data: AwardFormData) => void;
};

const AddAwardModal: React.FC<AddAwardModalProps> = ({
  modalIsOpen,
  setIsOpen,
}) => {
  const { register, reset, handleSubmit } = useForm<AwardFormData>();
  const [createAward] = useCreateAwardMutation();

  // Submit handler for the form
  const onSubmit: SubmitHandler<AwardFormData> = async (values) => {
    try {
      const awardData = { ...values };
      const res = await createAward(awardData).unwrap();
      if (res?.id) {
        toast.success("Award Created Successfully");
        setIsOpen(false);
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

  return (
    <HRModal
      modalIsOpen={modalIsOpen}
      setIsOpen={setIsOpen}
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
              {...register("awardName", { required: true })}
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
              {...register("giftItem", { required: true })}
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
              {...register("date", { required: true })}
              className="w-80 border rounded-md p-2"
            />
          </div>

          {/* Employee Name */}
          <div className="flex justify-between items-center">
            <label className="block font-medium text-gray-700">
              Employee name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              {...register("employeeName", { required: true })}
              placeholder="Employee name"
              className="w-80 border rounded-md p-2"
            />
          </div>

          {/* Awarded By */}
          <div className="flex justify-between items-center">
            <label className="block font-medium text-gray-700">
              Award by <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              {...register("awardedBy", { required: true })}
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
            onClick={() => setIsOpen(false)}
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
  );
};

export default AddAwardModal;
