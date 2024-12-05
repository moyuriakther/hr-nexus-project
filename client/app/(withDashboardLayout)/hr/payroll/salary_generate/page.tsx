"use client";

import PageHeader from "@/app/(withDashboardLayout)/components/PageHeader/PageHeader";
// import HRForm from "@/app/components/Form/HRForm";
// import HRInput from "@/app/components/Form/HRInput";
// import { Button, Divider } from "@nextui-org/react";
// import { FieldValues } from "react-hook-form";
import { pageHeaderData } from "../components/pageHeaderData";
import SalaryList from "./components/SalaryList";

const SalaryGeneratePage = () => {
  // const handleSubmit = (values: FieldValues) => {
  //   console.log(values);
  // };

  return (
    <div className="min-h-[89vh]">
      <PageHeader item={pageHeaderData} />
      <div className="mt-4">
        {/* <div className="bg-white lg:col-span-4 py-4 rounded-[3px] shadow-lg lg:w-fit w-[95%] h-72">
          <h2 className="text-2xl px-6 text-black font-semibold mt-3 pb-3 mb-4">
            Select salary month
          </h2>
          <Divider className="mb-4" />
          <div className="text-black ">
            <HRForm onSubmit={handleSubmit}>
              <div className="px-6 w-96">
                <HRInput
                  name="salaryMonth"
                  type="date"
                  placeholder="Salary month"
                  label="Salary month"
                  required
                />
              </div>

              <Divider className="mt-4" />
              <div className="px-6 flex justify-end">
                <Button
                  size="sm"
                  type="submit"
                  className="bg-primary text-white  rounded-[3px] text-base mt-4"
                >
                  Generate
                </Button>
              </div>
            </HRForm>
          </div>
        </div> */}
        <div className="">
          <SalaryList />
        </div>
      </div>
    </div>
  );
};

export default SalaryGeneratePage;
