import HRSelect from "@/app/(withDashboardLayout)/components/UI/HRSelect";
import { Button, Divider } from "@nextui-org/react";
import {  FaPlusCircle } from "react-icons/fa";
import { limitCount } from "../fakeData/limitCount";
import HRForm from "@/app/components/Form/HRForm";
import HRInput from "@/app/components/Form/HRInput";
import ExcelCSVExport from "@/app/utils/ExcelAndCSV";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SearchAndModal = ({menuName,excelExportParamsData,handleSearch,setIsOpen,modalIsOpen,setLimit,searchTerm}:{menuName:string,excelExportParamsData:any, handleSearch:any,setIsOpen:any,modalIsOpen:boolean,setLimit:any,searchTerm:string}) => {
  const {data,baseFileName,isLoading}=excelExportParamsData
  return (
    <div className="mb-5">
      <div className="flex items-center justify-between flex-wrap pb-4 lg:gap-0 gap-2">
        <h2 className="font-semibold text-lg">{menuName} list</h2>
        <div className="flex items-center gap-1">
          {/*<Button
            size="sm"
            className="bg-primary rounded-[4px] text-sm text-white"
          >
            <FaFilter /> Filter
          </Button> */}
          <Button
          onClick={()=>setIsOpen(!modalIsOpen)}
            size="sm"
            className="bg-primary rounded-[4px] text-sm text-white"
          >
            <span  className="flex items-center gap-2"
            >
              <FaPlusCircle /> Add {menuName}
            </span>
          </Button>
        </div>
      </div>
      <Divider />

      <div className=" mt-5 flex items-center justify-between flex-wrap lg:gap-0 gap-2">
        <div className="flex items-center gap-1">
          <p>Show</p>
          <HRSelect data={limitCount} setLimit={setLimit} />
          <p>entries</p>
        </div>

        {data&&<div className="flex items-center">
          {/* <Button
            size="sm"
            className="bg-primary rounded-none text-sm mx-2 text-white"
          >
            <FaFileCsv /> CSV
          </Button> */}
          
          <ExcelCSVExport
      data={data?.data|| []}
      baseFileName={baseFileName}
      isLoading={isLoading}
    />
         

        </div>
        }
        <HRForm onSubmit={handleSearch}>
      <div className=" text-md font-semibold flex gap-1 items-center">
        <button className="border-none bg-none" type="submit">Search: </button>
        <HRInput
          type="text"
          className="border-gray-400 h-10 rounded-[5px]"
          defaultValue={searchTerm}
          placeholder= {`${menuName=="Notice Board"?"Search By Date":" Search By Candidate ID..."}`}
          name="search"
        />
      </div>
    </HRForm>
      </div>
    </div>
  );
};

export default SearchAndModal;