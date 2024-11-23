"use client";

import PageHeader from "@/app/(withDashboardLayout)/components/PageHeader/PageHeader";
import { pageHeaderData } from "../components/pageHeaderData";
import HRTable from "@/app/components/Table/HRTable";
import { Button } from "@nextui-org/react";
import { FaEdit, FaTrash } from "react-icons/fa";
import HRModal from "@/app/components/Modal/HRModal";
import { useState } from "react";

const PositionPage = () => {
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const tableHeader = ["SL", "Position Name", "Status", "Action"];
  const positions = [
    { id: 1, name: "tes", status: "Active" },
    { id: 2, name: "data analysis", status: "Active" },
    { id: 3, name: "management", status: "Active" },
    { id: 4, name: "Account Executive", status: "Active" },
    { id: 5, name: "Medical Assistant", status: "Active" },
  ];

  return (
    <div className="min-h-[89vh]">
      <PageHeader item={pageHeaderData} />

      <div className="bg-white rounded-[3px] mt-4 px-6 py-4">
        <HRTable tableHeader={tableHeader}>
          {positions.map((position, i) => (
            <tr
              className={`${i % 2 === 0 ? "bg-gray-100" : ""} hover:bg-gray-50`}
              key={position.id}
            >
              <td className="px-4 py-2 border border-gray-200">
                {position.id}
              </td>
              <td className="px-4 py-2 border border-gray-200">
                {position.name}
              </td>
              <td className="px-4 py-2 border border-gray-200">
                <Button className="inline-block h-6 text-sm text-white bg-primary rounded-[4px]">
                  {position.status}
                </Button>
              </td>
              <td className="px-4 py-2 border border-gray-200">
                <div className="flex items-center gap-2">
                  <Button
                    size="sm"
                    isIconOnly
                    className="rounded-[4px] bg-blue-100 text-blue-500 border border-blue-500"
                  >
                    <FaEdit className="text-base" />
                  </Button>
                  <Button
                    size="sm"
                    isIconOnly
                    className="rounded-[4px] bg-red-100 border border-red-500 text-red-500"
                  >
                    <FaTrash className="text-base" />
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </HRTable>
      </div>

      <Button onClick={() => setIsOpen(!modalIsOpen)}>Open Modal</Button>

      <HRModal
        modalIsOpen={modalIsOpen}
        setIsOpen={setIsOpen}
        modalTitle="Position Modal Open"
      >
        hello modal
      </HRModal>
    </div>
  );
};

export default PositionPage;
