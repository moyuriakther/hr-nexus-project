import PageHeader from "@/app/(withDashboardLayout)/components/PageHeader/PageHeader";
import HRTable from "@/app/components/Table/HRTable";
import { USER_ROLE } from "@/app/constants";
import { pageHeaderData } from "../components/pageHeaderData";
import CreateEmployee from "./components/CreateEmployee";
import EmployeeData from "./components/EmployeeData";
import { getUserFromLocalStorage } from "@/app/utils/localStorage";

const EmployeePage = () => {
  const user = getUserFromLocalStorage();

  const tableHeader = [
    "Sl",
    "Name of employee",
    "Email",
    "Mobile no",
    "Date of birth",
    "Designation",
    "Joining data",
    "Status",
    `${user?.role === USER_ROLE.ADMIN ? "Action" : ""}`,
  ];

  return (
    <div>
      <PageHeader item={pageHeaderData} />

      <div className="bg-white rounded-[3px] mt-4 px-6 py-4">
        <CreateEmployee />

        <HRTable tableHeader={tableHeader}>
          <EmployeeData />
        </HRTable>
      </div>
    </div>
  );
};

export default EmployeePage;
