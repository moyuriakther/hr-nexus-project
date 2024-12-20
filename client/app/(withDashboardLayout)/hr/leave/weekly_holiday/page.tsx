"use client";

import PageHeader from "@/app/(withDashboardLayout)/components/PageHeader/PageHeader";
import { useGetAllWeekDaysQuery } from "@/app/Redux/api/weekDaysHolidayApi";
import HRTable from "@/app/components/Table/HRTable";
import HRTableRow from "@/app/components/Table/HRTableRow";
import { TWeekDay } from "@/app/types";
import { FaEdit } from "react-icons/fa";
import AddHolyday from "./components/AddHolyday";
import { pageHeaderData } from "../components/pageHeaderData";

import { useState } from "react";

import Link from "next/link";
import { getUserFromLocalStorage } from "@/app/utils/localStorage";
import { USER_ROLE } from "@/app/constants";

const WeeklyHolidayPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const user = getUserFromLocalStorage();

  const { data: holidays } = useGetAllWeekDaysQuery({ searchTerm });
  const tableHeader = [
    "Sl",
    "Day Name",
    `${user?.role === USER_ROLE.ADMIN && "Action"}`,
  ];

  return (
    <div className="min-h-[89vh]">
      <PageHeader item={pageHeaderData} />

      <div className="bg-white rounded-[3px] mt-4 px-6 py-4">
        <AddHolyday onSearch={setSearchTerm} />
        <HRTable tableHeader={tableHeader}>
          {holidays?.data?.map((holiday: TWeekDay, i: number) => (
            <tr
              className={`${i % 2 === 0 ? "bg-gray-100" : ""} hover:bg-gray-50`}
              key={holiday.id}
            >
              <HRTableRow>{i + 1}</HRTableRow>
              <HRTableRow>{holiday.dayName.join(", ")}</HRTableRow>

              {user?.role === USER_ROLE.ADMIN && (
                <HRTableRow>
                  <div className="flex items-center gap-2">
                    <Link href={`weekly_holiday/edit/${holiday?.id}`}>
                      <button className="bg-blue-100 text-blue-500 border border-blue-500 rounded-[4px] p-1 w-8 h-8 font-[400] flex justify-center items-center">
                        <FaEdit className="text-base" />
                      </button>
                    </Link>
                  </div>
                </HRTableRow>
              )}
            </tr>
          ))}
        </HRTable>
      </div>
    </div>
  );
};

export default WeeklyHolidayPage;
