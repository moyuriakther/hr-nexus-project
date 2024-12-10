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
    
    
    const handleSubmit = async (values:FieldValues) => {
        // const file = values.photograph?.[0];
        setIsOpen(false)
      setActionLoading(true)
        const resData = {
          ...data,
           ...values,
           interviewDate:new Date(values?.interviewDate).toISOString()
          // photograph: await uploadImage(file),
        };
    
        console.log(resData);
  
    
        const res = await updateShortlistCandidate({
          id:id,
          body:{...resData}
        })
     
        setActionLoading(false)
    
        if (res?.data) {
          toast.success("successfully Update ");
          
        } else {
          toast.error("Didn't Update");
          setActionLoading(false)
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
                <p>{data["candidateId"]}</p>
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

export default UpdateShortlistCandidate;