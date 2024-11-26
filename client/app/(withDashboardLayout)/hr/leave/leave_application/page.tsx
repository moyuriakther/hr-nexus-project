"use client";

import PageHeader from "@/app/(withDashboardLayout)/components/PageHeader/PageHeader";
import React, { useState } from "react";
import { pageHeaderData } from "../components/pageHeaderData";
import HRTable from "@/app/components/Table/HRTable";
import HRTableRow from "@/app/components/Table/HRTableRow";
import HRIconsButton from "@/app/(withDashboardLayout)/components/UI/HRIconsButton";
import { FaEdit, FaTrash } from "react-icons/fa";
import { fakeData } from "./components/leaveApplicationFakeData";
import CreateLeaveApplication from "./components/CreateLeaveApplication";
import { Button } from "@nextui-org/react";
import ApplicationApprovedModal from "./components/ApplicationApprovedModal";
import UpdateLeaveApplicationModal from "./components/UpdateLeaveApplicationModal";

const LeaveApplicationPage = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const tableHeader = [
    "Sl",
    "Employee Name",
    "Type",
    "Apply Date",
    "Leave Start Date",
    "Leave End Date",
    "Days",
    "Reason",
    "Approved Date",
    "Approved Start Date",
    "Approved End Date",
    "Approved Days",
    "Hard Copy",
    "Manager Comments",
    "Status",
    "Action",
  ];

  return (
    <div>
      <PageHeader item={pageHeaderData} />

      <div className="bg-white rounded-[3px] mt-4 px-6 py-4">
        <CreateLeaveApplication />

        <HRTable tableHeader={tableHeader}>
          {fakeData.map((holyday, i) => (
            <tr className={`hover:bg-gray-100`} key={i}>
              <HRTableRow>{holyday.sl}</HRTableRow>
              <HRTableRow>{holyday.employeeName}</HRTableRow>
              <HRTableRow>{holyday.type}</HRTableRow>
              <HRTableRow>{holyday.applyDate}</HRTableRow>
              <HRTableRow>{holyday.leaveStartDate}</HRTableRow>
              <HRTableRow>{holyday.leaveEndDate}</HRTableRow>
              <HRTableRow>{holyday.days}</HRTableRow>
              <HRTableRow>{holyday.reason}</HRTableRow>
              <HRTableRow>{holyday.approvedDate}</HRTableRow>
              <HRTableRow>{holyday.approvedStartDate}</HRTableRow>
              <HRTableRow>{holyday.approvedEndDate}</HRTableRow>
              <HRTableRow>{holyday.approvedDays}</HRTableRow>
              <HRTableRow>{holyday.hardCopy}</HRTableRow>
              <HRTableRow>{holyday.manageComments}</HRTableRow>
              <HRTableRow>{holyday.status}</HRTableRow>

              <HRTableRow>
                <div className="flex items-center gap-2">
                  <Button
                    onClick={() => setIsOpen(true)}
                    className=" bg-primary text-green-500 border border-green-500 bg-opacity-15"
                  >
                    <FaEdit className="text-base" />
                  </Button>
                  <Button
                    onClick={() => setIsModalOpen(true)}
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
      <ApplicationApprovedModal setIsOpen={setIsOpen} modalIsOpen={isOpen} />
      <UpdateLeaveApplicationModal
        setIsOpen={setIsModalOpen}
        modalIsOpen={isModalOpen}
      />
    </div>
  );
};

export default LeaveApplicationPage;
