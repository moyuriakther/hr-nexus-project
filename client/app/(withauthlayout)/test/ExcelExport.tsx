"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { CSVLink } from "react-csv";
import Loader from "@/app/components/utils/Loader";
import React from "react";
import * as XLSX from "xlsx";

interface ExcelExportProps {
  data: any[];
  headers: { label: string; key: string }[];
  baseFileName?: string;
  isLoading?: boolean;
  displayField?: string;
}

const ExcelExport: React.FC<ExcelExportProps> = ({
  data = [],
  headers,
  baseFileName = "exported_data",
  isLoading = false,
  displayField,
}) => {
  const generateFileName = (extension: string) => {
    const timestamp = new Date();
    const formattedTimestamp = `${timestamp.getDate()}-${
      timestamp.getMonth() + 1
    }-${timestamp.getFullYear()}`;

    return `${baseFileName}_${formattedTimestamp}.${extension}`;
  };

  const handleXLSXDownload = () => {
    if (data.length === 0) {
      alert("No data available to export");
      return;
    }

    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

    const fileName = generateFileName("xlsx");
    XLSX.writeFile(workbook, fileName);
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="text-2xl">
      {displayField && (
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">List View:</h3>
          {data.length > 0 ? (
            data.map((item: any, index: number) => (
              <p key={index} className="text-sm">
                {item[displayField] || "N/A"}
              </p>
            ))
          ) : (
            <p>No data available</p>
          )}
        </div>
      )}
      <div className="flex gap-4">
        <CSVLink
          data={data}
          headers={headers}
          filename={generateFileName("csv")}
          className="bg-primary text-white py-2 px-4 rounded-md"
        >
          Export to CSV
        </CSVLink>
        {/* XLSX Export Button */}
        <button
          onClick={handleXLSXDownload}
          className="bg-secondary text-white py-2 px-4 rounded-md"
        >
          Export to XLSX
        </button>
      </div>
    </div>
  );
};

export default ExcelExport;
