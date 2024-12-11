import HRForm from '@/app/components/Form/HRForm';
import HRInput from '@/app/components/Form/HRInput';
import HRModal from '@/app/components/Modal/HRModal';
import React from 'react';
import { useGetSingleCandidateQuery, useUpdateCandidateMutation } from "@/app/Redux/api/candidateListApi";
import Loader from '@/app/components/utils/Loader';
import { candidateInputFields } from '../fakeData';
import { TCandidateList } from '../../Type/type';
import { toast } from 'sonner';
import { FieldValues } from 'react-hook-form';
import { uploadImage } from '@/app/utils/UploadImage';
import HRFileInput from '@/app/components/Form/HRFileInput';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const UpdateCandidate = ({setIsOpen,modalIsOpen,id,setActionLoading}:any) => {
    
    const {data,isLoading}=useGetSingleCandidateQuery(id)
    const [updateCandidate]=useUpdateCandidateMutation()
    
    const handleSubmit = async (values: FieldValues) => {
      setActionLoading(true);
      setIsOpen(false);
    
      const file = values.photograph?.[0];
      let resData;
    
      try {
        if (file) {
          const imageLink=await uploadImage(file)
          resData = {
            ...data,
            ...values,
            photograph: imageLink,
          };
        } else {
          resData = { ...data, ...values, candidateId: data?.candidateId };
        }
    
        console.log(resData);
    
        const res = await updateCandidate({
          id: id,
          body: { ...resData },
        });
    
        setActionLoading(false);
    
        if (res?.data) {
          toast.success("Successfully updated!");
        } else {
          // Display error message from API response
          const errorMessage = res?.error?.message || "Failed to update.";
          toast.error(errorMessage);
        }
      } catch (error) {
        setActionLoading(false);
    
        // Handle unexpected errors
        const errorMessage =
          error?.response?.data?.message ||
          error?.message ||
          "An unexpected error occurred.";
        toast.error(errorMessage);
      }
    };
    

    
      if(isLoading){
        return<Loader/>
      }
    return (
        <div>
         
             <HRModal
        modalIsOpen={modalIsOpen}
        setIsOpen={setIsOpen}
        modalTitle="New Candidate"
      >
        <HRForm onSubmit={handleSubmit}>
          {candidateInputFields.map((inputField, index) => {
            return (
              <div
                key={index}
                className="mb-5 text-md font-semibold flex  gap-1 items-center"
              >
                <label className="col-span-1 w-[200px]">{inputField?.label}</label>
                {inputField?.type == "file" ? (
                  <HRFileInput name={inputField?.key}  className="border-primary h-10 rounded-[5px]  min-w-[340px]"  label="" />
                ) : (
                  <HRInput
                    type={inputField?.type}
                    className="border-primary h-10 rounded-[5px]  min-w-[340px]"
                    placeholder={inputField?.placeholder}
                    name={`${inputField?.key}`}
                    required={inputField?.required}
                    defaultValue={data?.[inputField?.key as keyof TCandidateList]||""}
                  />
                )}   
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

export default UpdateCandidate;