'use client';

import HRForm from '@/app/components/Form/HRForm';
import HRInput from '@/app/components/Form/HRInput';
import HRModal from '@/app/components/Modal/HRModal';
// import { imageUploadIntoImgbb } from '@/app/components/utils/uploadImageIntoImgbb';
import React, { useState } from 'react';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import { toast } from 'sonner';
import { noticeModalInputFiled } from '../fakeData';
import { useCreateNoticeMutation } from '@/app/Redux/api/noticeApi';
import HRFileInput from '@/app/components/Form/HRFileInput';
import Loader from '@/app/components/utils/Loader';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CreateNotice = ({setIsOpen,modalIsOpen}:any) => {
  
      const [createNotice]=useCreateNoticeMutation()
      const [isLoading, setIsLoading]=useState(false)
      const handleSubmit: SubmitHandler<FieldValues> = async (
        values: FieldValues
      ) => {
        // const file = values.photograph?.[0] || values.photograph;
        // let imageUrl;
    
        // try {
        //   if (file) {
        //     imageUrl = await uploadImage(file);
        //     console.log("Uploaded Image URL:", imageUrl);
        //   } else {
        //     console.error("No file selected for upload.");
        //   }
        // } catch (error) {
        //   console.error("Image upload failed:", error);
        // }
    
        const resData = {
          ...values,
        };
    
        console.log(resData);
        setIsLoading(true)
        const res = await createNotice(resData);
    
        if (res?.data) {
          setIsOpen(false)
          setIsLoading(false)
          toast.success("successfully created ");

        } else {
          toast.error("Didn't created");
          setIsLoading(false)
        }
      };
    return (
        <div>
          {isLoading&&<Loader/>}
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
                    //   defaultValue={editData[inputField?.key as keyof TCandidateList]||""}
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

export default CreateNotice;