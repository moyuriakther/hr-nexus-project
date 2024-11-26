"use client";

import PageHeader from "@/app/(withDashboardLayout)/components/PageHeader/PageHeader";
import React, { useState } from "react";
import { pageHeaderData } from "../components/pageHeaderData";
import HRTable from "@/app/components/Table/HRTable";
import HRTableRow from "@/app/components/Table/HRTableRow";
import HRIconsButton from "@/app/(withDashboardLayout)/components/UI/HRIconsButton";
import { FaEdit, FaTrash } from "react-icons/fa";
import { fakeData } from "./components/leaveApprovalFakeData";
import AddLeaveApproval from "./components/AddLeaveApproval";
import { Button } from "@nextui-org/react";
import ApprovedApplicationModal from "./components/ApprovedApplicationModal";

const LeaveApproval = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const tableHeader = [
    "Sl",
    "Employee Name",
    "Type",
    "Apply Date",
    "Leave Start Date",
    "Leave End Date",
    "Days",
    "Approved Date",
    "Approved Start Date",
    "Approved End Date",
    "Approved Days",
    "Hard Copy",
    "Status",
    "Action",
  ];

  return (
    <div>
      <PageHeader item={pageHeaderData} />

      <div className="bg-white rounded-[3px] mt-4 px-6 py-4">
        <AddLeaveApproval />

        <HRTable tableHeader={tableHeader}>
          {fakeData.map((leave, i) => (
            <tr className={`hover:bg-gray-100`} key={i}>
              <HRTableRow>{leave.sl}</HRTableRow>
              <HRTableRow>{leave.employeeName}</HRTableRow>
              <HRTableRow>{leave.type}</HRTableRow>
              <HRTableRow>{leave.applyDate}</HRTableRow>
              <HRTableRow>{leave.leaveStartDate}</HRTableRow>
              <HRTableRow>{leave.leaveEndDate}</HRTableRow>
              <HRTableRow>{leave.days}</HRTableRow>
              <HRTableRow>{leave.approvedDate}</HRTableRow>
              <HRTableRow>{leave.approvedStartDate}</HRTableRow>
              <HRTableRow>{leave.approvedEndDate}</HRTableRow>
              <HRTableRow>{leave.approvedDays}</HRTableRow>
              <HRTableRow>{leave.hardCopy}</HRTableRow>
              <HRTableRow>{leave.status}</HRTableRow>

              <HRTableRow>
                <div className="flex items-center gap-2">
                  <Button
                    onClick={() => setIsOpen(true)}
                    className=" bg-primary text-green-500 border border-green-500 bg-opacity-15"
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
      <ApprovedApplicationModal setIsOpen={setIsOpen} modalIsOpen={isOpen} />
    </div>
  );
};

export default LeaveApproval;
