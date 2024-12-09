"use client";

import React, { SetStateAction, useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import NoticeData from "./component/NoticeData";
import { useGetAllNoticeQuery } from "@/app/Redux/api/noticeApi";
import SearchAndModal from "../../recruitment/component/SearchAndModal";
import CreateNotice from "./component/CreateNotice";
import UpdateNotice from "./component/UpdateNotice";

// Array of Input Fields

const NoticePage = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm]=useState('')
  const { data, isLoading } = useGetAllNoticeQuery({searchTerm});
  const [limit, setLimit]=useState(10)
  const [updateModalIsOpen, setIsUpdateModal]=useState(false)
  const [noticeId, setNoticeId]=useState("");
  console.log("data: ",data)
  console.log(searchTerm)
  const handleSearch: SubmitHandler<FieldValues> =  (data) => {
    try {
      setSearchTerm(data.search)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error(error.message);
    }
    setSearchTerm("")
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
      <SearchAndModal
        excelExportParamsData={excelExportParamsData}
        menuName={"Notice Board"}
        modalIsOpen={modalIsOpen}
        setIsOpen={setIsOpen}
        handleSearch={handleSearch}
        setLimit={setLimit}
        searchTerm={searchTerm}
        
      ></SearchAndModal>

      <CreateNotice
        modalIsOpen={modalIsOpen}
        setIsOpen={setIsOpen}
      />
      <UpdateNotice setIsOpen={setIsUpdateModal} modalIsOpen={updateModalIsOpen} id={noticeId}/>
      <NoticeData data={paginatedData} isLoading={isLoading} handleEdit={handleEdit}/>
    </div>
  );
};

export default NoticePage;
