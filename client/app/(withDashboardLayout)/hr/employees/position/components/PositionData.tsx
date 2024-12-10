/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import HRIconsButton from "@/app/(withDashboardLayout)/components/UI/HRIconsButton";
import HRTableRow from "@/app/components/Table/HRTableRow";
import Loader from "@/app/components/utils/Loader";
import { USER_ROLE } from "@/app/constants";
import { useGetAllPositionQuery } from "@/app/Redux/api/positionApi";
import { getUserFromLocalStorage } from "@/app/utils/localStorage";
import { Button } from "@nextui-org/react";
import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const PositionData = () => {
  const { data: positions, isLoading } = useGetAllPositionQuery({});
  const user = getUserFromLocalStorage();

  if (isLoading) {
    return <Loader />;
  }

  if (positions?.length === 0) {
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
      {positions.map((position: any, i: number) => (
        <tr
          className={`${i % 2 === 0 ? "bg-gray-100" : ""} hover:bg-gray-50`}
          key={position.id}
        >
          <HRTableRow>{i + 1}</HRTableRow>
          <HRTableRow>{position.positionName}</HRTableRow>
          <HRTableRow>
            <Button
              size="sm"
              className="h-6 text-sm text-white bg-primary rounded-[4px]"
            >
              {position.status}
            </Button>
          </HRTableRow>
          {user?.role === USER_ROLE.ADMIN && (
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
          )}
        </tr>
      ))}
    </React.Fragment>
  );
};

export default PositionData;
