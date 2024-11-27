/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import HRIconsButton from "@/app/(withDashboardLayout)/components/UI/HRIconsButton";
import HRTableRow from "@/app/components/Table/HRTableRow";
import { Button } from "@nextui-org/react";
import { FaEdit, FaTrash } from "react-icons/fa";
import CreateDepartment from "./component/CreateDepartment";
import HRTable from "@/app/components/Table/HRTable";
import { useGetAllDepartmentsQuery } from "@/app/Redux/api/departmentApi";


const DepartmentPage = () => {
   const tableHeader = ["SL", "Department Name", "Status", "Action"];
   const {data} = useGetAllDepartmentsQuery({})
    const departments = data?.data;
  //  const departments = [
  //   { id: 1, name: "Finance", status: "Inactive" },
  //   { id: 2, name: "Staff", status: "Active" },
  //   { id: 3, name: "Internal Audit Control", status: "Active" },
  //   { id: 4, name: "Testing", status: "Active" },
  //   { id: 5, name: "Marketing", status: "Active" },
  //   { id: 6, name: "Software", status: "Active" },
  //   { id: 7, name: "Accounts", status: "Active" },
  //   { id: 8, name: "Production", status: "Active" },
  //   { id: 9, name: "Electrical", status: "Active" },
  // ];
  return (
     <div className="min-h-[89vh]">
      {/* <PageHeader item={pageHeaderData} /> */}

      <div className="bg-white rounded-[3px] mt-4 px-6 py-4">
        <CreateDepartment />
        <HRTable tableHeader={tableHeader}>
          {departments?.map((department:any, i:number) => (
            <tr
              className={`${i % 2 === 0 ? "bg-gray-100" : ""} hover:bg-gray-50`}
              key={department.id}
            >
              <HRTableRow>{i+1}</HRTableRow>
              <HRTableRow>{department?.departmentName}</HRTableRow>
              <HRTableRow>
                <Button
                  size="sm"
                  className="h-6 text-sm text-white bg-primary rounded-[4px]"
                >
                  {department?.status}
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

export default DepartmentPage;
