import HRForm from '@/app/components/Form/HRForm';
import HRInput from '@/app/components/Form/HRInput';
import HRModal from '@/app/components/Modal/HRModal';
import React from 'react';
import Loader from '@/app/components/utils/Loader';
import { noticeModalInputFiled } from '../fakeData';
import { toast } from 'sonner';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import {  useGetSingleNoticeQuery, useUpdateNoticeMutation } from '@/app/Redux/api/noticeApi';
import { TNoticeData } from '../Type/type';
import HRFileInput from '@/app/components/Form/HRFileInput';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const UpdateNotice = ({setIsOpen,modalIsOpen,id}:{setIsOpen:any, modalIsOpen:boolean,id:string}) => {
    
    const {data,isLoading}=useGetSingleNoticeQuery(id)
    const [UpdateNotice]=useUpdateNoticeMutation()
    
    
    const handleSubmit: SubmitHandler<FieldValues> = async (values) => {
        // const file = values.noticeAttachment?.[0];
      
        try {
          const res = await UpdateNotice({
            id: id,
            body: { ...values },
          }).unwrap();
          if (res?.id) {
            toast.success("Updated Successfully");
            setIsOpen(false);
          }
          else{
            toast.error("Something Error. Try again")
          }
        } catch (error) {
          console.log(error);
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
          {noticeModalInputFiled.map((inputField, index) => {
            return (
              <div
                key={index}
                className="mb-5 text-md font-semibold flex  gap-1 items-center"
              >
                <label className="col-span-1 w-[200px]">{inputField?.label}</label>
                {inputField?.type == "file" ? (
                  <HRFileInput name={`${inputField?.name}`} label="" />
                ) : (
                  <HRInput
                    type={inputField?.type}
                    className="border-primary h-10 rounded-[5px]  min-w-[340px]"
                    placeholder={inputField?.placeholder}
                    name={`${inputField?.name}`}
                    required={inputField?.required}
                    defaultValue={data&&data[inputField?.name as keyof TNoticeData]||""}
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