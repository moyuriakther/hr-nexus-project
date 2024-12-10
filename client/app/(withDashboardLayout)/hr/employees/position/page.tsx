import PageHeader from "@/app/(withDashboardLayout)/components/PageHeader/PageHeader";
import HRTable from "@/app/components/Table/HRTable";
import { USER_ROLE } from "@/app/constants";
import {
  getUserFromLocalStorage
} from "@/app/utils/localStorage";
import { pageHeaderData } from "../components/pageHeaderData";
import CreatePosition from "./components/CreatePosition";
import PositionData from "./components/PositionData";

const PositionPage = () => {
  const user = getUserFromLocalStorage();

  const tableHeader = [
    "SL",
    "Position Name",
    "Status",
    `${user?.role === USER_ROLE.ADMIN ? "Action" : ""}`,
  ];

  return (
    <div className="">
      <PageHeader item={pageHeaderData} />

      <div className="bg-white rounded-[3px] mt-4 px-6 py-4">
        <CreatePosition />
        <HRTable tableHeader={tableHeader}>
          <PositionData />
        </HRTable>
      </div>
    </div>
  );
};

export default PositionPage;
