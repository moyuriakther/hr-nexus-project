import HRForm from '@/app/components/Form/HRForm';
import HRInput from '@/app/components/Form/HRInput';
import HRModal from '@/app/components/Modal/HRModal';
// import { imageUploadIntoImgbb } from '@/app/components/utils/uploadImageIntoImgbb';
import { useCreateCandidateMutation } from '@/app/Redux/api/candidateListApi';
import { uploadImage } from '@/app/utils/UploadImage';
import React from 'react';
import { FieldValues } from 'react-hook-form';
import { toast } from 'sonner';
import { candidateInputFields } from '../fakeData';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CreateCandidate = ({setIsOpen,modalIsOpen}:any) => {
  
      const [createCandidate]=useCreateCandidateMutation()
      const handleSubmit = async (values:FieldValues) => {
        const file = values.photograph?.[0];

        const resData = {
           ...values,
          photograph: await uploadImage(file),
        };
    
        console.log(resData);
        // let profileImage;
    
        // if (file) {
        //   const formData = new FormData();
        //   formData.append("image", file[0]);
    
        //   profileImage = await imageUploadIntoImgbb(formData);
        // }
    
        const res = await createCandidate(resData)
        //   pathname !== "/hr/employees/create"
        //     ? await updateEmployee(userCreatedData)
        //     : await createEmployee(userCreatedData);
    
        if (res?.data) {
          toast.success("successfully created ");
        } else {
          toast.error("Didn't created");
        }
      };
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
                <HRInput
                  type={inputField?.type}
                  className="border-primary h-10 rounded-[5px]  min-w-[340px]"
                  placeholder={inputField?.placeholder}
                  name={`${inputField?.key}`}
                  required={inputField?.required}
                //   defaultValue={editData[inputField?.key as keyof TCandidateList]||""}
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

export default CreateCandidate;