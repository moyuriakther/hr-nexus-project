import HRForm from '@/app/components/Form/HRForm';
import HRInput from '@/app/components/Form/HRInput';
import HRModal from '@/app/components/Modal/HRModal';
import React from 'react';
import Loader from '@/app/components/utils/Loader';
import {  TShortList } from '../../Type/type';
import { toast } from 'sonner';
import { FieldValues } from 'react-hook-form';
import { useGetSingleShortlistCandidateQuery, useUpdateShortlistCandidateMutation } from '@/app/Redux/api/shortListApi';
import { shortlistInputFields } from '../fakeData';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const UpdateShortlistCandidate = ({setIsOpen,modalIsOpen,id, setActionLoading}:any) => {
    
    const {data,isLoading}=useGetSingleShortlistCandidateQuery(id)
    const [updateShortlistCandidate]=useUpdateShortlistCandidateMutation()
    
    
    const handleSubmit = async (values: FieldValues) => {
      setIsOpen(false);
      setActionLoading(true);
    
      const resData = {
        ...data,
        ...values,
        candidateId:data?.candidateId,
        interviewDate: new Date(values?.interviewDate).toISOString(),
      };
    
      console.log(resData)
      try {
        const res = await updateShortlistCandidate({
          id: id,
          body: { ...resData },
        });
    
        if (res?.data) {
          toast.success("Successfully updated shortlist candidate.");
        } else {
          // Extract error message from response
          const errorMessage = res?.error?.message || "Failed to update shortlist candidate.";
          toast.error(errorMessage);
        }
      } catch (error) {
        // Handle unexpected errors
        console.error("Error updating shortlist candidate:", error);
        const errorMessage =
          error?.response?.data?.message ||
          error?.message ||
          "An unexpected error occurred while updating the shortlist candidate.";
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
                <label className="col-span-1 w-[200px]">{inputField?.label}</label>
                {
                  inputField.key!=="candidateId"?<HRInput
                  type={inputField?.type}
                  className="border-primary h-10 rounded-[5px]  min-w-[340px]"
                  placeholder={inputField?.placeholder}
                  name={`${inputField?.key}`}
                  required={inputField?.required}
                  defaultValue={data?.[inputField?.key as keyof TShortList]||""}
                />:
                <p>{data?.["candidateId"]}</p>
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
            {
              data&&<button type="submit" className="bg-primary p-2 px-3 text-white rounded">
              Save
            </button>
            }
          </div>
        </HRForm>
      </HRModal>
        </div>
    );
};

export default UpdateShortlistCandidate;