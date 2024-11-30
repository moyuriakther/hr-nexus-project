/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import HRTable from "@/app/components/Table/HRTable";
import HRTableRow from "@/app/components/Table/HRTableRow";
import TaskManageHeader from "./component/TaskManageHeader";
import { useGetAllProjectsQuery } from "@/app/Redux/api/projectsApi";
import { useAppSelector } from "@/app/Redux/hook";


const TaskManagePage = () => {
  const filters = useAppSelector((state) => state.filters);
  const { search } = filters;
  const searchTask = (task: any) => {
  if (search) {
    const fieldsToSearch = [
      task?.projectName,
      task?.clientName,
      task?.companyName,
      task?.projectDuration,
    ];
    return fieldsToSearch.some((field) =>
      field?.toString().toLowerCase().includes(search.trim().toLowerCase())
    );
  }
  return true;
};
   const tableHeader = ["SL", "Project Name", "Client Name", "Company Name", "Approximate tasks", "Project Duration"];
   const {data} = useGetAllProjectsQuery({})
   const tasks = data?.data

  return (
     <div className="min-h-[89vh]">
      <div className="bg-white rounded-[3px] mt-4 px-6 py-4">
        <TaskManageHeader />
        <HRTable tableHeader={tableHeader}>
          {tasks?.filter(searchTask)?.map((task:any, i:number) => (
            <tr
              className={`${i % 2 === 0 ? "bg-gray-100" : ""} hover:bg-gray-50`}
              key={task.id}
            >
              <HRTableRow>{i + 1}</HRTableRow>
              <HRTableRow>{task?.projectName}</HRTableRow>
              <HRTableRow>{task?.client?.clientName}</HRTableRow>
              <HRTableRow>{task?.client?.companyName}</HRTableRow>
              <HRTableRow>{task?.approximateTasks}</HRTableRow>
              <HRTableRow>{task?.projectDuration}</HRTableRow>
              {/* <HRTableRow>
                  <div className="flex items-center gap-2">
                    <Button
                      size="sm"
                      className="h-8 px-4 text-sm text-green bg-green-300 rounded hover:bg-green-600"
                    >
                      {task?.status[0]}
                    </Button>
                    <Button
                      size="sm"
                      className="h-8 px-4 text-sm text-white bg-blue-500 rounded hover:bg-blue-600"
                    >
                      {task?.status[1]}
                    </Button>
                  </div>
                </HRTableRow> */}
            </tr>
          ))}
        </HRTable>
      </div> 
    </div>
  );
};

export default TaskManagePage;
