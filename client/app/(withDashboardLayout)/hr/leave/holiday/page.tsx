"use client";

import PageHeader from "@/app/(withDashboardLayout)/components/PageHeader/PageHeader";
import HRIconsButton from "@/app/(withDashboardLayout)/components/UI/HRIconsButton";
import HRTable from "@/app/components/Table/HRTable";
import HRTableRow from "@/app/components/Table/HRTableRow";
import { Button } from "@nextui-org/react";
import { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { pageHeaderData } from "../components/pageHeaderData";
import CreateHolyday from "./components/CreateHolyday";
import UpdateHolidayModal from "./components/UpdateHolidayModal";
import { fakeData } from "./components/holydayFakeData";

const HolydayPage = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const tableHeader = [
    "Sl",
    "Holyday Name",
    "From Date",
    "To Date",
    "Total Days",
    "Action",
  ];

  return (
    <div>
      <PageHeader item={pageHeaderData} />
      <div className="bg-white rounded-[3px] mt-4 px-6 py-4">
        <CreateHolyday />

        <HRTable tableHeader={tableHeader}>
          {fakeData.map((holyday, i) => (
            <tr className={`hover:bg-gray-100`} key={i}>
              <HRTableRow>{holyday.sl}</HRTableRow>
              <HRTableRow>{holyday.holidayName}</HRTableRow>
              <HRTableRow>{holyday.fromDate}</HRTableRow>
              <HRTableRow>{holyday.toDate}</HRTableRow>
              <HRTableRow>{holyday.totalDays}</HRTableRow>

              <HRTableRow>
                <div className="flex items-center gap-2">
                  <Button
                    onClick={() => setIsOpen(true)}
                    className=" bg-primary text-green-500 w-2 border border-green-500 bg-opacity-15"
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
      <UpdateHolidayModal setIsOpen={setIsOpen} modalIsOpen={isOpen} />
    </div>
  );
};

export default HolydayPage;
