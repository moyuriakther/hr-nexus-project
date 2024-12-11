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
import Loader from "@/app/components/utils/Loader";

// Array of Input Fields

const CandidateList = () => {
  // const [data, setData] = useState<TCandidateList[]>(candidates);
  const [modalIsOpen, setIsOpen] = useState(false);

  const [limit, setLimit]=useState(10)
  const [updateModalIsOpen, setIsUpdateModal]=useState(false)
  const [ID, setId]=useState("");
  const [searchTerm, setSearchTerm]=useState('')
  const [candidateId, setCandidateId] = useState([]);
  const [isActionLoading, setActionLoading] = useState(false);
  const query:string=searchTerm==="all"?"":searchTerm
  const { data, isLoading } = useGetAllCandidateQuery({searchTerm:query});
  useEffect(() => {
    if (data?.data) {
      setActionLoading(false)
      const extractCandidateID = data.data.map(
        (item: { candidateId: string }) => item?.candidateId
      );
      setCandidateId(extractCandidateID);
    }
  }, [data]);
  
  const handleSearch: SubmitHandler<FieldValues> =  (searchValue) => {
   
    console.log(searchValue)
    setActionLoading(true)
    try {
      setSearchTerm(String(searchValue))
      
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  const handleEdit = (id: string) => {
    setIsUpdateModal(!updateModalIsOpen);
    setId(id)
    console.log(ID);

  };
  const excelExportParamsData = {
    data,
    baseFileName: "candidate_list",
    isLoading: false,
  };
  console.log(limit)
const paginatedData=data?.data.slice(0,Number(limit))
  return (
    <div className="bg-white w-full min-h-screen rounded-2xl p-4 ">
       {
            (isLoading)&&<Loader/>
      }
      <SearchAndModal
        menuName={"Candidate "}
        excelExportParamsData={excelExportParamsData}
        modalIsOpen={modalIsOpen}
        setIsOpen={setIsOpen}
        handleSearch={handleSearch}
        setLimit={setLimit}
        // searchTerm={searchTerm}
        searchKey={candidateId}   ></SearchAndModal>
      {/* Add New  Modal */}
      <CreateCandidate setIsOpen={setIsOpen} modalIsOpen={modalIsOpen} setActionLoading={setActionLoading} />
      <UpdateCandidate setIsOpen={setIsUpdateModal} modalIsOpen={updateModalIsOpen} id={ID} setActionLoading={setActionLoading}/>
        <CandidateData data={paginatedData} 
         isLoading={isLoading} isActionLoading={isActionLoading} handleEdit={handleEdit} setActionLoading={setActionLoading}/>
    </div>
  );
};

export default CandidateList;
