import AttendanceChart from "@/app/components/dashboard/AttendanceChart";
import LeaveApplicationList from "@/app/components/dashboard/LeaveApplicationList";
import Stats from "@/app/components/dashboard/Stats";
import DynamicNoticeAndAwardList from "@/app/components/DynamicNoticeAndAwardList";
import Awarded from "@/app/components/home/Awarded";
import RecruitmentData from "@/app/components/recruitment/RecruitmentData";

const DashboardPage = () => {
  return (
    <div>
      <div className=" grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Dashboard Stats */}
        <div className="lg:col-span-2 flex justify-center ">
          <Stats />
        </div>
        {/* Attendance Chart */}
        <div className="lg:col-span-6">
          <AttendanceChart />
        </div>

        {/* Leave Application */}
        <div className="lg:col-span-4">
          <LeaveApplicationList />
        </div>
      </div>
      <div className="mt-2.5">
        <RecruitmentData />
      </div>
      <Awarded />
      <RecruitmentData />
      <DynamicNoticeAndAwardList />
    </div>
  );
};

export default DashboardPage;