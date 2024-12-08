"use client";

import PageHeader from "@/app/(withDashboardLayout)/components/PageHeader/PageHeader";
import React, { useState } from "react";
import { pageHeaderData } from "../components/pageHeaderData";
import HRTable from "@/app/components/Table/HRTable";
import HRTableRow from "@/app/components/Table/HRTableRow";

import { FaEdit, FaTrash } from "react-icons/fa";
import CreateLeaveType from "./components/CreateLeaveType";

import UpdateLeaveTypeModal from "./components/UpdateLeaveTypeModal";
import {
  useDeleteLeaveMutation,
  useGetAllLeaveQuery,
} from "@/app/Redux/api/leaveApi";
import { TLeave } from "@/app/types";
import { toast } from "sonner";

const tableHeader = ["SL", "Leave Type", "Days", "Action"];

const LeaveTypePage = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState("");

  const { data: leaveTypes } = useGetAllLeaveQuery({ searchTerm });
  const [deleteLeaveType] = useDeleteLeaveMutation();

  const handleDelete = async (id: string) => {
    const res = await deleteLeaveType(id).unwrap();

    if (res?.id) {
      toast.success("Leave type delete successful!");
    }
  };

  return (
    <div className="min-h-[89vh]">
      <PageHeader item={pageHeaderData} />

      <div className="bg-white rounded-[3px] mt-4 px-6 py-4">
        <CreateLeaveType onSearch={setSearchTerm} />
        <HRTable tableHeader={tableHeader}>
          {leaveTypes?.data.map((leave: TLeave, i: number) => (
            <tr
              className={`${i % 2 === 0 ? "bg-gray-100" : ""} hover:bg-gray-50`}
              key={leave.id}
            >
              <HRTableRow>{i + 1}</HRTableRow>
              <HRTableRow>{leave.leaveType}</HRTableRow>
              <HRTableRow>{leave.days}</HRTableRow>

              <HRTableRow>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsOpen(true)}
                    className="bg-blue-100 text-blue-500 border border-blue-500  rounded-[4px] p-1 w-8 h-8 font-[400] flex justify-center items-center"
                  >
                    <FaEdit className="text-base" />
                  </button>
                  <button
                    onClick={() => handleDelete(leave?.id)}
                    className="bg-red-100 border border-red-500 text-red-500  rounded-[4px] p-1 w-8 h-8 font-[400] flex justify-center items-center"
                  >
                    <FaTrash className="text-base" />
                  </button>
                </div>
              </HRTableRow>
              <UpdateLeaveTypeModal
                leaveType={leave}
                setIsOpen={setIsOpen}
                modalIsOpen={isOpen}
              />
            </tr>
          ))}
        </HRTable>
      </div>
    </div>
  );
};

export default LeaveTypePage;
