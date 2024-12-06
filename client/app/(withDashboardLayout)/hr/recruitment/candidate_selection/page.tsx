"use client";

import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import SearchAndModal from "../component/SearchAndModal";
import { selectionTableHeader } from "./fakeData";
import { useState } from "react";
import SelectedCandidate from "./component/SelectedCandidate";
import { useGetAllSelectedCandidateQuery } from "@/app/Redux/api/selectedListApi";

// Array of Input Fields

const CandidateSelectionPage = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const { data } = useGetAllSelectedCandidateQuery({});
  const handleSearch: SubmitHandler<FieldValues> = async (data) => {
    try {
      console.log(data);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  const excelExportParamsData = {
    data,
    headers: selectionTableHeader,
    baseFileName: "candidate_selection_list",
    isLoading: false,
    displayField: "CandidateSelectionList",
  };

  return (
    <div className="bg-white w-full min-h-screen rounded-2xl p-4 ">
      <SearchAndModal
        excelExportParamsData={excelExportParamsData}
        menuName={"Candidate Selection "}
        modalIsOpen={modalIsOpen}
        setIsOpen={setIsOpen}
        handleSearch={handleSearch}
      ></SearchAndModal>
      <SelectedCandidate data={data} />
    </div>
  );
};

export default CandidateSelectionPage;
