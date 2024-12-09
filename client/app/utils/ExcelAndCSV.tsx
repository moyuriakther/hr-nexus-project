"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { CSVLink } from "react-csv";
import Loader from "@/app/components/utils/Loader";
import React from "react";
import * as XLSX from "xlsx";
import { Button } from "@nextui-org/react";
import { FaFileCsv, FaFileExcel } from "react-icons/fa";

interface ExcelCSVExportProps {
  data: any[];
  baseFileName?: string;
  isLoading?: boolean;
}

const ExcelCSVExport: React.FC<ExcelCSVExportProps> = ({
  data = [],
  baseFileName = "exported_data",
  isLoading = false,
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

  // Automatically generate headers for CSV by extracting keys from the data
  const csvHeaders = data.length > 0 ? Object.keys(data[0]) : [];
  const csvData = data.map((item) =>
    csvHeaders.reduce((acc: any, key) => {
      acc[key] = item[key] || ""; // Ensure every key exists in each row
      return acc;
    }, {})
  );

  return (
    <div className="text-2xl">
      <div className="flex items-center">
        {/* CSV Export */}
        <CSVLink
          data={csvData}
          filename={generateFileName("csv")}
          className="bg-primary rounded-md text-sm mx-2 text-white px-4"
        >
          <Button
            size="sm"
            className="bg-primary rounded-md text-white flex items-center gap-2"
          >
            <FaFileCsv /> CSV
          </Button>
        </CSVLink>
        {/* XLSX Export Button */}
        <Button
          onClick={handleXLSXDownload}
          size="sm"
          className="bg-primary rounded-md text-sm text-white px-4 flex items-center gap-2"
        >
          <FaFileExcel /> Excel
        </Button>
      </div>
    </div>
  );
};

export default ExcelCSVExport;
