import React from 'react'
import BarCharts from '../Charts/BarCharts'
import Recruitment from '../Recruitment'

const RecruitmentData = () => {
  return (
<div className="grid grid-cols-12 gap-4 p-3 bg-gray-100">
        <div className="lg:col-span-7 xl:col-span-8 h-[415px] bg-[#fff] rounded-2xl">
          <BarCharts />
        </div>
        <div className="bg-[#fff] rounded-2xl h-[415px] lg:col-span-5 xl:col-span-4">
          <Recruitment />
        </div>
      </div>
  )
}

export default RecruitmentData