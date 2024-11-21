import AttendanceChart from "@/app/components/dashboard/AttendanceChart";
import LeaveApplicationList from "@/app/components/dashboard/LeaveApplicationList";
import Stats from "@/app/components/dashboard/Stats";
import DynamicNoticeAndAwardList from "@/app/components/DynamicNoticeAndAwardList";
import Awarded from "@/app/components/home/Awarded";

import RecruitmentData from "@/app/components/recruitment/RecruitmentData";

import Recruitment from "@/app/components/Recruitment";


const DashboardPage = () => {
  return (
  <div>
      <div className='h-screen grid bg-gray-200   p-3 grid-cols-1 lg:grid-cols-12
      gap-4'>
        {/* Dashboard Stats */}
      <div className='lg:col-span-3 ' >
      <Stats/>
      </div>
        {/* Attendance Chart */}
        <div className='lg:col-span-5'>
        <AttendanceChart/>
      </div>
        

        {/* Leave Application */}
        <div className='lg:col-span-4'>
        <LeaveApplicationList/>
      </div>
      </div>

      <div>
        <RecruitmentData/>
      </div>

      <Recruitment />

      <Awarded />
      <DynamicNoticeAndAwardList />
  </div>
  );
};

export default DashboardPage;