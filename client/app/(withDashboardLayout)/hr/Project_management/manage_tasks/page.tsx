import HRTable from "@/app/components/Table/HRTable";
import HRTableRow from "@/app/components/Table/HRTableRow";
import { Button } from "@nextui-org/react";
import TaskManageHeader from "./component/TaskManageHeader";


const TaskManagePage = () => {
   const tableHeader = ["SL", "Project Name", "Client Name", "Project Lead", "Approximate tasks", "Project Duration", "Action"];
   const tasks = [
    { id: 1, client_name: "Appstore App", Project_Name: "ivan Bird", Project_Lead: "Anamika", Approximate_tasks: "5", Project_Duration:"2 days", status: ["All Tasks", "Sprints"] },
    
  ];

  return (
     <div className="min-h-[89vh]">
      <div className="bg-white rounded-[3px] mt-4 px-6 py-4">
        <TaskManageHeader />
        <HRTable tableHeader={tableHeader}>
          {tasks?.map((task, i) => (
            <tr
              className={`${i % 2 === 0 ? "bg-gray-100" : ""} hover:bg-gray-50`}
              key={task.id}
            >
              <HRTableRow>{task.id}</HRTableRow>
              <HRTableRow>{task.Project_Name}</HRTableRow>
              <HRTableRow>{task.client_name}</HRTableRow>
              <HRTableRow>{task.Project_Lead}</HRTableRow>
              <HRTableRow>{task.Approximate_tasks}</HRTableRow>
              <HRTableRow>{task.Project_Duration}</HRTableRow>
              <HRTableRow>
                  <div className="flex items-center gap-2">
                    <Button
                      size="sm"
                      className="h-8 px-4 text-sm text-green bg-green-300 rounded hover:bg-green-600"
                    >
                      {task.status[0]}
                    </Button>
                    <Button
                      size="sm"
                      className="h-8 px-4 text-sm text-white bg-blue-500 rounded hover:bg-blue-600"
                    >
                      {task.status[1]}
                    </Button>
                  </div>
                </HRTableRow>
            </tr>
          ))}
        </HRTable>
      </div> 
    </div>
  );
};

export default TaskManagePage;
