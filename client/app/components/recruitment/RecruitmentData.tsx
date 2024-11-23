import React from "react";
import dynamic from "next/dynamic";

const BarCharts = dynamic(() => import("../Charts/BarCharts"), { ssr: false });

import Recruitment from "../Recruitment";

const RecruitmentData = () => {
  return (
    <div className="grid grid-cols-1 md:lg:grid-cols-12 gap-6 py-3 ">
      <div className="lg:col-span-7 xl:col-span-8 h-[415px] bg-[#fff] rounded-2xl">
        <BarCharts />
      </div>
      <div className="bg-[#fff] rounded-2xl h-[415px] lg:col-span-5 xl:col-span-4">
        <Recruitment />
      </div>
    </div>
  );
};

export default RecruitmentData;
