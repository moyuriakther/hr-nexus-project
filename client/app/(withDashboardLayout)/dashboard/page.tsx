import AttendanceChart from "@/app/components/dashboard/AttendanceChart";
import LeaveApplicationList from "@/app/components/dashboard/LeaveApplicationList";
import Stats from "@/app/components/dashboard/Stats";
import Awarded from "@/app/components/home/Awarded";

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
      <Awarded />
  </div>
  );
};

export default DashboardPage;
