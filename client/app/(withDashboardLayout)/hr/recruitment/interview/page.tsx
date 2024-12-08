"use client";

import React, { useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import SearchAndModal from "../component/SearchAndModal";
import { interviewTableHeader } from "./fakeData";
import CreateInterviewCandidate from "./component/CreateInterviewCandidate";
import InterviewCandidate from "./component/InterviewCandidate";
import { useGetAllInterviewQuery } from "@/app/Redux/api/interviewListApi";


  // Array of Input Fields

const InterviewPage = () => {
const {isLoading, data}=useGetAllInterviewQuery({})
  const [modalIsOpen, setIsOpen] = useState(false);



  const handleSearch: SubmitHandler<FieldValues> = async (data) => {
    try {
      console.log(data);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  const excelExportParamsData={data,headers:interviewTableHeader,baseFileName:"candidate_interview_list",isLoading:false, displayField:"CandidateInterviewList"}

  return (
    <div className="bg-white w-full min-h-screen rounded-2xl p-4 ">
     
    
        <SearchAndModal excelExportParamsData={excelExportParamsData} menuName={"Candidate Interview "} modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} handleSearch={handleSearch} ></SearchAndModal>
        <CreateInterviewCandidate modalIsOpen={modalIsOpen} setIsOpen={setIsOpen}/>
        <InterviewCandidate data={data} isLoading={isLoading}/>
    </div>
  );
};

export default InterviewPage;