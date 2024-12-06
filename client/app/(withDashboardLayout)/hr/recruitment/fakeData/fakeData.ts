import { TCandidateShortList } from "../candidate_shortlist/page";
import { TInterview } from "../interview/page";

export const candidates = [
    {
      id: 1,
      name: "Cecilia Burris",
      candidateId: "5223518193",
      photograph: "No Preview",
      email: "vowugekoz@mailinator.com",
      ssn: "Animi iusto in recu",
      phone: "+1 (251) 189-3327",
    },
    {
      id: 2,
      name: "Suresh Raj",
      candidateId: "2978076069",
      photograph: "No Preview",
      email: "sassj@gmail.com",
      ssn: "",
      phone: "26523333",
    },
    {
      id: 3,
      name: "Nayeem Iidam",
      candidateId: "8899529820",
      photograph: "No Preview",
      email: "nayem010@gmail.com",
      ssn: "",
      phone: "01793526855",
    },
    {
      id: 4,
      name: "Indira Rowe",
      candidateId: "8104675907",
      photograph: "No Preview",
      email: "nifiti@mailinator.com",
      ssn: "Rem magni quod ipsa",
      phone: "+1 (354) 793-4648",
    },
    {
      id: 5,
      name: "afaf adasdasd",
      candidateId: "2975972997",
      photograph: "No Preview",
      email: "admin@cf.com",
      ssn: "",
      phone: "12345678",
    },
  ];

  export const candidateShortlist:TCandidateShortList[] = [
    {
      id: 1,
      name: "John Doe",
      candidateId: "CND001",
      jobPosition: "Software Engineer",
      shortlistDate: "2024-11-20",
      interviewDate: "2024-11-27",
    },
    {
      id: 2,
      name: "Jane Smith",
      candidateId: "CND002",
      jobPosition: "Data Analyst",
      shortlistDate: "2024-11-21",
      interviewDate: "2024-11-28",
    },
  ];
  
  export const interView:TInterview[] = [
    {
      id: 1,
      name: "John Doe",
      candidateId: "CND001",
      jobPosition: "Software Engineer",
      interviewDate: "2024-11-27",
      vivaMarks: 45,
      writtenTotalMarks: 85,
      mcqTotalMarks: 70,
      totalMarks: 200,
      selection: "Selected",
  
    },
    {
      id: 2,
      name: "Jane Smith",
      candidateId: "CND002",
      jobPosition: "Data Analyst",
      interviewDate: "2024-11-28",
      vivaMarks: 40,
      writtenTotalMarks: 75,
      mcqTotalMarks: 65,
      totalMarks: 180,
      selection: "Not Selected",
  
    },
    {
      id: 3,
      name: "Alice Johnson",
      candidateId: "CND003",
      jobPosition: "Project Manager",
      interviewDate: "2024-11-30",
      vivaMarks: 50,
      writtenTotalMarks: 90,
      mcqTotalMarks: 80,
      totalMarks: 220,
      selection: "Selected",
    },
  ];
  
   export const selection = [
    {
      id: 1,
      name: "John Doe",
      candidateId: "CAND123",
      employeeId: "EMP456",
      position: "Software Engineer",
      selectionTerms: "Permanent",
      action: "Edit",
    },
    {
      id: 2,
      name: "Jane Smith",
      candidateId: "CAND124",
      employeeId: "EMP457",
      position: "Data Analyst",
      selectionTerms: "Contractual",
      action: "Edit",
    },
    {
      id: 3,
      name: "Mark Johnson",
      candidateId: "CAND125",
      employeeId: "EMP458",
      position: "Project Manager",
      selectionTerms: "Permanent",
      action: "Edit",
    },
  ];
  