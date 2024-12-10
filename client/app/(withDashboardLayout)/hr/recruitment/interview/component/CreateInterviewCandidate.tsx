import HRForm from '@/app/components/Form/HRForm';
import HRInput from '@/app/components/Form/HRInput';
import HRModal from '@/app/components/Modal/HRModal';
// import { imageUploadIntoImgbb } from '@/app/components/utils/uploadImageIntoImgbb';
import React from 'react';
import { FieldValues } from 'react-hook-form';
import { toast } from 'sonner';
import { useCreateInterviewMutation } from '@/app/Redux/api/interviewListApi';
import { interviewInputFiled } from '../fakeData';
import Select from '../../component/Select';
import HRSelect from '@/app/components/Form/HRSelect';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CreateInterviewCandidate = ({setIsOpen,modalIsOpen, setActionLoading, data}:any) => {
  
      const [createSelectedCandidate]=useCreateInterviewMutation({})
      const handleSubmit = async (values:FieldValues) => {
        const {vivaMarks, writtenMarks, mcqTotalMarks}=values
        const totalMarks=vivaMarks+writtenMarks+mcqTotalMarks
        setIsOpen(false)
        setActionLoading(true)
        const resData = {
           ...values,
           isSelected:values?.isSelected==="true"?true:false,
           totalMarks
        };
    
        console.log(resData);
        // let profileImage;
    
        // if (file) {
        //   const formData = new FormData();
        //   formData.append("image", file[0]);
    
        //   profileImage = await imageUploadIntoImgbb(formData);
        // }
    
        const res = await createSelectedCandidate(resData)
        //   pathname !== "/hr/employees/create"
        //     ? await updateEmployee(userCreatedData)
        //     : await createEmployee(userCreatedData);
    
        if (res?.data) {
          toast.success("successfully created ");
          setActionLoading(false)
        } else {
          toast.error("Didn't created");
          setActionLoading(false)
        }
      };

      const selectionData=[
        {value:true, label:"Selected"
        },
        {value:false, label:"Not Selected"}
      ]
    return (
        <div>
               <HRModal
        modalIsOpen={modalIsOpen}
        setIsOpen={setIsOpen}
        modalTitle="New Selected Candidate"
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
                  inputField?.key==="candidateId"&&
                  <HRSelect  className="border-primary h-10 rounded-[5px]  min-w-[340px]" options={data?.candidateId} name={"candidateId"}/>
                }
                {
                  inputField?.key==="isSelected"&&
                  <HRSelect  className="border-primary h-10 rounded-[5px]  min-w-[340px]" options={selectionData} name={"isSelected"}/>
                }
                 
                {
                  (inputField?.key!=="isSelected"&&inputField?.key!=="candidateId")&&
                  <HRInput
                  type={inputField?.type}
                  className="border-primary h-10 rounded-[5px]  min-w-[340px]"
                  placeholder={inputField?.placeholder}
                  name={`${inputField?.key}`}
                  required={inputField?.required}
                
                />
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

export default CreateInterviewCandidate;