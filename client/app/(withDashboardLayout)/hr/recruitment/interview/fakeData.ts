import { TInterviewInputField } from "../Type/type";


export   const interviewTableHeader: string[] = [
    "Sl",
    "Name",
    "Candidate ID",
    "Job Position",
    "Interview Date",
    "Viva Marks",
    "Written Marks",
    "MCQ Marks",
    "Total Marks",
    "Selection",
    "Action",
  ];

  export   const interviewInputFiled: TInterviewInputField[] = [
    { id: 1, label: "Name", key: "name", type: "text", placeholder: "Enter name" ,required:true},
    {
      id: 2,
      label: "Candidate ID (Shortlisted Candidate)",
      key: "candidateId",
      type: "text",
      placeholder: "Enter candidate ID",
      required:true
    },
    {
      id: 3,
      label: "Job Position",
      key: "jobPosition",
      type: "text",
      placeholder: "Enter Job Position",
      required:true
    },
   
    {
      id: 4,
      label: "Interview Date",
      key: "interviewDate",
      type: "text",
      placeholder: "Enter Interview Date",
      required:true
    },
    {
        id: 6,
        label: "Viva Marks",
        key: "vivaMarks",
        type: "number",
        placeholder: "Enter viva marks",
        required:true
      },
      {
        id: 7,
        label: "Written Total Marks",
        key: "writtenTotalMarks",
        type: "number",
        placeholder: "Enter written total marks",
        required:true
      },
      {
        id: 8,
        label: "MCQ Total Marks",
        key: "mcqTotalMarks",
        type: "number",
        placeholder: "Enter MCQ total marks",
        required:true
      },
      {
        id: 9,
        label: "Total Marks",
        key: "totalMarks",
        type: "number",
        placeholder: "Enter total marks",
        required:true
      },
      {
        id: 10,
        label: "Selection",
        key: "selection",
        type: "text",
        placeholder: "Enter selection status",
        required:true
      },
  ];