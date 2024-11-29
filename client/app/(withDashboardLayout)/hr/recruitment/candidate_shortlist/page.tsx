"use client";

import HRForm from '@/app/components/Form/HRForm';
import HRInput from '@/app/components/Form/HRInput';
import HRModal from '@/app/components/Modal/HRModal';
import SearchBox from '@/app/components/SearchBox';
import HRTable from '@/app/components/Table/HRTable';
import HRTableRow from '@/app/components/Table/HRTableRow';
import { Button } from '@nextui-org/react';
import React, { useState } from 'react';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import { FaFileCsv, FaFileExcel } from 'react-icons/fa';
import { toast } from 'sonner';

type TTableData = {
    sl: number;
    name: string;
    candidateId: string;
    jobPosition: string;
    shortlistDate: string;
    interviewDate: string;
    action: string;
  };

export const ModalInputFiled = [
  { id: 1, label: "Name", key: "name", type: "text", placeholder: "Enter name" },
  {
    id: 2,
    label: "Candidate ID",
    key: "candidateId",
    type: "text",
    placeholder: "Enter candidate ID",
  },
  {
    id: 3,
    label: "Photograph",
    key: "photograph",
    type: "text",
    placeholder: "Enter photograph URL",
  },
  {
    id: 4,
    label: "Email Address",
    key: "email",
    type: "email",
    placeholder: "Enter email address",
  },
  {
    id: 5,
    label: "SSN",
    key: "ssn",
    type: "text",
    placeholder: "Enter SSN",
  },
  {
    id: 6,
    label: "Phone",
    key: "phone",
    type: "tel",
    placeholder: "Enter phone number",
  },
];

const tableData: TTableData[] = [
    {
      sl: 1,
      name: "John Doe",
      candidateId: "CND001",
      jobPosition: "Software Engineer",
      shortlistDate: "2024-11-20",
      interviewDate: "2024-11-27",
      action: "View",
    },
    {
      sl: 2,
      name: "Jane Smith",
      candidateId: "CND002",
      jobPosition: "Data Analyst",
      shortlistDate: "2024-11-21",
      interviewDate: "2024-11-28",
      action: "View",
    },
  ];

export const tableHeaders: string[] = [
    "Sl",
    "Name",
    "Candidate ID",
    "Job Position",
    "Shortlist Date",
    "Interview Date",
    "Action",
  ];

const CandidateShortList = () => {
  const [tableAllData, setTableData] = useState<TTableData[]>(tableData);
  const [editTableData, setEditTableData]=useState<Partial<TTableData>>({
    sl: 0,
  name: "",       
  candidateId:"",
  jobPosition: "",  
  shortlistDate: ""   ,     
  interviewDate: "",   
  action: ""
  })
  const [modalIsOpen, setIsOpen] = useState(false);

  const handleSearchNotice: SubmitHandler<FieldValues> = async (data) => {
    try {
      console.log(data);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error(error.message);
    }
  };
  const HandleEditNotice = (id: number | string) => {
    setIsOpen(!modalIsOpen);
    console.log(id);
    const editData=tableAllData.find(notice=>notice.sl===id)
    if(editData){
        setEditTableData(editData) 
    }else{
        console.log("Data not found")
    }

  };
  const HandleNoticeDelete = (id: number | string) => {
    const updateTableData = tableAllData.filter((data) => data.sl !== id);
    setTableData(updateTableData);
  };
  return (
    <div className="bg-white w-full min-h-screen rounded-2xl p-4 ">
      {/* Notice Top Bar */}
      <div className="flex  justify-between items-center border-b-2 pb-2">
        <h3 className="text-md font-semibold">Notice list</h3>
        <Button
          className="bg-primary text-md font-semibold text-secondary"
          onClick={() => setIsOpen(!modalIsOpen)}
        >
          Add Notice
        </Button>
      </div>
      {/* Add New Notice Modal */}
      <HRModal
        modalIsOpen={modalIsOpen}
        setIsOpen={setIsOpen}
        modalTitle="New notice"
      >
        <HRForm onSubmit={handleSearchNotice}>
          {ModalInputFiled.map((inputField, index) => {
            return (
              <div
                key={index}
                className="mb-5 text-md font-semibold flex  gap-1 items-center"
              >
                <label className="col-span-1 w-[200px]">{inputField?.label}</label>
                <HRInput
                  type={inputField?.type}
                  className="border-primary h-10 rounded-[5px]  min-w-[340px]"
                  placeholder={inputField?.placeholder}
                  name={`${inputField?.key}`}
                
                  defaultValue={editTableData[inputField?.key as keyof TTableData]||""}
                />
              </div>
            );
          })}
          <div className="flex gap-2 justify-end">
            <button
              onClick={() => setIsOpen(false)}
              className="bg-[#DC3545] p-2 px-3 text-white rounded"
            >
              Close
            </button>
            <button type="submit" className="bg-primary p-2 px-3 text-white rounded">
              Save
            </button>
          </div>
        </HRForm>
      </HRModal>

      <div className="flex justify-between items-center pt-2 pb-2 text-md">
        <span>
          Show{" "}
          <input
            className=" border-2 text-center mx-1 p-1 w-[50px]"
            type="number"
            defaultValue={10}
          />{" "}
          entries
        </span>
       
<div className="flex items-center">
<Button
size="sm"
className="bg-primary rounded-[4px] text-sm text-white"
>
<FaFileCsv /> CSV
</Button>
<Button
size="sm"
className="bg-primary rounded-[4px] text-sm text-white"
>
<FaFileExcel /> Excel
</Button>
</div>
        <SearchBox handleSearchNotice={handleSearchNotice}></SearchBox>
      </div>

      {/* All Notice */}
      <HRTable tableHeader={tableHeaders}>
        {tableData.slice(0, 10).map((data, index) => {
          return (
            <HRTableRow
              className={`${
                Number(index) % 2 != 0 && "bg-[#F2F2F2]"
              } border-1 w-[100%] `}
              key={data?.sl}
            >
              <td className="bg-[#FAFAFA]  border-r border-gray-200 px-3">
                {index + 1}
              </td>
              <td className="py-2 w-1/6 border-r border-gray-200 px-3">
                {data?.name}
              </td>
              <td className="py-2 w-2/6 border-r border-gray-200 px-3">
                {data?.candidateId}
              </td>
              <td className="py-2 w-1/6 border-r border-gray-200 px-3">
                {data?.jobPosition}
              </td>
              <td className="py-2 w-1/6 border-r border-gray-200 px-3">
                {data?.shortlistDate}
              </td>
              <td className="py-2 w-1/6 border-r border-gray-200 px-3">
                {data?.interviewDate}
              </td>
             
              <td className="w-1/6 border-r border-gray-200 px-3">
                <ul className="flex gap-2 items-center  p-2 ">
                  <li
                    onClick={() => HandleEditNotice(data?.sl)}
                    className="cursor-pointer  bg-[#DAE4F3] border-2 border-[#0D6EFD] rounded-lg p-1"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="#0D6EFD"
                      className="size-5"
                    >
                      <path d="m5.433 13.917 1.262-3.155A4 4 0 0 1 7.58 9.42l6.92-6.918a2.121 2.121 0 0 1 3 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 0 1-.65-.65Z" />
                      <path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0 0 10 3H4.75A2.75 2.75 0 0 0 2 5.75v9.5A2.75 2.75 0 0 0 4.75 18h9.5A2.75 2.75 0 0 0 17 15.25V10a.75.75 0 0 0-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5Z" />
                    </svg>
                  </li>
                  <li
                    className="cursor-pointer  p-1 bg-[#EFDEE0] border-2 border-[#DC3545] rounded-lg"
                    onClick={() => HandleNoticeDelete(data?.sl)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="#DC3545"
                      className="size-5"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8.75 1A2.75 2.75 0 0 0 6 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 1 0 .23 1.482l.149-.022.841 10.518A2.75 2.75 0 0 0 7.596 19h4.807a2.75 2.75 0 0 0 2.742-2.53l.841-10.52.149.023a.75.75 0 0 0 .23-1.482A41.03 41.03 0 0 0 14 4.193V3.75A2.75 2.75 0 0 0 11.25 1h-2.5ZM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4ZM8.58 7.72a.75.75 0 0 0-1.5.06l.3 7.5a.75.75 0 1 0 1.5-.06l-.3-7.5Zm4.34.06a.75.75 0 1 0-1.5-.06l-.3 7.5a.75.75 0 1 0 1.5.06l.3-7.5Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </li>
                </ul>
              </td>
            </HRTableRow>
          );
        })}
      </HRTable>

      <div className="flex justify-between items-center my-4">
        <p>Showing 1 to 10 of 10 entries</p>
        <div className="flex font-bold gap-1">
          <button className="p-2 bg-gray-200 rounded-[4px]">Previous</button>
          <p className="p-2 px-5 text-white  bg-primary">1</p>
          <button className=" p-2 bg-gray-200 rounded-[4px]">Next</button>
        </div>
      </div>
    </div>
  );
};

export default CandidateShortList;


