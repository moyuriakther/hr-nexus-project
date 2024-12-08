import HRForm from "@/app/components/Form/HRForm";
import HRInput from "@/app/components/Form/HRInput";
import HRModal from "@/app/components/Modal/HRModal";
// import { imageUploadIntoImgbb } from '@/app/components/utils/uploadImageIntoImgbb';
import React from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { shortlistInputFields } from "../fakeData";
import { useCreateShortlistCandidateMutation } from "@/app/Redux/api/shortListApi";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CreateShortlistCandidate = ({ setIsOpen, modalIsOpen }: any) => {
  const [CreateShortlistCandidate] = useCreateShortlistCandidateMutation({});
  const handleSubmit = async (values: FieldValues) => {
    const resData = {
      ...values,
    };

    console.log(resData);
    // let profileImage;

    // if (file) {
    //   const formData = new FormData();
    //   formData.append("image", file[0]);

    //   profileImage = await imageUploadIntoImgbb(formData);
    // }

    const res = await CreateShortlistCandidate(resData);

    if (res?.data) {
      toast.success("successfully created ");
    } else {
      toast.error("Didn't created");
    }
  };
  return (
    <div>
      <HRModal
        modalIsOpen={modalIsOpen}
        setIsOpen={setIsOpen}
        modalTitle="New Shortlist Candidate"
      >
        <HRForm onSubmit={handleSubmit}>
          {shortlistInputFields.map((inputField, index) => {
            return (
              <div
                key={index}
                className="mb-5 text-md font-semibold flex  gap-1 items-center"
              >
                <label className="col-span-1 w-[200px]">
                  {inputField?.label}
                </label>
                <HRInput
                  type={inputField?.type}
                  className="border-primary h-10 rounded-[5px]  min-w-[340px]"
                  placeholder={inputField?.placeholder}
                  name={`${inputField?.key}`}
                  required={inputField?.required}
                />
              </div>
            );
          })}
          <div className="flex gap-2 justify-end">
            <button
              onClick={() => setIsOpen(false)}
              className="bg-[#DC3545] p-2 px-3 text-white rounded"
            >
              Close
            </button>
            <button
              type="submit"
              className="bg-primary p-2 px-3 text-white rounded"
            >
              Save
            </button>
          </div>
        </HRForm>
      </HRModal>
    </div>
  );
};

export default CreateShortlistCandidate;
