"use client"
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetAllProjectsQuery } from "@/app/Redux/api/projectsApi";
import { Divider } from "@nextui-org/react";


const TeamMemberPage = () => {
const {data: projects} = useGetAllProjectsQuery({})
  return (
     <div className="min-h-[89vh] ">
      <div className="bg-gray-100 flex justify-start ">
      <div className="bg-white shadow-md w-full rounded">
        {/* Header */}
        <h2 className="text-lg font-semibold text-gray-800 mb-3 pl-6 pt-6">
          Team Member Report
        </h2>
        <Divider />
        {/* Form */}
        <form className="flex items-center flex-col sm:flex-row gap-4 max-w-2xl mt-4 pl-6 pb-6">
          {/* Select Dropdown 1 */}
          <select
            className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            defaultValue=""
          >
            {
              projects?.data?.map((project:any) =><><option value={project?.projectName}>{project?.projectName}</option></>)
            }
            {/* <option value="" disabled>
              Select One...
            </option>
            <option value="team1">Team 1</option>
            <option value="team2">Team 2</option> */}
          </select>

          {/* Select Dropdown 2 */}
          <select
            className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            defaultValue=""
          >
             {
              projects?.data?.map((project:any) =><><option value={project?.client?.clientName}>{project?.client?.clientName}</option></>)
            }
          </select>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 w-full sm:w-auto"
          >
            Find
          </button>
        </form>
      </div>
    </div>
 </div>
  );
};

export default TeamMemberPage;
