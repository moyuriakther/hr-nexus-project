"use client";

import HRModal from "@/app/components/Modal/HRModal";
import React from "react";

type BulkInsertModalProps = {
  modalIsOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const BulkInsertModal: React.FC<BulkInsertModalProps> = ({
  modalIsOpen,
  setIsOpen,
}) => {
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    console.log("Selected file:", file);
  };

  return (
    <HRModal
      modalIsOpen={modalIsOpen}
      setIsOpen={setIsOpen}
      modalTitle="Bulk Insert"
      className="w-[80%] max-w-4xl"
    >
      <div className="space-y-4">
        {/* Excel Sample File */}
        <div className="flex items-center">
          <span className="text-sm font-medium text-gray-800">
            Excel sample file :
          </span>
          <button
            type="button"
            className="ml-2 text-sm bg-[#198754] text-white py-1 px-3 rounded-md hover:bg-green-600"
          >
            bulk.xlsx
          </button>
        </div>

        {/* File Input */}
        <div className="flex items-center space-x-2">
          <input
            type="file"
            accept=".xlsx, .xls"
            onChange={handleFileUpload}
            className="border rounded-md w-full max-w-[90%] p-2 text-sm"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end space-x-3">
          <button
            type="button"
            className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600"
            onClick={() => setIsOpen(false)}
          >
            Close
          </button>
          <button
            type="button"
            className="bg-[#198754] text-white py-2 px-4 rounded-md hover:bg-green-600"
            onClick={() => console.log("Import clicked")}
          >
            Import
          </button>
        </div>
      </div>
    </HRModal>
  );
};

export default BulkInsertModal;
