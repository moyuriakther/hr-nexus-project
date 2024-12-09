"use client";

import { useGetAllCandidateQuery } from "@/app/Redux/api/candidateListApi";
import { candidateTableHeader } from "./fakeData";
import { FieldValues, SubmitHandler } from "react-hook-form";
import SearchAndModal from "../component/SearchAndModal";
import CreateCandidate from "./component/CreateCandidate";
import { useEffect, useState } from "react";
import CandidateData from "./component/CandidateData";
import { toast } from "sonner";
import UpdateCandidate from "./component/UpdateCandidate";

// Array of Input Fields

const CandidateList = () => {
  // const [data, setData] = useState<TCandidateList[]>(candidates);
  const [modalIsOpen, setIsOpen] = useState(false);

  const [limit, setLimit]=useState(10)
  const [updateModalIsOpen, setIsUpdateModal]=useState(false)
  const [ID, setId]=useState("");
  const [searchTerm, setSearchTerm]=useState('')
  console.log(searchTerm)
  const [searchKey, setSearchKey] = useState([]);
  const { data, isLoading } = useGetAllCandidateQuery({searchTerm});
  useEffect(() => {
    if (data?.data) {
      console.log("Data:", data?.data); // Debugging log
      const extractNoticeBy = data.data.map((item: { noticeBy: string }) => item?.noticeBy);
      console.log("Extracted noticeBy:", extractNoticeBy); // Debugging log
      setSearchKey(extractNoticeBy);
    }
  }, [data]); 
  
  const handleSearch: SubmitHandler<FieldValues> =  (data) => {
    console.log(data)
    try {
      setSearchTerm(data)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  const handleEdit = (id: string) => {
    setIsUpdateModal(!updateModalIsOpen);
    setId(()=>id)
    console.log(id);

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
        // searchTerm={searchTerm}
        searchKey={searchKey}   ></SearchAndModal>
      {/* Add New  Modal */}
      <CreateCandidate setIsOpen={setIsOpen} modalIsOpen={modalIsOpen} />
      <UpdateCandidate setIsOpen={setIsUpdateModal} modalIsOpen={modalIsOpen} id={ID}/>
        <CandidateData data={paginatedData}  isLoading={isLoading} handleEdit={handleEdit}/>
    </div>
  );
};

export default CandidateList;
