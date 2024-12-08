"use client";
import React, { useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import SearchAndModal from "../component/SearchAndModal";
import { shortlistTableHeader } from "./fakeData";
import ShortlistCandidate from "./component/ShortlistCandidate";
import CreateShortlistCandidate from "./component/CreateShortlistCandidate";
import { useGetAllShortlistCandidateQuery } from "@/app/Redux/api/shortListApi";


  // Array of Input Fields

const CandidateShortlist = () => {
  
  const {data, isLoading}=useGetAllShortlistCandidateQuery({})
  const [modalIsOpen, setIsOpen] = useState(false);
  const [limit, setLimit]=useState(10)

  const handleSearch: SubmitHandler<FieldValues> = async (data) => {
    try {
      console.log(data);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  const excelExportParamsData={data,headers:shortlistTableHeader,baseFileName:"candidate_short_list",isLoading:false, displayField:"CandidateShortList"}
  const paginatedData=data?.data.slice(0,Number(limit))
  return (
    <div className="bg-white w-full min-h-screen rounded-2xl p-4 ">
     
     
        <SearchAndModal excelExportParamsData={excelExportParamsData} setLimit={setLimit} menuName={"Candidate Shortlist "} modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} handleSearch={handleSearch} ></SearchAndModal>
      <CreateShortlistCandidate modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} />
      <ShortlistCandidate data={paginatedData} isLoading={isLoading}/>

     

    </div>
  );
};

export default CandidateShortlist;