import AttendanceChart from "@/app/components/dashboard/AttendanceChart";
import LeaveApplicationList from "@/app/components/dashboard/LeaveApplicationList";
import Stats from "@/app/components/dashboard/Stats";
import Awarded from "@/app/components/home/Awarded";

const DashboardPage = () => {
  return (
    <div>
      <div className=" p-5 bg-gray-200 min-h-screen grid grid-cols-1 lg:grid-cols-10 gap-10">
        {/* Dashboard Stats */}
        <div className="lg:col-span-2 flex justify-center">
          <Stats />
        </div>
        {/* Attendance Chart */}
        <div className="lg:col-span-5">
          <AttendanceChart />
        </div>

        {/* Leave Application */}
        <div className="lg:col-span-3">
          <LeaveApplicationList />
        </div>
      </div>
      <Awarded />
    </div>
  );
};

export default DashboardPage;
