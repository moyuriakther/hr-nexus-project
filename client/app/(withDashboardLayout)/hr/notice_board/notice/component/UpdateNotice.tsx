import HRForm from '@/app/components/Form/HRForm';
import HRInput from '@/app/components/Form/HRInput';
import HRModal from '@/app/components/Modal/HRModal';
import React from 'react';
import { useGetSingleCandidateQuery, useUpdateCandidateMutation } from "@/app/Redux/api/candidateListApi";
import Loader from '@/app/components/utils/Loader';
import { noticeModalInputFiled } from '../fakeData';
import { toast } from 'sonner';
import { FieldValues } from 'react-hook-form';
import { uploadImage } from '@/app/utils/UploadImage';
import { TInterview } from '../../../recruitment/Type/type';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const UpdateNotice = ({setIsOpen,modalIsOpen,id}:any) => {
    
    const {data,isLoading}=useGetSingleCandidateQuery(id)
    const [updateCandidate]=useUpdateCandidateMutation()
    
    
    const handleSubmit = async (values:FieldValues) => {
        const file = values.noticeAttachment?.[0];

        const resData = {
           ...values,
           noticeAttachment: await uploadImage(file),
        };
    
        console.log(resData);
  
    
        const res = await updateCandidate(resData)
     
    
        if (res?.data) {
          toast.success("successfully Update ");
        } else {
          toast.error("Didn't Update");
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
          {noticeModalInputFiled.map((inputField, index) => {
            return (
              <div
                key={index}
                className="mb-5 text-md font-semibold flex  gap-1 items-center"
              >
                <label className="col-span-1 w-[200px]">{inputField?.label}</label>
                <HRInput
                  type={inputField?.type}
                  className="border-primary h-10 rounded-[5px]  min-w-[340px]"
                  placeholder={inputField?.placeholder}
                  name={`${inputField?.name}`}
                  required={inputField?.required}
                  defaultValue={data[inputField?.name as keyof TInterview]||""}
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
            <button type="submit" className="bg-primary p-2 px-3 text-white rounded">
              Save
            </button>
          </div>
        </HRForm>
      </HRModal>
        </div>
    );
};

export default UpdateNotice;