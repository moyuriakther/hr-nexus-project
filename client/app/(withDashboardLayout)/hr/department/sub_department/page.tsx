/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import HRTable from "@/app/components/Table/HRTable";
import HRTableRow from "@/app/components/Table/HRTableRow";
import { Button } from "@nextui-org/react";
import HRIconsButton from "@/app/(withDashboardLayout)/components/UI/HRIconsButton";
import {  FaTrash } from "react-icons/fa";
import CreateSubDepartment from "./component/CreateSubDepartment";
import { useDeleteSubDepartmentMutation, useGetAllSubDepartmentsQuery } from "@/app/Redux/api/subDepartmentApi";
import UpdateSubDepartmentModal from "./component/UpdateSubDepartmentModal";



const SubDepartmentPage = () => {
  const tableHeader = ["SL", "Sub department Name", "Department Name", "Status", "Action"];
  const {data} = useGetAllSubDepartmentsQuery({});
  const [deleteSubDepartment, {isSuccess, isLoading}] = useDeleteSubDepartmentMutation();
  const subDepartmentDelete = (id:any) =>{
    deleteSubDepartment({id:id, body: {isDeleted: true}})
  }
  const subDepartments = data?.data;
    if(isLoading){
      <p>Loading....</p>
    }
    if(isSuccess){
      <p>Delete Sub Department Successfully....</p>
    }
  // const positions = [
  //   { id: 1, name: "HR", dep: "Electrical", status: "Active" },
  //   { id: 2, name: "Accounts", dep: "Electrical", status: "Active" },
  //   { id: 3, name: "Finance", dep: "Production", status: "Active" },
  //   { id: 4, name: "Sales", dep: "Production", status: "Active" },
  //   { id: 5, name: "Angelica Goff", dep: "Electrical", status: "Active" },
  // ];
  return (
    <div className="min-h-[89vh]">
      {/* <PageHeader item={pageHeaderData} /> */}

      <div className="bg-white rounded-[3px] mt-4 px-6 py-4">
        <CreateSubDepartment />
        <HRTable tableHeader={tableHeader}>
          {subDepartments?.map((subDept:any, i:number) => (
            <tr
              className={`${i % 2 === 0 ? "bg-gray-100" : ""} hover:bg-gray-50`}
              key={subDept?.id}
            >
              <HRTableRow>{i+1}</HRTableRow>
              <HRTableRow>{subDept?.subDepartmentName}</HRTableRow>
              <HRTableRow>{subDept?.department?.departmentName}</HRTableRow>
              <HRTableRow>
                <Button
                  size="sm"
                  className="h-6 text-sm text-white bg-primary rounded-[4px]"
                >
                  {subDept?.isActive === true ? 'Active' : "UnActive"}
                </Button>
              </HRTableRow>
              <HRTableRow>
                <div className="flex items-center gap-2">
                  {/* <HRIconsButton className="bg-blue-100 text-blue-500 border border-blue-500">
                    <FaEdit className="text-base" />
                  </HRIconsButton> */}
                  <UpdateSubDepartmentModal subDepartment={subDept} />
                  <HRIconsButton className="bg-red-100 border border-red-500 text-red-500">
                    <FaTrash className="text-base" onClick={() => subDepartmentDelete(subDept?.id)}/>
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

export default SubDepartmentPage;
