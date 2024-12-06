export  const candidateTableHeader = [
  "SI",
  "Candidate Name",
  "Candidate ID",
  "Photograph",
  "Email",
  "SSN",
  "Phone",
  "Action"
];

export const candidateInputFields = [
  { id: 1, label: "Name", key: "name", type: "text", placeholder: "Enter name" ,required:true},
  {
    id: 2,
    label: "Candidate ID",
    key: "candidateId",
    type: "text",
    placeholder: "Enter candidate ID",
    required:true
  },
  {
    id: 3,
    label: "Photograph",
    key: "photograph",
    type: "file",
    placeholder: "Enter photograph URL",
    required:true
  },
  {
    id: 4,
    label: "Email Address",
    key: "email",
    type: "email",
    placeholder: "Enter email address",
    required:true
  },
  {
    id: 5,
    label: "SSN",
    key: "ssn",
    type: "text",
    placeholder: "Enter SSN",
    required:true
  },
  {
    id: 6,
    label: "Phone",
    key: "phone",
    type: "tel",
    placeholder: "Enter phone number",
    required:true
  },
];