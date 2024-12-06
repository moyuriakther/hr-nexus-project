"use client";

import { useGetAllCandidateQuery } from "@/app/Redux/api/candidateListApi";
import { candidateTableHeader } from "./fakeData";
import { FieldValues, SubmitHandler } from "react-hook-form";
import SearchAndModal from "../component/SearchAndModal";
import CreateCandidate from "./component/CreateCandidate";
import { useState } from "react";
import CandidateData from "./component/CandidateData";
import { toast } from "sonner";

// Array of Input Fields

const CandidateList = () => {
  // const [data, setData] = useState<TCandidateList[]>(candidates);
  const [modalIsOpen, setIsOpen] = useState(false);
  const { data, isLoading } = useGetAllCandidateQuery({});
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
    headers: candidateTableHeader,
    baseFileName: "candidate_list",
    isLoading: false,
    displayField: "CandidateList",
  };

  return (
    <div className="bg-white w-full min-h-screen rounded-2xl p-4 ">
      <SearchAndModal
        menuName={"Candidate List"}
        excelExportParamsData={excelExportParamsData}
        modalIsOpen={modalIsOpen}
        setIsOpen={setIsOpen}
        handleSearch={handleSearch}
      ></SearchAndModal>
      {/* Add New  Modal */}
      <CreateCandidate setIsOpen={setIsOpen} modalIsOpen={modalIsOpen} />
        <CandidateData data={data} isLoading={isLoading}/>
    </div>
  );
};

export default CandidateList;
