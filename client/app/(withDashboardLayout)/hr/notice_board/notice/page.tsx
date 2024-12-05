// "use client";

<<<<<<< HEAD
import HRForm from "@/app/components/Form/HRForm";
import HRInput from "@/app/components/Form/HRInput";
import HRModal from "@/app/components/Modal/HRModal";
import SearchBox from "@/app/components/SearchBox";
import HRTable from "@/app/components/Table/HRTable";
import { Button } from "@nextui-org/react";
import React, { useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import {AllNoticeData, noticeModalInputFiled} from './fakeData'
type TNoticeData = {
  id: string | number;
  noticeType: string;
  description: string;
  noticeDate: string;
  noticeBy: string;
};
// type TNoticeModalInputField = {
//     name: keyof TNoticeData 
=======
// import HRForm from "@/app/components/Form/HRForm";
// import HRInput from "@/app/components/Form/HRInput";
// import HRModal from "@/app/components/Modal/HRModal";
// import SearchBox from "@/app/components/SearchBox";
// import HRTable from "@/app/components/Table/HRTable";
// import { Button } from "@nextui-org/react";
// import React, { useState } from "react";
// import { FieldValues, SubmitHandler } from "react-hook-form";
// import { toast } from "sonner";

// type TNoticeData = {
//   id: string | number;
//   noticeType: string;
//   description: string;
//   noticeDate: string;
//   noticeBy: string;
// };
// type TNoticeModalInputField = {
//     name: keyof TNoticeData
>>>>>>> masum
//     label: string;
//     type: string;
//     placeholder: string;
//     required: boolean;
//   };
<<<<<<< HEAD
=======
// export const AllNoticeData = [
//   {
//     id: 1,
//     noticeType: "sfsfsf",
//     description: "dsffdsf",
//     noticeDate: "2024-10-22",
//     noticeBy: "sdfdfsf",
//   },
//   {
//     id: 2,
//     noticeType: "Testing",
//     description: "Testing",
//     noticeDate: "2024-10-23",
//     noticeBy: "Boss",
//   },
//   {
//     id: 3,
//     noticeType: "sample",
//     description: "sample",
//     noticeDate: "2024-10-13",
//     noticeBy: "Y",
//   },
//   {
//     id: 4,
//     noticeType: "Meeting",
//     description: "Get ready for meeting at 6",
//     noticeDate: "2024-08-22",
//     noticeBy: "Siddique Abdullah",
//   },
//   {
//     id: 5,
//     noticeType: "Immediate management meeting",
//     description: "management decision",
//     noticeDate: "2024-07-11",
//     noticeBy: "Mr Michael",
//   },
//   {
//     id: 6,
//     noticeType: "Meeting",
//     description: "our organization will organize an annual report",
//     noticeDate: "2024-07-10",
//     noticeBy: "Maisha Lucy Zamora Gonzales",
//   },
//   {
//     id: 7,
//     noticeType: "Admin Notice",
//     description: "Admin Notice",
//     noticeDate: "2024-06-05",
//     noticeBy: "from management decision",
//   },
//   {
//     id: 8,
//     noticeType: "Reply 'stop' at any time to opt out",
//     description: "Facilis mollit harum",
//     noticeDate: "2026-11-01",
//     noticeBy: "Occaecat tempore of",
//   },
//   {
//     id: 9,
//     noticeType: "Sed itaque officiis",
//     description: "Fuga In eaque disti",
//     noticeDate: "2024-08-28",
//     noticeBy: "Voluptate culpa labo",
//   },
//   {
//     id: 10,
//     noticeType: "Holiday Notice",
//     description: "Office will remain closed for maintenance",
//     noticeDate: "2024-12-01",
//     noticeBy: "Admin Team",
//   },
//   {
//     id: 11,
//     noticeType: "Team Building Event",
//     description: "Join us for a fun-filled event",
//     noticeDate: "2024-12-10",
//     noticeBy: "HR Department",
//   },
//   {
//     id: 12,
//     noticeType: "System Downtime",
//     description: "Scheduled system maintenance on Sunday",
//     noticeDate: "2024-11-30",
//     noticeBy: "IT Team",
//   },
//   {
//     id: 13,
//     noticeType: "Security Update",
//     description: "Ensure to update your passwords",
//     noticeDate: "2024-11-20",
//     noticeBy: "Security Team",
//   },
//   {
//     id: 14,
//     noticeType: "Employee Feedback",
//     description: "Submit your feedback by the end of the month",
//     noticeDate: "2024-11-25",
//     noticeBy: "Management",
//   },
//   {
//     id: 15,
//     noticeType: "Performance Review",
//     description: "Annual performance review starts next week",
//     noticeDate: "2024-12-05",
//     noticeBy: "HR Manager",
//   },
// ];

// export const noticeModalInputFiled :TNoticeModalInputField[]= [
//   {
//     name: "noticeType",
//     label: "Notice type",
//     type: "text",
//     placeholder: "Notice type",
//     required: true,
//   },
//   {
//     name: "description",
//     label: "Notice description",
//     type: "text",
//     placeholder: "Notice description",
//     required: true,
//   },
//   {
//     name: "noticeDate",
//     label: "Notice date",
//     type: "date",
//     placeholder: "Notice date",
//     required: true,
//   },
// //   {
// //     name: "noticeAttachment",
// //     label: "Notice attachment",
// //     type: "file",
// //     placeholder: "Choose File",
// //     required: true,
// //   },
//   {
//     name: "noticeBy",
//     label: "Notice by",
//     type: "text",
//     placeholder: "Notice by",
//     required: true,
//   },
// ];
// const NoticePage = () => {
//   const [noticeData, setNoticeData] = useState<TNoticeData[]>(AllNoticeData);
//   const [editNoticeData, setEditNoticeData]=useState<Partial<TNoticeData>>({id:"",description:"",noticeBy:"",noticeDate:"",noticeType:""})
//   const [modalIsOpen, setIsOpen] = useState(false);
//   const tableHeader = [
//     "SI",
//     "Notice type",
//     "Description",
//     "Notice date",
//     "Notice by",
//     "Action",
//   ];
//   const handleSearchNotice: SubmitHandler<FieldValues> = async (data) => {
//     try {
//       console.log(data);
//       // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     } catch (error: any) {
//       toast.error(error.message);
//     }
//   };
//   const HandleEditNotice = (id: number | string) => {
//     setIsOpen(!modalIsOpen);
//     console.log(id);
//     const editNotice=noticeData.find(notice=>notice.id===id)
//     if(editNotice){
//         setEditNoticeData(editNotice)
//     }else{
//         console.log("notice not found")
//     }

//   };
//   const HandleNoticeDelete = (id: number | string) => {
//     const updateNoticeData = noticeData.filter((notice) => notice.id !== id);
//     setNoticeData(updateNoticeData);
//   };
//   return (
//     <div className="bg-white w-full min-h-screen rounded-2xl p-4 ">
//       {/* Notice Top Bar */}
//       <div className="flex  justify-between items-center border-b-2 pb-2">
//         <h3 className="text-md font-semibold">Notice list</h3>
//         <Button
//           className="bg-primary text-md font-semibold text-secondary"
//           onClick={() => setIsOpen(!modalIsOpen)}
//         >
//           Add Notice
//         </Button>
//       </div>
//       {/* Add New Notice Modal */}
//       <HRModal
//         modalIsOpen={modalIsOpen}
//         setIsOpen={setIsOpen}
//         modalTitle="New notice"
//       >
//         <HRForm onSubmit={handleSearchNotice}>
//           {noticeModalInputFiled.map((inputField, index) => {
//             return (
//               <div
//                 key={index}
//                 className="mb-5 text-md font-semibold flex  gap-1 items-center"
//               >
//                 <label className="col-span-1 w-[200px]">{inputField?.label}</label>
//                 <HRInput
//                   type={inputField?.type}
//                   className="border-primary h-10 rounded-[5px]  min-w-[340px]"
//                   placeholder={inputField?.placeholder}
//                   name={`${inputField?.name}`}
//                   required={inputField?.required}
//                   defaultValue={editNoticeData[inputField?.name as keyof TNoticeData]||""}
//                 />
//               </div>
//             );
//           })}
//           <div className="flex gap-2 justify-end">
//             <button
//               onClick={() => setIsOpen(false)}
//               className="bg-[#DC3545] p-2 px-3 text-white rounded"
//             >
//               Close
//             </button>
//             <button type="submit" className="bg-primary p-2 px-3 text-white rounded">
//               Save
//             </button>
//           </div>
//         </HRForm>
//       </HRModal>

//       <div className="flex justify-between items-center pt-2 pb-2 text-md">
//         <span>
//           Show{" "}
//           <input
//             className=" border-2 text-center mx-1 p-1 w-[50px]"
//             type="number"
//             defaultValue={10}
//           />{" "}
//           entries
//         </span>
//         <SearchBox handleSearchNotice={handleSearchNotice}></SearchBox>
//       </div>

//       {/* All Notice */}
//       <HRTable tableHeader={tableHeader}>
//         {noticeData.slice(0, 10).map((notice, index) => {
//           return (
//             <tr
//               className={`${
//                 Number(index) % 2 != 0 && "bg-[#F2F2F2]"
//               } border-1 w-[100%] `}
//               key={notice?.id}
//             >
//               <td className="bg-[#FAFAFA]  border-r border-gray-200 px-3">
//                 {index + 1}
//               </td>
//               <td className="py-2 w-1/6 border-r border-gray-200 px-3">
//                 {notice?.noticeType}
//               </td>
//               <td className="py-2 w-2/6 border-r border-gray-200 px-3">
//                 {notice?.description}
//               </td>
//               <td className="py-2 w-1/6 border-r border-gray-200 px-3">
//                 {notice?.noticeDate}
//               </td>
//               <td className="py-2 w-1/6 border-r border-gray-200 px-3">
//                 {notice?.noticeBy}
//               </td>
//               <td className="w-1/6 border-r border-gray-200 px-3">
//                 <ul className="flex gap-2 items-center  p-2 ">
//                   <li
//                     onClick={() => HandleEditNotice(notice?.id)}
//                     className="cursor-pointer  bg-[#DAE4F3] border-2 border-[#0D6EFD] rounded-lg p-1"
//                   >
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       viewBox="0 0 20 20"
//                       fill="#0D6EFD"
//                       className="size-5"
//                     >
//                       <path d="m5.433 13.917 1.262-3.155A4 4 0 0 1 7.58 9.42l6.92-6.918a2.121 2.121 0 0 1 3 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 0 1-.65-.65Z" />
//                       <path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0 0 10 3H4.75A2.75 2.75 0 0 0 2 5.75v9.5A2.75 2.75 0 0 0 4.75 18h9.5A2.75 2.75 0 0 0 17 15.25V10a.75.75 0 0 0-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5Z" />
//                     </svg>
//                   </li>
//                   <li
//                     className="cursor-pointer  p-1 bg-[#EFDEE0] border-2 border-[#DC3545] rounded-lg"
//                     onClick={() => HandleNoticeDelete(notice?.id)}
//                   >
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       viewBox="0 0 20 20"
//                       fill="#DC3545"
//                       className="size-5"
//                     >
//                       <path
//                         fill-rule="evenodd"
//                         d="M8.75 1A2.75 2.75 0 0 0 6 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 1 0 .23 1.482l.149-.022.841 10.518A2.75 2.75 0 0 0 7.596 19h4.807a2.75 2.75 0 0 0 2.742-2.53l.841-10.52.149.023a.75.75 0 0 0 .23-1.482A41.03 41.03 0 0 0 14 4.193V3.75A2.75 2.75 0 0 0 11.25 1h-2.5ZM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4ZM8.58 7.72a.75.75 0 0 0-1.5.06l.3 7.5a.75.75 0 1 0 1.5-.06l-.3-7.5Zm4.34.06a.75.75 0 1 0-1.5-.06l-.3 7.5a.75.75 0 1 0 1.5.06l.3-7.5Z"
//                         clip-rule="evenodd"
//                       />
//                     </svg>
//                   </li>
//                 </ul>
//               </td>
//             </tr>
//           );
//         })}
//       </HRTable>

//       <div className="flex justify-between items-center my-4">
//         <p>Showing 1 to 10 of 10 entries</p>
//         <div className="flex font-bold gap-1">
//           <button className="p-2 bg-gray-200 rounded-[4px]">Previous</button>
//           <p className="p-2 px-5 text-white  bg-primary">1</p>
//           <button className=" p-2 bg-gray-200 rounded-[4px]">Next</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NoticePage;

import React from "react";
>>>>>>> masum

const NoticePage = () => {
  return <div>here is notice page</div>;
};

export default NoticePage;
