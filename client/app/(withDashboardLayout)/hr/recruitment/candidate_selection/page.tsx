"use client";

import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import SearchAndModal from "../component/SearchAndModal";
import { useEffect, useState } from "react";
import SelectedCandidate from "./component/SelectedCandidate";
import { useGetAllSelectedCandidateQuery } from "@/app/Redux/api/selectedListApi";
import CreateSelectedCandidate from "./component/CreateSelectedCandidate";
import UpdateSelectedCandidate from "./component/UpdateSelectedCandidate";
import Loader from "@/app/components/utils/Loader";
import { useGetAllInterviewQuery } from "@/app/Redux/api/interviewListApi";

// Array of Input Fields

const CandidateSelectionPage = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const [limit, setLimit]=useState(10)
  const [updateModalIsOpen, setIsUpdateModal]=useState(false)
  const [ID, setId]=useState("");
  const [searchTerm, setSearchTerm]=useState('')
  const [candidateId, setCandidateId] = useState([]);
  const [isActionLoading, setActionLoading] = useState(false);
  const query:string=searchTerm==="all"?"":searchTerm
  const { data, isLoading } = useGetAllSelectedCandidateQuery({searchTerm:query});
  const [formattedCandidateId, setFormattedCandidates] = useState<
  { value: string; label: string }[]
>([]);
  const { data:candidateList } = useGetAllInterviewQuery({});
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
      setSearchTerm(String(data));

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  const handleEdit = (id: string) => {
    setIsUpdateModal(!updateModalIsOpen);
    setId(ID)
    console.log(id);

  };
  const excelExportParamsData = {
    data,
    baseFileName: "candidate_selection_list",
    isLoading: false,
  };

  const paginatedData = data?.data.slice(0, Number(limit));
  return (
    <div className="bg-white w-full min-h-screen rounded-2xl p-4 ">
      {(isLoading || isActionLoading) && <Loader />}
      <CreateSelectedCandidate
       setIsOpen={setIsOpen}
       modalIsOpen={modalIsOpen}
       data={{candidateId:formattedCandidateId}}
       setActionLoading={setActionLoading}
      />
      <UpdateSelectedCandidate
        setIsOpen={setIsUpdateModal}
        modalIsOpen={updateModalIsOpen}
        id={ID}
        setActionLoading={setActionLoading}
      />
      <SearchAndModal
        excelExportParamsData={excelExportParamsData}
        menuName={"Candidate Selection "}
        modalIsOpen={modalIsOpen}
        setIsOpen={setIsOpen}
        handleSearch={handleSearch}
        setLimit={setLimit}
        searchKey={candidateId}
      ></SearchAndModal>

      <SelectedCandidate
      isActionLoading={isActionLoading}
        data={paginatedData}
        setActionLoading={setActionLoading}
        isLoading={isLoading}
        handleEdit={handleEdit}
      />
    </div>
  );
};

export default CandidateSelectionPage;
