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
  const [searchTerm, setSearchTerm]=useState('')
  const { data, isLoading } = useGetAllCandidateQuery({searchTerm});
  const [limit, setLimit]=useState(10)

  console.log("data: ",data)
  console.log(searchTerm)
  const handleSearch: SubmitHandler<FieldValues> = async (data) => {
    try {
      console.log(data);
      setSearchTerm(data.search)
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
  console.log(limit)
const paginatedData=data?.data.slice(0,Number(limit))
  return (
    <div className="bg-white w-full min-h-screen rounded-2xl p-4 ">
      <SearchAndModal
        menuName={"Candidate "}
        excelExportParamsData={excelExportParamsData}
        modalIsOpen={modalIsOpen}
        setIsOpen={setIsOpen}
        handleSearch={handleSearch}
        setLimit={setLimit}
      ></SearchAndModal>
      {/* Add New  Modal */}
      <CreateCandidate setIsOpen={setIsOpen} modalIsOpen={modalIsOpen} />
        <CandidateData data={paginatedData}  isLoading={isLoading}/>
    </div>
  );
};

export default CandidateList;
