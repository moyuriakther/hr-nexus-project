"use client";
import React, { useEffect, useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import SearchAndModal from "../component/SearchAndModal";
import { shortlistTableHeader } from "./fakeData";
import ShortlistCandidate from "./component/ShortlistCandidate";
import CreateShortlistCandidate from "./component/CreateShortlistCandidate";
import { useGetAllShortlistCandidateQuery } from "@/app/Redux/api/shortListApi";
import Loader from "@/app/components/utils/Loader";
import UpdateShortlistCandidate from "./component/UpdateShortlistCandidate";
import { useGetAllCandidateQuery } from "@/app/Redux/api/candidateListApi";

// Array of Input Fields

const CandidateShortlist = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const [limit, setLimit] = useState(10);
  const [updateModalIsOpen, setIsUpdateModal] = useState(false);
  const [ID, setId] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [candidateId, setCandidateId] = useState([]);
  
  const [isActionLoading, setActionLoading] = useState(false);
  const query:string=searchTerm==="all"?"":searchTerm
  const { data, isLoading } = useGetAllShortlistCandidateQuery({searchTerm:query});
  const [formattedCandidateId, setFormattedCandidates] = useState<
  { value: string; label: string }[]
>([]);
  const { data:candidateList } = useGetAllCandidateQuery({});

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
      setFormattedCandidates(formattedCandidateId);
    }
  }, [data,candidateList]);
  const handleSearch: SubmitHandler<FieldValues> = (data) => {
    setActionLoading(true)
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
  };

  const excelExportParamsData = {
    data,
    baseFileName: "candidate_short_list",
    isLoading: false,
  };
  const paginatedData = data?.data.slice(0, Number(limit));
  return (
    <div className="bg-white w-full min-h-screen rounded-2xl p-4 ">
      {
        (isActionLoading||isLoading)&&<Loader/>
      }
      <SearchAndModal
        excelExportParamsData={excelExportParamsData}
        setLimit={setLimit}
        menuName={"Candidate Shortlist "}
        modalIsOpen={modalIsOpen}
        setIsOpen={setIsOpen}
        handleSearch={handleSearch}
        searchKey={candidateId}
      ></SearchAndModal>
      <CreateShortlistCandidate
        setIsOpen={setIsOpen}
        modalIsOpen={modalIsOpen}
        data={{candidateId:formattedCandidateId}}
        setActionLoading={setActionLoading}
      />

      <UpdateShortlistCandidate setIsOpen={setIsUpdateModal}
        modalIsOpen={updateModalIsOpen}
        id={ID}
        setActionLoading={setActionLoading} />
      <ShortlistCandidate data={paginatedData}
      isActionLoading={isActionLoading}
       isLoading={isLoading}  setActionLoading={setActionLoading} handleEdit={handleEdit}/>
    </div>
  );
};

export default CandidateShortlist;
