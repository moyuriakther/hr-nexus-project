import HRForm from '@/app/components/Form/HRForm';
import HRInput from '@/app/components/Form/HRInput';
import HRModal from '@/app/components/Modal/HRModal';
import React from 'react';
import Loader from '@/app/components/utils/Loader';
import {  selectionInputFields } from '../fakeData';
import { TCandidateList } from '../../Type/type';
import { toast } from 'sonner';
import { FieldValues } from 'react-hook-form';
import {  useGetSingleSelectedCandidateQuery, useUpdateSelectedCandidateMutation } from '@/app/Redux/api/selectedListApi';
import { TSelect } from '@/app/types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const UpdateSelectedCandidate = ({setIsOpen,modalIsOpen,id, setActionLoading}:any) => {
    
    const {data,isLoading}=useGetSingleSelectedCandidateQuery(id)
    const [updateSelectedCandidate]=useUpdateSelectedCandidateMutation()
    
    
    const handleSubmit = async (values: FieldValues) => {
      setActionLoading(true);
      setIsOpen(false);
    
      const resData = {
        ...data,
        ...values,
        // photograph: await uploadImage(file), // Uncomment if file upload is needed
      };
    
      console.log("Request Data:", resData);
    
      try {
        const res = await updateSelectedCandidate({
          id: id,
          body: { ...resData },
        });
    
        if (res?.data) {
          toast.success("Successfully updated!");
        } else {
          // Extract error message from response
          const errorMessage = res?.error?.message || "Candidate update failed.";
          toast.error(errorMessage);
        }
      } catch (error) {
        // Handle unexpected errors
        console.error("Error updating candidate:", error);
        const errorMessage =
          error?.response?.data?.message ||
          error?.message ||
          "An unexpected error occurred.";
        toast.error(errorMessage);
      } finally {
        // Ensure loading state is reset
        setActionLoading(false);
      }
    };
    
     
    return (
        <div>
          {
            isLoading&&<Loader/>
          }
             <HRModal
        modalIsOpen={modalIsOpen}
        setIsOpen={setIsOpen}
        modalTitle="New Candidate"
      >
        <HRForm onSubmit={handleSubmit}>
          {selectionInputFields.map((inputField, index) => {
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
                  defaultValue={data?.[inputField?.key as keyof TSelect]||""}
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

export default UpdateSelectedCandidate;