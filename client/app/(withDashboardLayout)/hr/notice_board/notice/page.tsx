"use client";

import React, { SetStateAction, useEffect, useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import NoticeData from "./component/NoticeData";
import { useGetAllNoticeQuery } from "@/app/Redux/api/noticeApi";
import SearchAndModal from "../../recruitment/component/SearchAndModal";
import CreateNotice from "./component/CreateNotice";
import UpdateNotice from "./component/UpdateNotice";
import Loader from "@/app/components/utils/Loader";

// Array of Input Fields

const NoticePage = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm]=useState('')
  
  const [limit, setLimit]=useState(10)
  const [updateModalIsOpen, setIsUpdateModal]=useState(false)
  const [noticeId, setNoticeId]=useState("");
  console.log(searchTerm)
  const [searchKey, setSearchKey] = useState([]);
  const [isActionLoading, setActionLoading]=useState(false)
  const { data, isLoading } = useGetAllNoticeQuery({searchTerm});
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
      setSearchTerm(String(data))
      
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error(error.message);
    }
    finally{
      setActionLoading(false)
    }
  };
  const excelExportParamsData = {
    data:false,
  };
  const handleEdit = (id: string) => {
    setIsUpdateModal(!updateModalIsOpen);
    setNoticeId(()=>id)
    console.log(id);

  };
  const paginatedData=data?.data.slice(0,Number(limit))
  return (
    <div className="bg-white w-full min-h-screen rounded-2xl p-4 ">

      {isLoading&&<Loader/>}
      <SearchAndModal
        excelExportParamsData={excelExportParamsData}
        menuName={"Notice Board"}
        modalIsOpen={modalIsOpen}
        setIsOpen={setIsOpen}
        handleSearch={handleSearch}
        setLimit={setLimit}
        // searchTerm={searchTerm}
        searchKey={searchKey}
        
      ></SearchAndModal>

      <CreateNotice
        modalIsOpen={modalIsOpen}
        setIsOpen={setIsOpen}
        setActionLoading={setActionLoading}
      />
      <UpdateNotice setActionLoading={setActionLoading} setIsOpen={setIsUpdateModal} modalIsOpen={updateModalIsOpen} id={noticeId}/>
      <NoticeData isActionLoading={isActionLoading} setActionLoading={setActionLoading}  data={paginatedData} isLoading={isLoading} handleEdit={handleEdit}/>
    </div>
  );
};

export default NoticePage;
