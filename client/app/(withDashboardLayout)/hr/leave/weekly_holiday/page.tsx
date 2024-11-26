import PageHeader from "@/app/(withDashboardLayout)/components/PageHeader/PageHeader";
import React from "react";
import { pageHeaderData } from "../components/pageHeaderData";
import HRTable from "@/app/components/Table/HRTable";
import HRTableRow from "@/app/components/Table/HRTableRow";
import { Button } from "@nextui-org/react";
import HRIconsButton from "@/app/(withDashboardLayout)/components/UI/HRIconsButton";
import { FaEdit, FaTrash } from "react-icons/fa";
import AddHolyday from "./components/AddHolyday";

const WeeklyHolidayPage = () => {
  const tableHeader = ["Sl", "Day Name", "Action"];
  const holydays = [
    { id: 1, dayName: "Sunday" },
    { id: 2, dayName: "Monday" },
    { id: 3, dayName: "Saturday" },
    { id: 4, dayName: "Wednesday" },
    { id: 5, dayName: "Tuesday" },
  ];
  return (
    <div className="min-h-[89vh]">
      <PageHeader item={pageHeaderData} />

      <div className="bg-white rounded-[3px] mt-4 px-6 py-4">
        <AddHolyday />
        <HRTable tableHeader={tableHeader}>
          {holydays.map((holiday, i) => (
            <tr
              className={`${i % 2 === 0 ? "bg-gray-100" : ""} hover:bg-gray-50`}
              key={holiday.id}
            >
              <HRTableRow>{holiday.id}</HRTableRow>
              <HRTableRow>{holiday.dayName}</HRTableRow>

              <HRTableRow>
                <div className="flex items-center gap-2">
                  <a href={`weekly_holiday/edit/${holiday?.id}`}>
                    <HRIconsButton className="bg-blue-100 text-blue-500 border border-blue-500">
                      <FaEdit className="text-base" />
                    </HRIconsButton>
                  </a>
                </div>
              </HRTableRow>
            </tr>
          ))}
        </HRTable>
      </div>
    </div>
  );
};

export default WeeklyHolidayPage;
