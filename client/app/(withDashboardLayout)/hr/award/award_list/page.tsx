"use client";

import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import HRTable from "@/app/components/Table/HRTable";
import Pagination from "../components/pagination";
import TableControls from "../components/TableControls";

const AwardList = () => {
  const tableHeader = [
    "Sl",
    "Award name",
    "Award description",
    "Gift item",
    "Date",
    "Employee name",
    "Award by",
    "Action",
  ];

  // Data for awards
  const [awards, setAwards] = useState([
    {
      id: 1,
      name: "sat",
      description: "ss",
      gift: "das",
      date: "2024-11-20",
      employee: "Amy Aphrodite Zamora Peck",
      awardedBy: "cx",
    },
    {
      id: 2,
      name: "star",
      description: "top performer",
      gift: "medal",
      date: "2024-11-18",
      employee: "Jonathan Ibrahim Shekh",
      awardedBy: "Admin",
    },
  ]);
  console.log(setAwards);

  const [entries, setEntries] = useState(10);
  const [searchQuery, setSearchQuery] = useState("");
  console.log(entries);
  console.log(searchQuery);

  const handleEntriesChange = (value: number) => {
    setEntries(value);
    console.log("Entries per page:", value);
  };

  const handleSearch = (value: string) => {
    setSearchQuery(value);
    console.log("Search query:", value);
  };

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Calculate pagination details
  const totalPages = Math.ceil(awards.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentAwards = awards.slice(startIndex, startIndex + itemsPerPage);

  // Handlers
  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleEdit = (id: number) => {
    console.log("Edit award with ID:", id);
  };

  const handleDelete = (id: number) => {
    console.log("Delete award with ID:", id);
  };

  return (
    <div className="bg-white shadow-sm rounded-md p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Award list</h2>
        <button
          className="bg-[#198754] text-white py-2 px-3 text-sm rounded-lg hover:bg-green-600"
          onClick={() => console.log("Add new award clicked")}
        >
          + Add new award
        </button>
      </div>
      <div className="border border-t-0 mb-8"></div>

      <TableControls
        onEntriesChange={handleEntriesChange}
        onSearch={handleSearch}
      />

      <HRTable tableHeader={tableHeader}>
        {currentAwards.map((award, index) => (
          <tr key={award.id}>
            <td className="px-4 py-2 border">{startIndex + index + 1}</td>
            <td className="px-4 py-2 border">{award.name}</td>
            <td className="px-4 py-2 border">{award.description}</td>
            <td className="px-4 py-2 border">{award.gift}</td>
            <td className="px-4 py-2 border">{award.date}</td>
            <td className="px-4 py-2 border">{award.employee}</td>
            <td className="px-4 py-2 border">{award.awardedBy}</td>
            <td className="px-4 py-2 border flex space-x-2">
              <button
                onClick={() => handleEdit(award.id)}
                className="bg-[#28a745] text-white text-xs py-1 px-2 rounded-md hover:bg-green-600 flex items-center space-x-1"
              >
                <FaEdit className="w-4 h-4 rounded-lg" />
              </button>
              <button
                onClick={() => handleDelete(award.id)}
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
    </div>
  );
};

export default AwardList;
