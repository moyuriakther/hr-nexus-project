/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";

import HRTable from "@/app/components/Table/HRTable";
import Pagination from "../components/pagination";
import TableControls from "../components/TableControls";
import AddAwardModal from "../components/AddAwardModal"; // Import your modal component

import UpdateAwardModal from "../components/UpdateAwardModal";
import { getDayMonthAndYear } from "@/app/utils/getYearAndMonth";

import {
  useDeleteAwardMutation,
  useGetAllAwardQuery,
} from "@/app/Redux/api/awardApi";
import { getUserFromLocalStorage } from "@/app/utils/localStorage";
import { USER_ROLE } from "@/app/constants";

const AwardList = () => {
  const { data } = useGetAllAwardQuery({});
  const [deleteAward] = useDeleteAwardMutation();
  const user = getUserFromLocalStorage();

  const tableHeader = [
    "Sl",
    "Award name",
    "Award description",
    "Gift item",
    "Date",
    "Employee name",
    "Award by",
    `${user?.role === USER_ROLE.ADMIN ? "Action" : ""}`,
  ];

  const [entries, setEntries] = useState(10);
  const [searchQuery, setSearchQuery] = useState("");

  const handleEntriesChange = (value: number) => {
    setEntries(value);
  };

  const handleSearch = (value: string) => {
    setSearchQuery(value);
  };

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(data?.data?.length / itemsPerPage);
  // const startIndex = (currentPage - 1) * itemsPerPage;
  // const currentAwards = awards.slice(startIndex, startIndex + itemsPerPage);

  // Handlers
  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleDelete = (id: number) => {
    deleteAward(id);
  };

  // Modal states for adding new award
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleAddNewAward = (data: any) => {
    // setAwards((prevAwards) => [
    //   ...prevAwards,
    //   { ...data, id: prevAwards.length + 1 },
    // ]);
    setModalIsOpen(false);
  };

  return (
    <div className="bg-white shadow-sm rounded-md p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Award list</h2>
        {user?.role === USER_ROLE.ADMIN && (
          <button
            className="bg-[#198754] text-white py-2 px-3 text-sm rounded-lg hover:bg-green-600"
            onClick={() => setModalIsOpen(true)} // Open modal
          >
            + Add new award
          </button>
        )}
      </div>
      <div className="border border-t-0 mb-8"></div>

      <TableControls
        onEntriesChange={handleEntriesChange}
        onSearch={handleSearch}
      />

      <HRTable tableHeader={tableHeader}>
        {data?.data?.map((award: any, index: number) => (
          <tr key={award.id}>
            <td className="px-4 py-2 border">{index + 1}</td>
            <td className="px-4 py-2 border">{award.awardName}</td>
            <td className="px-4 py-2 border">{award.awardDescription}</td>
            <td className="px-4 py-2 border">{award.giftItem}</td>
            <td className="px-4 py-2 border">
              {getDayMonthAndYear(award.date)}
            </td>
            <td className="px-4 py-2 border">
              {award.employee.firstName + " " + award.employee.lastName}
            </td>
            <td className="px-4 py-2 border">{award.awardBy}</td>
            <td className="px-4 py-2 border flex space-x-2">
              <UpdateAwardModal award={award} />
              <button
                onClick={() => handleDelete(award?.id)}
                className="bg-red-500 text-white text-xs py-1 px-2 rounded-md hover:bg-red-600 flex items-center space-x-1"
              >
                <FaTrash className="w-4 h-4 rounded-lg" />
              </button>
            </td>
          </tr>
        ))}
      </HRTable>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />

      {/* Add Award Modal */}
      <AddAwardModal
        modalIsOpen={modalIsOpen}
        setIsOpen={setModalIsOpen}
        onSave={handleAddNewAward}
      />
    </div>
  );
};

export default AwardList;
