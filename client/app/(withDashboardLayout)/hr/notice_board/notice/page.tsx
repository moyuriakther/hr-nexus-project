"use client";

import React, { useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import NoticeData from "./component/NoticeData";
import { useGetAllNoticeQuery } from "@/app/Redux/api/noticeApi";
import SearchAndModal from "../../recruitment/component/SearchAndModal";
import CreateNotice from "./component/CreateNotice";

// Array of Input Fields

const NoticePage = () => {
  const { isLoading, data } = useGetAllNoticeQuery({});
  const [modalIsOpen, setIsOpen] = useState(false);

  const handleSearch: SubmitHandler<FieldValues> = async (data) => {
    try {
      console.log(data);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  const excelExportParamsData = {
    data,
    headers: false,
    baseFileName: "notice_list",
    isLoading: false,
    displayField: "NoticeList",
  };

  return (
    <div className="bg-white w-full min-h-screen rounded-2xl p-4 ">
      <SearchAndModal
        excelExportParamsData={excelExportParamsData}
        menuName={"Notice Board"}
        modalIsOpen={modalIsOpen}
        setIsOpen={setIsOpen}
        handleSearch={handleSearch}
      ></SearchAndModal>

      <CreateNotice
        modalIsOpen={modalIsOpen}
        setIsOpen={setIsOpen}
      />
      <NoticeData data={data} isLoading={isLoading} />
    </div>
  );
};

export default NoticePage;
