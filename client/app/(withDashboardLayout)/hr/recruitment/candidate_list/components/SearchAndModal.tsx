/* eslint-disable @typescript-eslint/no-explicit-any */
import HRSelect from "@/app/(withDashboardLayout)/components/UI/HRSelect";
import { Button, Divider } from "@nextui-org/react";
import { FaFileCsv, FaFileExcel, FaPlusCircle } from "react-icons/fa";

import HRForm from "@/app/components/Form/HRForm";
import HRInput from "@/app/components/Form/HRInput";
import { limitCount } from "../../fakeData/limitCount";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SearchAndModal = ({
  menuName,
  handleSearch,
  setIsOpen,
  modalIsOpen,
}: {
  menuName: string;
  handleSearch: any;
  setIsOpen: any;
  modalIsOpen: any;
}) => {
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
            onClick={() => setIsOpen(!modalIsOpen)}
            size="sm"
            className="bg-primary rounded-[4px] text-sm text-white"
          >
            <span className="flex items-center gap-2">
              <FaPlusCircle /> Add {menuName}
            </span>
          </Button>
        </div>
      </div>
      <Divider />

      <div className="mt-6 flex items-center justify-between flex-wrap lg:gap-0 gap-2">
        <div className="flex items-center gap-1">
          <p>Show</p>
          <HRSelect data={limitCount} />
          <p>entries</p>
        </div>

        <div className="flex items-center">
          <Button
            size="sm"
            className="bg-primary rounded-none text-sm mx-2 text-white"
          >
            <FaFileCsv /> CSV
          </Button>
          <Button
            size="sm"
            className="bg-primary rounded-none text-sm text-white"
          >
            <FaFileExcel /> Excel
          </Button>
        </div>

        <HRForm onSubmit={handleSearch}>
          <div className="mb-5 text-md font-semibold flex gap-1 items-center">
            <label>Search: </label>
            <HRInput
              type="text"
              className="border-primary h-10 rounded-[5px]"
              placeholder="Notice Search..."
              name="search"
            />
          </div>
        </HRForm>
      </div>
    </div>
  );
};

export default SearchAndModal;
