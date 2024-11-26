"use client";

import PageHeader from "@/app/(withDashboardLayout)/components/PageHeader/PageHeader";
import React, { useState } from "react";
import { pageHeaderData } from "../components/pageHeaderData";
import HRTable from "@/app/components/Table/HRTable";
import HRTableRow from "@/app/components/Table/HRTableRow";
import HRIconsButton from "@/app/(withDashboardLayout)/components/UI/HRIconsButton";
import { FaEdit, FaTrash } from "react-icons/fa";
import CreateLeaveType from "./components/CreateLeaveType";
import { Button } from "@nextui-org/react";
import UpdateLeaveTypeModal from "./components/UpdateLeaveTypeModal";

const LeaveTypePage = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const tableHeader = ["SL", "Leave Type", "Days", "Action"];
  const leaveTypes = [
    { id: 1, leaveType: "Annual Leave", days: "9" },
    { id: 2, leaveType: "paternal", days: "17" },
    { id: 3, leaveType: "Maternity", days: "13" },
    { id: 4, leaveType: "Non Paid", days: "7" },
    { id: 5, leaveType: "Sick Leave", days: "19" },
  ];

  return (
    <div className="min-h-[89vh]">
      <PageHeader item={pageHeaderData} />

      <div className="bg-white rounded-[3px] mt-4 px-6 py-4">
        <CreateLeaveType />
        <HRTable tableHeader={tableHeader}>
          {leaveTypes.map((leave, i) => (
            <tr
              className={`${i % 2 === 0 ? "bg-gray-100" : ""} hover:bg-gray-50`}
              key={leave.id}
            >
              <HRTableRow>{leave.id}</HRTableRow>
              <HRTableRow>{leave.leaveType}</HRTableRow>
              <HRTableRow>{leave.days}</HRTableRow>

              <HRTableRow>
                <div className="flex items-center gap-2">
                  <Button
                    onClick={() => setIsOpen(true)}
                    className="bg-blue-100 text-blue-500 border border-blue-500"
                  >
                    <FaEdit className="text-base" />
                  </Button>
                  <HRIconsButton className="bg-red-100 border border-red-500 text-red-500">
                    <FaTrash className="text-base" />
                  </HRIconsButton>
                </div>
              </HRTableRow>
            </tr>
          ))}
        </HRTable>
      </div>
      <UpdateLeaveTypeModal setIsOpen={setIsOpen} modalIsOpen={isOpen} />
    </div>
  );
};

export default LeaveTypePage;
