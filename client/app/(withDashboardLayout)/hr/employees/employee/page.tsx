import PageHeader from "@/app/(withDashboardLayout)/components/PageHeader/PageHeader";
import { pageHeaderData } from "../components/pageHeaderData";

const EmployeePage = () => {
  return (
    <div>
      <PageHeader item={pageHeaderData} />
    </div>
  );
};

export default EmployeePage;
