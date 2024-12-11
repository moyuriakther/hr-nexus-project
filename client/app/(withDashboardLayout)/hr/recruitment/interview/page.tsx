"use client";

import React, { useEffect, useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import SearchAndModal from "../component/SearchAndModal";
import { interviewTableHeader } from "./fakeData";
import CreateInterviewCandidate from "./component/CreateInterviewCandidate";
import InterviewCandidate from "./component/InterviewCandidate";
import { useGetAllInterviewQuery } from "@/app/Redux/api/interviewListApi";
import UpdateInterViewCandidate from "./component/UpdateInterviewCandidate";
import Loader from "@/app/components/utils/Loader";
import { useGetAllShortlistCandidateQuery } from "@/app/Redux/api/shortListApi";
import { getUserFromLocalStorage } from "@/app/utils/localStorage";
import { USER_ROLE } from "@/app/constants";


  // Array of Input Fields

const InterviewPage = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const [limit, setLimit] = useState(10);
  const [updateModalIsOpen, setIsUpdateModal] = useState(false);
  const [ID, setId] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [candidateId, setCandidateId] = useState([]);
  const [isActionLoading, setActionLoading] = useState(false);
  const query:string=searchTerm==="all"?"":searchTerm
  const { data, isLoading } = useGetAllInterviewQuery({searchTerm:query});
  const [formattedCandidateId, setFormattedCandidates] = useState<
  { value: string; label: string }[]
>([]);
  const { data:candidateList } = useGetAllShortlistCandidateQuery({});
  const user=getUserFromLocalStorage()

  useEffect(() => {

    if (data?.data) {
      setActionLoading(false)
      const extractCandidateID = data.data.map(
        (item: { candidateId: string }) => item?.candidateId
      );
      console.log("Extracted Candidate Id:", extractCandidateID);
      setCandidateId(extractCandidateID);
    }

  
    if (candidateList) {
      const formattedCandidateId = candidateList?.data.map((item) => ({
        value: item.candidateId,
        label: item.candidateId, 
      }));
      setFormattedCandidates([{value:"",label:""},...formattedCandidateId]);
    }
  }, [data,candidateList]);

  const handleSearch: SubmitHandler<FieldValues> = (data) => {
    setActionLoading(true)
    console.log(data);
    try {
      setSearchTerm(String(searchValue))
      
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error(error.message);
    }
    finally{
      setActionLoading(false)
    }
  };

  const handleEdit = (id: string) => {
    setIsUpdateModal(!updateModalIsOpen);
    setId(() => id);
    console.log(id);
  }
  const excelExportParamsData={data,headers:interviewTableHeader,baseFileName:"candidate_interview_list",isLoading:false, displayField:"CandidateInterviewList"}
  const paginatedData=data?.data.slice(0,Number(limit))

  if((isLoading)){
    return <Loader/>
  }
  return (
    <div className="bg-white w-full min-h-screen rounded-2xl p-4 ">
     
        <SearchAndModal excelExportParamsData={excelExportParamsData} searchKey={candidateId}setLimit={setLimit} menuName={"Candidate Interview "} modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} handleSearch={handleSearch} ></SearchAndModal>
        {
          user?.role===USER_ROLE.ADMIN&&
        <CreateInterviewCandidate  setIsOpen={setIsOpen}
        modalIsOpen={modalIsOpen}
        setActionLoading={setActionLoading}
        data={{candidateId:formattedCandidateId}}
        />
        }
        {user?.role===USER_ROLE.ADMIN&&
        <UpdateInterViewCandidate  modalIsOpen={updateModalIsOpen}
        id={ID}
        setActionLoading={setActionLoading} />} 
        
        <InterviewCandidate  
        isActionLoading={isActionLoading} 
        data={paginatedData}
        setActionLoading={setActionLoading}
        isLoading={isLoading}
        handleEdit={handleEdit}/>
    </div>
  );
};

export default InterviewPage;