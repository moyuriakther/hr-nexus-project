export type TCandidateList ={
    id: number|string;
    name: string;
    candidateId: string;
    photograph: string;
    email: string;
    ssn: string;
    phone: string;
}
export type TCandidateInputField = {
    id: number;       
    label: string;    
    key: string;      
    type: string;     
    placeholder: string;
    required:boolean;
  };