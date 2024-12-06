import HRTable from "@/app/components/Table/HRTable";
import Loader from "@/app/components/utils/Loader";
import { useDeleteCandidateMutation, useGetAllCandidateQuery } from "@/app/Redux/api/candidateListApi";
import Pagination from "../../component/Pagination";
import { SetStateAction, useState } from "react";
import { selectionTableHeader } from "../fakeData";
import { TCandidateSelection } from "../../Type/type";
import UpdateSelectedCandidate from "./UpdateSelectedCandidate";

const CandidateData=({data}:{data:TCandidateSelection[]})=>{

    const { isLoading } = useGetAllCandidateQuery({});
    const [deleteCandidate] = useDeleteCandidateMutation({});
    const [id, setId]=useState<SetStateAction<string|number>>('')
  const [updateModalIsOpen, setIsUpdateModal]=useState(false)
    if (isLoading) {
      return <Loader />;
    }
  
    if (data?.length === 0) {
      return (
        <tr>
          <td colSpan={9} className="text-center">
            No Data Found
          </td>
        </tr>
      );
    }
    const handleDelete = async (id: string|number) => {
        const res = await deleteCandidate(id);
        console.log(res);
      };
      const handleEdit = (id: number | string) => {
        setId(id)
        setIsUpdateModal(!updateModalIsOpen);
        console.log(id);
    
      };
    
    return(
        <div>
          <UpdateSelectedCandidate setIsOpen={setIsUpdateModal} modalIsOpen={updateModalIsOpen} id={id}/>
                <HRTable tableHeader={selectionTableHeader}>
        {data.slice(0, 10).map((candidate, index) => {
          return (
            <tr
              className={`${
                Number(index) % 2 != 0 && "bg-[#F2F2F2]"
              } border-1 w-[100%] `}
              key={candidate?.id}
            >
              <td className="bg-[#FAFAFA]  border-r border-gray-200 px-3">
                {index + 1}
              </td>
              <td className="py-2 w-1/6 border-r border-gray-200 px-3">
                {candidate?.name}
              </td>
              <td className="py-2 w-1/6 border-r border-gray-200 px-3">
                {candidate?.candidateId}
              </td>
              <td className="py-2 w-1/6 border-r border-gray-200 px-3">
                {candidate?.position}
              </td>
              <td className="py-2 w-1/6 border-r border-gray-200 px-3">
                {candidate?.selectionTerms}
              </td>
             
            
              <td className="w-1/6 border-r border-gray-200 px-3">
                <ul className="flex gap-2 items-center  p-2 ">
                  <li
                    onClick={() => handleEdit(candidate?.id)}
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
                    onClick={() => handleDelete(candidate?.id)}
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
            </tr>
          );
        })}
      </HRTable>
      <Pagination data={data}/>
        </div>
    )
}

export default CandidateData