import { TShortlistInputField } from "../Type/type";


export const shortlistTableHeader: string[] = [
    "Sl",
    "Name",
    "Candidate ID",
    "Job Position",
    "Shortlist Date",
    "Interview Date",
    "Action",
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
    // {
    //   id: 4,
    //   label: "Shortlist Date",
    //   key: "shortlistDate",
    //   type: "date",
    //   placeholder: "Enter Shortlist Date",
    //   required:true
    // },
    {
      id: 5,
      label: "Interview Date",
      key: "interviewDate",
      type: "date",
      placeholder: "Enter Interview Date",
      required:true
    }
  ];