import PageHeader from "@/app/(withDashboardLayout)/components/PageHeader/PageHeader";
import { pageHeaderData } from "../components/pageHeaderData";
import CreateEmployee from "../employee/components/CreateEmployee";
import HRTable from "@/app/components/Table/HRTable";
import HRTableRow from "@/app/components/Table/HRTableRow";
import { Button } from "@nextui-org/react";
import HRIconsButton from "@/app/(withDashboardLayout)/components/UI/HRIconsButton";
import { fakeData } from "../employee/components/employeFakeData";
import { TfiReload } from "react-icons/tfi";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";

const InactiveEmployeesList = () => {
  const tableHeader = [
    "Sl",
    "Employee id",
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
          {fakeData.map((position, i) => (
            <tr className={`hover:bg-gray-100`} key={i}>
              <HRTableRow>{position.Sl}</HRTableRow>
              <HRTableRow>{position.EmployeeId}</HRTableRow>
              <HRTableRow>{position.NameOfEmployee}</HRTableRow>
              <HRTableRow>{position.Email}</HRTableRow>
              <HRTableRow>{position.Mobileno}</HRTableRow>
              <HRTableRow>{position.Dateofbirth}</HRTableRow>
              <HRTableRow>{position.Designation}</HRTableRow>
              <HRTableRow>{position.Joiningdate}</HRTableRow>
              <HRTableRow>
                <Button
                  size="sm"
                  className="h-6 text-xs bg-primary bg-opacity-15 text-primary rounded-[4px] font-medium"
                >
                  {position.Status}
                </Button>
              </HRTableRow>
              <HRTableRow>
                <div className="flex items-center gap-2">
                  <HRIconsButton className=" bg-red-100 border border-red-500 text-red-500">
                    <TfiReload className="text-base" />
                  </HRIconsButton>
                  <HRIconsButton className="bg-blue-100 text-blue-500 border border-blue-500">
                    <FaEye className="text-base" />
                  </HRIconsButton>
                  <HRIconsButton className=" bg-primary text-green-500 border border-green-500 bg-opacity-15">
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

export default InactiveEmployeesList;
