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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const UpdateSelectedCandidate = ({setIsOpen,modalIsOpen,id}:any) => {
    
    const {data,isLoading}=useGetSingleSelectedCandidateQuery(id)
    const [updateSelectedCandidate]=useUpdateSelectedCandidateMutation()
    
    
    const handleSubmit = async (values:FieldValues) => {
        // const file = values.photograph?.[0];

        const resData = {
           ...values,
          // photograph: await uploadImage(file),
        };
    
        console.log(resData);
  
    
        const res = await updateSelectedCandidate(resData)
     
    
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
          {selectionInputFields.map((inputField, index) => {
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
                  name={`${inputField?.key}`}
                  required={inputField?.required}
                  defaultValue={data?.[inputField?.key as keyof TCandidateList]||""}
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

export default UpdateSelectedCandidate;