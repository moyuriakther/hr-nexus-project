"use client";

import PageHeader from "@/app/(withDashboardLayout)/components/PageHeader/PageHeader";
import {
  useDeleteLeaveMutation,
  useGetAllLeaveQuery,
} from "@/app/Redux/api/leaveApi";
import HRTable from "@/app/components/Table/HRTable";
import HRTableRow from "@/app/components/Table/HRTableRow";
import { TLeave } from "@/app/types";
import { getDayMonthAndYear } from "@/app/utils/getYearAndMonth";
import { Button } from "@nextui-org/react";
import { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { toast } from "sonner";
import { pageHeaderData } from "../components/pageHeaderData";
import AddLeaveApproval from "./components/AddLeaveApproval";
import ApprovedApplicationModal from "./components/ApprovedApplicationModal";
import { tableHeader } from "./components/tableHeader";

const LeaveApproval = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { data: leaveTypes, isLoading } = useGetAllLeaveQuery("");
  const [deleteLeaveType] = useDeleteLeaveMutation();

  const handleDelete = async (id: string) => {
    const res = await deleteLeaveType(id).unwrap();

    if (res?.id) {
      toast.success("Leave delete successful!");
    }
  };

  return (
    <div>
      <PageHeader item={pageHeaderData} />

      <div className="bg-white rounded-[3px] mt-4 px-6 py-4">
        <AddLeaveApproval />

        <HRTable tableHeader={tableHeader}>
          {isLoading
            ? "Loading....."
            : leaveTypes?.data.map((leave: TLeave, i: number) => (
                <tr className={`hover:bg-gray-100`} key={i}>
                  <HRTableRow>{i + 1}</HRTableRow>
                  <HRTableRow>
                    {leave?.employee?.firstName} {leave?.employee?.lastName}
                  </HRTableRow>
                  <HRTableRow>{leave?.leaveType}</HRTableRow>
                  <HRTableRow>
                    {getDayMonthAndYear(leave?.applyDate)}
                  </HRTableRow>
                  <HRTableRow>
                    {getDayMonthAndYear(leave?.startDate)}
                  </HRTableRow>
                  <HRTableRow>{getDayMonthAndYear(leave?.endDate)}</HRTableRow>
                  <HRTableRow>{leave?.days}</HRTableRow>
                  <HRTableRow>
                    {getDayMonthAndYear(leave?.approvedDate)}
                  </HRTableRow>
                  <HRTableRow>
                    {getDayMonthAndYear(leave?.approvedStartDate)}
                  </HRTableRow>
                  <HRTableRow>
                    {getDayMonthAndYear(leave?.approvedEndDate)}
                  </HRTableRow>
                  <HRTableRow>{leave?.approvedDays}</HRTableRow>
                  <HRTableRow>
                    <Button
                      size="sm"
                      className={`${
                        leave?.status === "APPROVED"
                          ? "text-green-500 bg-green-200 h-6 text-sm rounded-[4px]"
                          : leave?.status === "REJECTED"
                          ? "text-[#dc3545] bg-red-100 h-6 text-sm rounded-[4px]"
                          : leave?.status === "PENDING"
                          ? "bg-blue-100 text-blue-500 h-6 text-sm rounded-[4px]"
                          : ""
                      }`}
                    >
                      {leave?.status}
                    </Button>
                  </HRTableRow>

                  <HRTableRow>
                    <div className="items-center gap-2">
                      <button
                        onClick={() => setIsOpen(true)}
                        className=" bg-green-100 text-green-500 border border-green-500  rounded-[4px] p-1 w-8 h-8 font-[400] flex justify-center items-center"
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
                  <ApprovedApplicationModal
                    leave={leave}
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

export default LeaveApproval;
