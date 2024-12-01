import HRForm from "@/app/components/Form/HRForm";
import HRInput from "@/app/components/Form/HRInput";
import { FieldValues } from "react-hook-form";

const ChangePasswordForm = () => {
  const handleChangePassword = (values: FieldValues) => {
    console.log(values);
  };

  return (
    <div>
      <div className="bg-[#f8faf8] rounded flex justify-between items-center pt-4 pb-4 pr-12 pl-12">
        <h1 className="text-[18px] font-[700]  border-l-4 border-[#188753] pl-[8px]">
          Change Password
        </h1>
      </div>
      <div className="mt-6 pr-12 pl-12 pb-6">
        <HRForm onSubmit={handleChangePassword}>
          <div className="flex gap-6">
            <div className="w-[50%]">
              <HRInput
                name="oldPassword"
                label="Current password"
                type="text"
              />
            </div>

            <div className="w-[50%]">
              <HRInput name="newPassword" label="New password" type="text" />
            </div>
          </div>
          <div className="w-[50%] mt-6">
            <HRInput
              name="confirmPassword"
              label="Confirm password"
              type="text"
            />
          </div>
          <div className="flex justify-end items-center mt-2">
            <button className="bg-[#188753] text-white pr-12 pl-12 pt-2 pb-2 rounded">
              Save changes
            </button>
          </div>
        </HRForm>
      </div>
    </div>
  );
};

export default ChangePasswordForm;
