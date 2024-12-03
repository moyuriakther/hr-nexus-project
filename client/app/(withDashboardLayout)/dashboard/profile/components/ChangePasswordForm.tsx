"use client";

import { useChangePasswordMutation } from "@/app/Redux/api/userApi";
import HRForm from "@/app/components/Form/HRForm";
import HRInput from "@/app/components/Form/HRInput";
import { useRouter } from "next/navigation";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

const ChangePasswordForm = () => {
  const router = useRouter();

  const [changePassword, { isLoading }] = useChangePasswordMutation();

  const handleChangePassword = async (values: FieldValues) => {
    if (values.confirmPassword !== values.newPassword) {
      toast.error("New password and confirm new password doesn't match😒");
    }

    const resData = {
      oldPassword: values.oldPassword,
      newPassword: values.newPassword,
    };

    const res = await changePassword(resData).unwrap();

    if (res?.message) {
      toast.success("Changed password successfully!!");
      router.push("/login");
    }
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
              label="Confirm new password"
              type="text"
            />
          </div>
          <div className="flex justify-end items-center mt-2">
            <button className="bg-[#188753] text-white pr-12 pl-12 pt-2 pb-2 rounded">
              {isLoading ? "Changing......" : "Change password"}
            </button>
          </div>
        </HRForm>
      </div>
    </div>
  );
};

export default ChangePasswordForm;
