import HRForm from '@/app/components/Form/HRForm';
import HRInput from '@/app/components/Form/HRInput';
import HRModal from '@/app/components/Modal/HRModal';
import React from 'react';
import Loader from '@/app/components/utils/Loader';
import { TCandidateList, TInterview } from '../../Type/type';
import { toast } from 'sonner';
import { FieldValues } from 'react-hook-form';
import { useGetSingleInterviewQuery, useUpdateInterviewMutation } from '@/app/Redux/api/interviewListApi';
import { interviewInputFiled } from '../fakeData';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const UpdateInterViewCandidate = ({setIsOpen,modalIsOpen,id}:any) => {
    
    const {data,isLoading}=useGetSingleInterviewQuery(id)
    const [updateInterview]=useUpdateInterviewMutation()
    
    
    const handleSubmit = async (values:FieldValues) => {
        const resData = {
           ...values,
        };
    
        console.log(resData);
  
    
        const res = await updateInterview({
          id:id,
          body:{...resData}
        })
     
    
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
        modalTitle="New Interview Candidate"
      >
        <HRForm onSubmit={handleSubmit}>
          {interviewInputFiled.map((inputField, index) => {
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
                  defaultValue={data?.[inputField?.key as keyof TInterview]||""}
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
            <button type="submit" className="bg-primary p-2 px-3 text-white rounded">
              Save
            </button>
          </div>
        </HRForm>
      </HRModal>
        </div>
    );
};

export default UpdateInterViewCandidate;