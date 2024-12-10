export const selectionInputFields = [
    // { id: 1, label: "Name", key: "name", type: "text", placeholder: "Enter name",required:true },
    {
      id: 2,
      label: "Candidate ID",
      key: "candidateId",
      type: "text",
      placeholder: "Enter candidate ID"
      ,required:true
    },
    // {
    //   id: 3,
    //   label: "Employee ID",
    //   key: "employeeId",
    //   type: "text",
    //   placeholder: "Enter employee ID",
    //   required:true
    // },
    {
      id: 3,
      label: "Interview ID",
      key: "interviewId",
      type: "text",
      placeholder: "Enter Interview ID",
      required:true
    },
   
    {
      id: 5,
      label: "Selection Terms",
      key: "selectionTerms",
      type: "text",
      placeholder: "Enter selection terms",
      required:true
    }
];

export   const  selectionTableHeader:string[] = [
    "SL",
    "Name",
    "Candidate ID",
    "Employee ID",
    "Position",
    "Selection Terms",
    "Action",
  ];