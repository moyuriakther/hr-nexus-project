import PageHeader from "@/app/(withDashboardLayout)/components/PageHeader/PageHeader";
import HRTable from "@/app/components/Table/HRTable";
import { Button } from "@nextui-org/react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { pageHeaderData } from "../components/pageHeaderData";
import HRTableRow from "@/app/components/Table/HRTableRow";
import HRIconsButton from "@/app/(withDashboardLayout)/components/UI/HRIconsButton";
import CreatePosition from "./components/CreatePosition";

const PositionPage = () => {
  const tableHeader = ["SL", "Position Name", "Status", "Action"];
  const positions = [
    { id: 1, name: "tes", status: "Active" },
    { id: 2, name: "data analysis", status: "Active" },
    { id: 3, name: "management", status: "Active" },
    { id: 4, name: "Account Executive", status: "Active" },
    { id: 5, name: "Medical Assistant", status: "Active" },
  ];

  return (
    <div className="min-h-[89vh]">
      <PageHeader item={pageHeaderData} />

      <div className="bg-white rounded-[3px] mt-4 px-6 py-4">
        <CreatePosition />
        <HRTable tableHeader={tableHeader}>
          {positions.map((position, i) => (
            <tr
              className={`${i % 2 === 0 ? "bg-gray-100" : ""} hover:bg-gray-50`}
              key={position.id}
            >
              <HRTableRow>{position.id}</HRTableRow>
              <HRTableRow>{position.name}</HRTableRow>
              <HRTableRow>
                <Button
                  size="sm"
                  className="h-6 text-sm text-white bg-primary rounded-[4px]"
                >
                  {position.status}
                </Button>
              </HRTableRow>
              <HRTableRow>
                <div className="flex items-center gap-2">
                  <HRIconsButton className="bg-blue-100 text-blue-500 border border-blue-500">
                    <FaEdit className="text-base" />
                  </HRIconsButton>
                  <HRIconsButton className="bg-red-100 border border-red-500 text-red-500">
                    <FaTrash className="text-base" />
                  </HRIconsButton>
                </div>
              </HRTableRow>
            </tr>
          ))}
        </HRTable>
      </div>
    </div>
  );
};

export default PositionPage;
