export type TCandidateList ={
    id: number|string;
    name: string;
    candidateId: string;
    photograph: string;
    email: string;
    ssn: string;
    phone: string;
}
export type TCandidateSelection = {
    id: number|string;
    name: string;
    candidateId: string;
    employeeId: string;
    position: string;
    selectionTerms: string;
}
export type TShortList = {
    id: number|string;
    name: string;
    candidateId: string;
    jobPosition: string;
    shortlistDate: string;
    interviewDate: string;
}
export type TInterview = {
    id: number;
    name: string;
    candidateId: string;
    jobPosition: string;
    interviewDate: string;
    vivaMarks: number;
    writtenMarks: number;
    mcqTotalMarks: number;
    totalMarks: number;
    isSelected: string;
}
export type TInterviewInputField = {
    id: number;       
    label: string;    
    key: string;      
    type: string;     
    placeholder: string;
    required:boolean;
  };
  
export type TCandidateInputField = {
    id: number;       
    label: string;    
    key: string;      
    type: string;     
    placeholder: string;
    required:boolean;
  };

export type TSelectionInputField = {
    id: number;       
    label: string;    
    key: string;      
    type: string;     
    placeholder: string;
    required:boolean;
  };

export type TShortlistInputField = {
    id: number;       
    label: string;    
    key: string;      
    type: string;     
    placeholder: string;
    required:boolean;
  };
  