import AttendanceChart from "@/app/components/dashboard/AttendanceChart";
import LeaveApplicationList from "@/app/components/dashboard/LeaveApplicationList";
import Stats from "@/app/components/dashboard/Stats";
import DynamicNoticeAndAwardList from "@/app/components/DynamicNoticeAndAwardList";
import Awarded from "@/app/components/home/Awarded";
import Recruitment from "@/app/components/Recruitment";

const DashboardPage = () => {
  return (
  <div>
      <div className=' p-5 bg-gray-200 min-h-screen grid grid-cols-1 lg:grid-cols-10 gap-10'>
        {/* Dashboard Stats */}
      <div className='lg:col-span-2 flex justify-center' >
      <Stats/>
      </div>
        {/* Attendance Chart */}
        <div className='lg:col-span-5'>
        <AttendanceChart/>
      </div>
        

        {/* Leave Application */}
        <div className='lg:col-span-3'>
        <LeaveApplicationList/>
      </div>
      </div>
      <Recruitment />
      <Awarded />
      <DynamicNoticeAndAwardList />
  </div>
  );
};

export default DashboardPage;
