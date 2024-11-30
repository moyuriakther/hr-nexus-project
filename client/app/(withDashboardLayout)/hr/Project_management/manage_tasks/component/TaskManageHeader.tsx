/* eslint-disable @typescript-eslint/no-explicit-any */
import HRSelect from "@/app/(withDashboardLayout)/components/UI/HRSelect";
import { Divider } from "@nextui-org/react";
import { limitCount } from "../../../employees/position/components/fakeData/limitCount";
import { updateFilters } from "@/app/Redux/api/searchSlice";
import { useEffect, useState } from "react";
import { useAppDispatch } from "@/app/Redux/hook";


const TaskManageHeader = () => {
  const [search, setSearch] = useState("");
   const dispatch = useAppDispatch();
   useEffect(() => {
    dispatch(updateFilters({ search: search }));
  }, [dispatch, search]);
    const handleSearch = (e:any) => {
    e.preventDefault();
    dispatch(updateFilters({ search: search }));
    console.log(search);
  };
  return (
    <div className="mb-5">
      <div className="flex items-center justify-between pb-4">
        <h2 className="font-semibold text-lg">Manage Tasks</h2>
      </div>
      <Divider />
   <form onSubmit={handleSearch}>
      <div className="mt-6 flex items-center justify-between flex-wrap lg:gap-0 gap-2">
        <div className="flex items-center gap-1">
          <p>Show</p>
          <HRSelect data={limitCount} />
          <p>entries</p>
        </div>
        <div className="flex items-center gap-1">
          <p>Search: </p>
          <input value={search}
                      onChange={(e) => setSearch(e.target.value)} className="border rounded-[4px] py-1 focus:outline-primary outline-1 transition-all duration-200" />
        </div>
      </div>
      </form>
    </div>
  );
};

export default TaskManageHeader;
