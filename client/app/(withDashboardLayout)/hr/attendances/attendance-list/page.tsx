"use client";

import PageHeader from "@/app/(withDashboardLayout)/components/PageHeader/PageHeader";
import {
  useDeleteAttendanceMutation,
  useGetAllAttendanceQuery,
} from "@/app/Redux/api/attendanceApi";
import HRTable from "@/app/components/Table/HRTable";
import HRTableRow from "@/app/components/Table/HRTableRow";
import { TAttendance } from "@/app/types";
import {
  getDayMonthAndYear,
  getTimeFromDate,
} from "@/app/utils/getYearAndMonth";
import { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { toast } from "sonner";
import { attendancePageHeaderData } from "../../employees/components/pageHeaderData";
import ComponentHeader from "./components/ComponentHeader";

const AttendancePage = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { data: attendances } = useGetAllAttendanceQuery("");
  // const [deleteAttendance, { isLoading }] = useDeleteAttendanceMutation();

  const tableHeader = [
    "Sl",
    "Employee Name",
    "Day",
    "Month",
    "Check in",
    "Check out",
  ];

  // const handleDelete = async (id: string) => {
  //   const res = await deleteAttendance(id).unwrap();
  //   if (res?.id) {
  //     toast.success("Attendance delete successful!");
  //   }
  // };

  return (
    <div>
      <PageHeader item={attendancePageHeaderData} />
      <div className="bg-white rounded-[3px] mt-4 px-6 py-4">
        <ComponentHeader />

        <HRTable tableHeader={tableHeader}>
          {attendances?.data.map((attendance: TAttendance, i: number) => (
            <tr className={`hover:bg-gray-100`} key={i}>
              <HRTableRow>{i + 1}</HRTableRow>
              <HRTableRow>
                {attendance?.employee?.firstName}{" "}
                {attendance?.employee?.lastName}
              </HRTableRow>
              <HRTableRow>{getDayMonthAndYear(attendance.date)}</HRTableRow>
              <HRTableRow>{attendance.monthName}</HRTableRow>
              <HRTableRow>{getTimeFromDate(attendance.checkIn)}</HRTableRow>
              <HRTableRow>{getTimeFromDate(attendance.checkOut)}</HRTableRow>

              {/* <HRTableRow>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsOpen(true)}
                    className=" bg-blue-100 text-blue-500 border border-blue-500 rounded-[4px] p-1 w-8 h-8 font-[400] flex justify-center items-center"
                  >
                    <FaEdit className="text-base" />
                  </button>
                  <button
                    disabled={isLoading}
                    onClick={() => handleDelete(attendance?.id)}
                    className="bg-red-100 border border-red-500 text-red-500 rounded-[4px] p-1 w-8 h-8 font-[400] flex justify-center items-center"
                  >
                    <FaTrash className="text-base" />
                  </button>
                </div>
              </HRTableRow> */}
              {/* <UpdateHolidayModal
                attendance={attendance}
                setIsOpen={setIsOpen}
                modalIsOpen={isOpen}
              /> */}
            </tr>
          ))}
        </HRTable>
      </div>
    </div>
  );
};

export default AttendancePage;
