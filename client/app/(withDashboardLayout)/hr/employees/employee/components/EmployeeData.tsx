/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import HRIconsButton from "@/app/(withDashboardLayout)/components/UI/HRIconsButton";
import HRTableRow from "@/app/components/Table/HRTableRow";
import Loader from "@/app/components/utils/Loader";
import {
  useDeleteEmployeeMutation,
  useGetAllEmployeeQuery,
} from "@/app/Redux/api/employeeApi";
import { getDayMonthAndYear } from "@/app/utils/getYearAndMonth";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import { TfiReload } from "react-icons/tfi";

const EmployeeData = () => {
  const { data: employees, isLoading } = useGetAllEmployeeQuery({});
  const [deleteEmployee] = useDeleteEmployeeMutation({});

  const handleDelete = async (id: string) => {
    const res = await deleteEmployee({ id });
    console.log(res);
  };

  if (isLoading) {
    return <Loader />;
  }

  if (employees?.length === 0) {
    return (
      <tr>
        <td colSpan={9} className="text-center">
          No Data Found
        </td>
      </tr>
    );
  }

  return (
    <React.Fragment>
      {employees?.map((position: any, i: number) => (
        <tr className={`hover:bg-gray-100`} key={i}>
          <HRTableRow>{i + 1}</HRTableRow>
          {/* <HRTableRow>{position.EmployeeId}</HRTableRow> */}
          <HRTableRow>
            {position.firstName +
              " " +
              position?.middleName +
              " " +
              position?.lastName}
          </HRTableRow>
          <HRTableRow>{position.email}</HRTableRow>
          <HRTableRow>{position.phoneNumber}</HRTableRow>
          <HRTableRow>{getDayMonthAndYear(position.dateOfBirth)}</HRTableRow>
          <HRTableRow>{position.designation}</HRTableRow>
          <HRTableRow>{getDayMonthAndYear(position.joiningDate)}</HRTableRow>
          <HRTableRow>
            <Button
              size="sm"
              className="h-6 text-xs bg-primary bg-opacity-15 text-primary rounded-[4px] font-medium"
            >
              {position.status}
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
                <Link href={`/hr/employees/edit/${position.id}`}>
                  <FaEdit className="text-base" />
                </Link>
              </HRIconsButton>
              <Button
                size="sm"
                isIconOnly
                onClick={() => handleDelete(position.id)}
                className="bg-red-100 border rounded-[4px] border-red-500 text-red-500"
              >
                <FaTrash className="text-base" />
              </Button>
            </div>
          </HRTableRow>
        </tr>
      ))}
    </React.Fragment>
  );
};

export default EmployeeData;
