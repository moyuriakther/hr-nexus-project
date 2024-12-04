import PageHeader from "@/app/(withDashboardLayout)/components/PageHeader/PageHeader";
import HRTable from "@/app/components/Table/HRTable";
import { pageHeaderData } from "../components/pageHeaderData";
import CreateEmployee from "./components/CreateEmployee";
import EmployeeData from "./components/EmployeeData";

const EmployeePage = () => {
  const tableHeader = [
    "Sl",
    // "Employee id",
    "Name of employee",
    "Email",
    "Mobile no",
    "Date of birth",
    "Designation",
    "Joining data",
    "Status",
    "Action",
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
