import HRForm from "@/app/components/Form/HRForm";
import HRInput from "@/app/components/Form/HRInput";
import { Card, CardBody, Tab, Tabs } from "@nextui-org/react";
import { FiEdit } from "react-icons/fi";
import ChangePasswordForm from "./ChangePasswordForm";

const ProfileTab = () => {
  const handleSubmit = () => {};
  return (
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
                  <a href="/dashboard/admin/edit">
                    <button className=" flex items-center gap-2 bg-black text-white px-[15px] py-[8px] rounded-[15px]">
                      <FiEdit /> Edit
                    </button>
                  </a>
                </div>
                <div className="pr-12 pl-12 mt-6 pb-32">
                  <div className="flex items-center gap-96">
                    <div>
                      <h1 className="font-[600] text-[16px]  text-black ">
                        Name
                      </h1>
                      <h1 className="font-[700] text-[20px]  text-black ">
                        Rakib Hosen
                      </h1>
                    </div>
                    <div>
                      <h1 className="font-[600] text-[16px]  text-black ">
                        Email
                      </h1>
                      <h1 className="font-[700] text-[20px]  text-black ">
                        admin@gmail.com
                      </h1>
                    </div>
                  </div>
                  <div className="flex  gap-96 mt-12">
                    <div>
                      <h1 className="font-[600] text-[16px]  text-black ">
                        Phone
                      </h1>
                      <h1 className="font-[700] text-[20px]  text-black ">
                        0123456789
                      </h1>
                    </div>
                    <div>
                      <h1 className="font-[600] text-[16px]  text-black ">
                        Signature
                      </h1>
                      <div className="mt-2">
                        <img src="" alt="" className="w-[111px] h-[132px]" />
                      </div>
                    </div>
                  </div>
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
  );
};

export default ProfileTab;