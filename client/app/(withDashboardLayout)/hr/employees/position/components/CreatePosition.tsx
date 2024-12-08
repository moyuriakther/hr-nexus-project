"use client";

import HRSelect from "@/app/(withDashboardLayout)/components/UI/HRSelect";
import { Divider } from "@nextui-org/react";
import CreatePositionModalContent from "./CreatePositionModalContent";
import { limitCount } from "./fakeData/limitCount";
import { useState } from "react";
import { useGetAllPositionQuery } from "@/app/Redux/api/positionApi";

const CreatePosition = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [limit, setLimit] = useState<string>("10");
  const { data: positions } = useGetAllPositionQuery([
    {
      name: "limit",
      value: limit,
    },
    {
      name: "page",
      value: currentPage,
    },
    {
      name: "searchTerm",
      value: searchTerm,
    },
  ]);

  return (
    <div className="mb-5">
      <div className="flex items-center justify-between pb-4">
        <h2 className="font-semibold text-lg">Position list</h2>
        <CreatePositionModalContent />
      </div>
      <Divider />

      <div className="mt-6 flex items-center justify-between flex-wrap lg:gap-0 gap-2">
        <div className="flex items-center gap-1">
          <p>Show</p>
          <HRSelect setLimit={setLimit} data={limitCount} />
          <p>entries</p>
        </div>
        <div className="flex items-center gap-1">
          <p>Search: </p>
          <input
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border rounded-[4px] py-1 focus:outline-primary outline-1 transition-all duration-200"
          />
        </div>
      </div>
    </div>
  );
};

export default CreatePosition;
