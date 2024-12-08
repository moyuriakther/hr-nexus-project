"use client";

import React from "react";
import { Card, CardBody, Tab, Tabs } from "@nextui-org/react";
import HRForm from "@/app/components/Form/HRForm";
import HRInput from "@/app/components/Form/HRInput";
import { FieldValues } from "react-hook-form";
import UpdateProfileImg from "../../profile/components/UpdateProfileImg";
import ChangePasswordForm from "../../profile/components/ChangePasswordForm";
import { uploadImage } from "@/app/utils/UploadImage";
import HRFileInput from "@/app/components/Form/HRFileInput";
import {
  useGetMyProfileQuery,
  useUpdateMyProfileMutation,
} from "@/app/Redux/api/userApi";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import Loader from "@/app/components/utils/Loader";

const ProfilePage = () => {
  const router = useRouter();

  const { data: myProfile, isLoading: isMyProfileLoading } =
    useGetMyProfileQuery({});
  const [updateProfile, { isLoading }] = useUpdateMyProfileMutation();

  const defaultValues = {
    name: myProfile?.name,
    email: myProfile?.email,
    phone: myProfile?.phoneNumber,
    signature: myProfile?.signature,
  };

  const handleSubmit = async (values: FieldValues) => {
    const file = values.signature?.[0];

    if (file) {
      const resData = {
        name: values.name,
        email: values?.email,
        phoneNumber: values?.phone,
        signature: await uploadImage(file),
      };
      const res = await updateProfile(resData).unwrap();

      if (res?.id) {
        toast.success("Update my profile successfully!!");
        router.push("/dashboard/profile");
      }
    }

    const resData = {
      name: values.name,
      email: values?.email,
      phoneNumber: values?.phone,
    };

    const res = await updateProfile(resData).unwrap();

    if (res?.id) {
      toast.success("Update my profile successfully!!");
      router.push("/dashboard/profile");
    }
  };

  return (
    <div className="min-h-[89vh] bg-white p-[24px] rounded-[12px]">
      <UpdateProfileImg />

      <div>
        <div className="flex w-full flex-col gap-4 px-2">
          <Tabs aria-label="Options" isVertical={true} color="primary">
            <Tab
              key="profileInfo"
              title={
                <h1 className="text-gray-600 font-[600] text-[14px]">
                  Personal Info
                </h1>
              }
            >
              <Card>
                <CardBody className="w-[973px]">
                  <div>
                    <div className="bg-[#f8faf8] rounded flex justify-between items-center pt-4 pb-4 pr-12 pl-12">
                      <h1 className="text-[18px] font-[700]  border-l-4 border-[#188753] pl-[8px]">
                        Personal Info
                      </h1>
                    </div>
                    <div className="mt-6 pr-12 pl-12 pb-6">
                      {isMyProfileLoading ? (
                        <Loader />
                      ) : (
                        <HRForm
                          onSubmit={handleSubmit}
                          defaultValues={defaultValues}
                        >
                          <div className="flex gap-6">
                            <div className="w-[50%]">
                              <HRInput name="name" label="Name" type="text" />
                            </div>

                            <div className="w-[50%]">
                              <HRInput name="email" label="Email" type="text" />
                            </div>
                          </div>
                          <div className="flex gap-6">
                            <div className="w-[50%] mt-6">
                              <HRInput name="phone" label="Phone" type="text" />
                            </div>

                            <div className="w-[50%] mt-6">
                              <HRFileInput name="signature" label="Signature" />
                            </div>
                          </div>
                          <div className="flex justify-end items-center mt-2 gap-6">
                            <button className="bg-[#188753] text-white pr-12 pl-12 pt-2 pb-2 rounded">
                              {isLoading ? "Updating......" : "Update"}
                            </button>
                            <button className="bg-[#e5343d] text-white pr-12 pl-12 pt-2 pb-2 rounded">
                              Cancel
                            </button>
                          </div>
                        </HRForm>
                      )}
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Tab>
            <Tab
              key="changePassword"
              title={
                <h1 className="text-gray-600 font-[600] text-[14px]">
                  Change Password
                </h1>
              }
            >
              <Card>
                <CardBody className="w-[973px]">
                  <ChangePasswordForm />
                </CardBody>
              </Card>
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
