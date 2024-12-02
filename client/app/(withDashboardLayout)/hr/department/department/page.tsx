/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import HRIconsButton from "@/app/(withDashboardLayout)/components/UI/HRIconsButton";
import HRTableRow from "@/app/components/Table/HRTableRow";
import { Button } from "@nextui-org/react";
import { FaTrash } from "react-icons/fa";
import CreateDepartment from "./component/CreateDepartment";
import HRTable from "@/app/components/Table/HRTable";
import { useDeleteDepartmentMutation, useGetAllDepartmentsQuery } from "@/app/Redux/api/departmentApi";
import EditDepartmentModal from "./component/EditDepartmentModal";
import Pagination from "./component/Pagination";
import { useState } from "react";
import { useAppSelector } from "@/app/Redux/hook";


const DepartmentPage = () => {
  const filters = useAppSelector((state) => state.filters);
  const { search } = filters;
    const searchDept = (dept:any) => {
    if (search) {
      return dept?.departmentName
        .trim()
        .toLowerCase()
        .includes(search.trim().toLowerCase());
    } else {
      return true;
    }
  };
  const tableHeader = ["SL", "Department Name", "Status", "Action"];
  const {data, isLoading} = useGetAllDepartmentsQuery({})
  
  const departments = data?.data;
  const [deleteDepartment, {isSuccess}] = useDeleteDepartmentMutation()
  const departmentDelete = (id:any) =>{
    deleteDepartment({id:id, body: {isDeleted: true}})
  }
  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Calculate pagination details
  const totalPages = Math.ceil(departments?.length / itemsPerPage);

  // Handlers
  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

// console.log(departments)
    if(isLoading){
      <p>Loading....</p>
    }
    if(isSuccess){
      <p>Success....</p>
    }
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
        <CreateDepartment/>
        <HRTable tableHeader={tableHeader}>
          {departments?.filter(searchDept)?.map((department:any, i:number) => (
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
                  {department?.isActive === true ? 'Active' : "UnActive"}
                </Button>
              </HRTableRow>
              <HRTableRow>
                <div className="flex items-center gap-2">
                  <EditDepartmentModal departmentId={department?.id} />
                  <HRIconsButton className="bg-red-100 border border-red-500 text-red-500">
                    <FaTrash className="text-base" onClick={() => departmentDelete(department?.id)}/>
                  </HRIconsButton>
                </div>
              </HRTableRow>
            </tr>
          ))}
        </HRTable>
        <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
      </div>
    </div>
  );
};

export default DepartmentPage;
