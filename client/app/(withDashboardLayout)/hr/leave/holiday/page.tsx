"use client";

import PageHeader from "@/app/(withDashboardLayout)/components/PageHeader/PageHeader";
import {
  useDeleteHolidayMutation,
  useGetAllHolidayQuery,
} from "@/app/Redux/api/holidayApi";
import HRTable from "@/app/components/Table/HRTable";
import HRTableRow from "@/app/components/Table/HRTableRow";
import { THoliday } from "@/app/types";
import { getDayMonthAndYear } from "@/app/utils/getYearAndMonth";
import { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { pageHeaderData } from "../components/pageHeaderData";
import CreateHolyday from "./components/CreateHolyday";
import UpdateHolidayModal from "./components/UpdateHolidayModal";
import { toast } from "sonner";
import { getUserFromLocalStorage } from "@/app/utils/localStorage";
import { USER_ROLE } from "@/app/constants";
import Loader from "@/app/components/utils/Loader";

const HolydayPage = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState("");

  const { data: holidays, isLoading: isLoadingHolidays } =
    useGetAllHolidayQuery({ searchTerm });
  const [deleteHoliday, { isLoading }] = useDeleteHolidayMutation();
  const user = getUserFromLocalStorage();

  const tableHeader = [
    "Sl",
    "Holyday Name",
    "From Date",
    "To Date",
    "Total Days",
    `${user?.role === USER_ROLE.ADMIN ? "Action" : ""}`,
  ];

  const handleDelete = async (id: string) => {
    const res = await deleteHoliday(id).unwrap();

    if (res?.id) {
      toast.success("Holiday delete successful!");
    }
  };

  return (
    <div>
      <PageHeader item={pageHeaderData} />
      <div className="bg-white rounded-[3px] mt-4 px-6 py-4">
        <CreateHolyday onSearch={setSearchTerm} />

        <HRTable tableHeader={tableHeader}>
          {isLoadingHolidays ? (
            <div className="flex justify-center items-center w-16 h-16">
              <Loader />
            </div>
          ) : (
            holidays?.data.map((holiday: THoliday, i: number) => (
              <tr className={`hover:bg-gray-100`} key={i}>
                <HRTableRow>{i + 1}</HRTableRow>
                <HRTableRow>{holiday.holidayName}</HRTableRow>
                <HRTableRow>{getDayMonthAndYear(holiday.fromDate)}</HRTableRow>
                <HRTableRow>{getDayMonthAndYear(holiday.toDate)}</HRTableRow>
                <HRTableRow>{holiday.totalDays}</HRTableRow>

                {user?.role === USER_ROLE.ADMIN && (
                  <HRTableRow>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setIsOpen(true)}
                        className=" bg-blue-100 text-blue-500 border border-blue-500 rounded-[4px] p-1 w-8 h-8 font-[400] flex justify-center items-center"
                      >
                        <FaEdit className="text-base" />
                      </button>
                      <button
                        disabled={isLoading}
                        onClick={() => handleDelete(holiday?.id)}
                        className="bg-red-100 border border-red-500 text-red-500 rounded-[4px] p-1 w-8 h-8 font-[400] flex justify-center items-center"
                      >
                        <FaTrash className="text-base" />
                      </button>
                    </div>
                  </HRTableRow>
                )}
                <UpdateHolidayModal
                  holiday={holiday}
                  setIsOpen={setIsOpen}
                  modalIsOpen={isOpen}
                />
              </tr>
            ))
          )}
        </HRTable>
      </div>
    </div>
  );
};

export default HolydayPage;
