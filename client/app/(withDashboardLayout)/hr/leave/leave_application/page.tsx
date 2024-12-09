"use client";

import PageHeader from "@/app/(withDashboardLayout)/components/PageHeader/PageHeader";
import { pageHeaderData } from "../components/pageHeaderData";
import HRTable from "@/app/components/Table/HRTable";
import HRTableRow from "@/app/components/Table/HRTableRow";
import CreateLeaveApplication from "./components/CreateLeaveApplication";
import { Button } from "@nextui-org/react";

import {
  useDeleteLeaveMutation,
  useGetAllLeaveQuery,
} from "@/app/Redux/api/leaveApi";
import { toast } from "sonner";
import { tableHeader } from "./components/tableHeader";
import { TLeave } from "@/app/types";
import { getDayMonthAndYear } from "@/app/utils/getYearAndMonth";
import { FaTrash } from "react-icons/fa";
import { useState } from "react";
import Loader from "@/app/components/utils/Loader";
import { getUserFromLocalStorage } from "@/app/utils/localStorage";
import { USER_ROLE } from "@/app/constants";

const LeaveApplicationPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const { data: holidays, isLoading } = useGetAllLeaveQuery({ searchTerm });
  const [deleteHoliday] = useDeleteLeaveMutation();
  const user = getUserFromLocalStorage();

  const handleDelete = async (id: string) => {
    const res = await deleteHoliday(id).unwrap();

    if (res?.id) {
      toast.success("Leave delete successful!");
    }
  };

  return (
    <div>
      <PageHeader item={pageHeaderData} />

      <div className="bg-white rounded-[3px] mt-4 px-6 py-4">
        <CreateLeaveApplication
          data={holidays?.data ?? []}
          loading={isLoading}
          onSearch={setSearchTerm}
        />

        <HRTable tableHeader={tableHeader}>
          {isLoading ? (
            <div className="flex items-center justify-center w-16 h-16">
              <Loader />
            </div>
          ) : (
            holidays?.data.map((holyday: TLeave, i: number) => (
              <tr className={`hover:bg-gray-100`} key={i}>
                <HRTableRow>{i + 1}</HRTableRow>
                <HRTableRow>
                  {holyday?.employee?.firstName} {holyday?.employee?.lastName}
                </HRTableRow>
                <HRTableRow>{holyday?.leaveType}</HRTableRow>
                <HRTableRow>
                  {getDayMonthAndYear(holyday?.applyDate)}
                </HRTableRow>
                <HRTableRow>
                  {getDayMonthAndYear(holyday?.startDate)}
                </HRTableRow>
                <HRTableRow>{getDayMonthAndYear(holyday?.endDate)}</HRTableRow>
                <HRTableRow>{holyday?.days}</HRTableRow>
                <HRTableRow>{holyday?.reason}</HRTableRow>
                <HRTableRow>
                  {getDayMonthAndYear(holyday?.approvedDate)}
                </HRTableRow>
                <HRTableRow>
                  {getDayMonthAndYear(holyday?.approvedStartDate)}
                </HRTableRow>
                <HRTableRow>
                  {getDayMonthAndYear(holyday?.approvedEndDate)}
                </HRTableRow>
                <HRTableRow>{holyday?.approvedDays}</HRTableRow>
                <HRTableRow>{holyday?.managerComment}</HRTableRow>
                <HRTableRow>
                  <Button
                    size="sm"
                    className={`${
                      holyday?.status === "APPROVED"
                        ? "text-green-500 bg-green-200 h-6 text-sm rounded-[4px]"
                        : holyday?.status === "REJECTED"
                        ? "text-[#dc3545] bg-red-100 h-6 text-sm rounded-[4px]"
                        : holyday?.status === "PENDING"
                        ? "bg-blue-100 text-blue-500 h-6 text-sm rounded-[4px]"
                        : ""
                    }`}
                  >
                    {holyday?.status}
                  </Button>
                </HRTableRow>

                {user?.role === USER_ROLE.ADMIN && (
                  <HRTableRow>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleDelete(holyday?.id)}
                        className="bg-red-100 border border-red-500 text-red-500  rounded-[4px] p-1 w-8 h-8 font-[400] flex justify-center items-center"
                      >
                        <FaTrash className="text-base" />
                      </button>
                    </div>
                  </HRTableRow>
                )}
              </tr>
            ))
          )}
        </HRTable>
      </div>
    </div>
  );
};

export default LeaveApplicationPage;
