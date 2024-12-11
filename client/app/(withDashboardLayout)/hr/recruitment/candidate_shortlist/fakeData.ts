import { getUserFromLocalStorage } from "@/app/utils/localStorage";
import { TShortlistInputField } from "../Type/type";
import { USER_ROLE } from "@/app/constants";


const user=getUserFromLocalStorage()
export const shortlistTableHeader: string[] = [
    "Sl",
    "Name",
    "Candidate ID",
    "Job Position",
    "Shortlist Date",
    "Interview Date",
    " Meeting Link",
    `${user?.role === USER_ROLE.ADMIN ? "Action" : ""}`,
  ];
  export   const shortlistInputFields:TShortlistInputField[] = [
    // { id: 1, label: "Name", key: "name", type: "text", placeholder: "Enter name" ,required:true},
    {
      id: 2,
      label: "Candidate ID",
      key: "candidateId",
      type: "text",
      placeholder: "Enter candidate ID",
      required:true
    },
    // {
    //   id: 3,
    //   label: "Job Position",
    //   key: "jobPosition",
    //   type: "text",
    //   placeholder: "Enter Job Position",
    //   required:true
    // },
    {
      id: 4,
      label: "Meeting Link",
      key: "meetingLink",
      type: "text",
      placeholder: "Enter Meeting Link",
      required:true
    },
    {
      id: 5,
      label: "Interview Date",
      key: "interviewDate",
      type: "date",
      placeholder: "Enter Interview Date",
      required:true
    }
  ];