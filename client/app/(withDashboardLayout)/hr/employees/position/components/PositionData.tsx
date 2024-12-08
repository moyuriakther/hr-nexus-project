/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useGetAllPositionQuery } from "@/app/Redux/api/positionApi";
import { FaEdit, FaTrash } from "react-icons/fa";
import HRTableRow from "@/app/components/Table/HRTableRow";
import HRIconsButton from "@/app/(withDashboardLayout)/components/UI/HRIconsButton";
import { Button } from "@nextui-org/react";
import Loader from "@/app/components/utils/Loader";
import React from "react";

const PositionData = () => {
  const { data: positions, isLoading } = useGetAllPositionQuery({});

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
    </React.Fragment>
  );
};

export default PositionData;
