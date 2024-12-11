import HRForm from "@/app/components/Form/HRForm";
import HRInput from "@/app/components/Form/HRInput";
import HRModal from "@/app/components/Modal/HRModal";
// import { imageUploadIntoImgbb } from '@/app/components/utils/uploadImageIntoImgbb';
import React from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { shortlistInputFields } from "../fakeData";
import { useCreateShortlistCandidateMutation } from "@/app/Redux/api/shortListApi";
import Select from "../../component/Select";
import HRSelect from "@/app/components/Form/HRSelect";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CreateShortlistCandidate = ({ setIsOpen, modalIsOpen , setActionLoading,data}: any) => {
  const [createShortlistCandidate] = useCreateShortlistCandidateMutation();
  const handleSubmit = async (values: FieldValues) => {
    setIsOpen(false);
    setActionLoading(true);
  
    const resData = {
      ...data,
      ...values,
    };
  
    try {
      const res = await createShortlistCandidate(resData);
  
      if (res?.data) {
        toast.success("Successfully created shortlist candidate.");
      } else {
        // Extract error message from response
        const errorMessage = res?.error?.message || "Failed to create shortlist candidate.";
        toast.error(errorMessage);
      }
    } catch (error) {
      // Handle unexpected errors
      console.error("Error creating shortlist candidate:", error);
      const errorMessage =
        error?.response?.data?.message ||
        error?.message ||
        "An unexpected error occurred while creating the shortlist candidate.";
      toast.error(errorMessage);
    } finally {
      setActionLoading(false);
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
                {
                  inputField?.key==="candidateId"?
                  <HRSelect  className="border-primary h-10 rounded-[5px]  min-w-[340px]" options={data?.candidateId} name={"candidateId"}/>
                  : <HRInput
                  type={inputField?.type}
                  className="border-primary h-10 rounded-[5px]  min-w-[340px]"
                  placeholder={inputField?.placeholder}
                  name={`${inputField?.key}`}
                  required={inputField?.required}
                
                />
                }
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
