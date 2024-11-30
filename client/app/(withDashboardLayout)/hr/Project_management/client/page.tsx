"use client"
/* eslint-disable @typescript-eslint/no-explicit-any */
import HRIconsButton from "@/app/(withDashboardLayout)/components/UI/HRIconsButton";
import HRTableRow from "@/app/components/Table/HRTableRow";
import { Button } from "@nextui-org/react";
import { FaTrash } from "react-icons/fa";
import HRTable from "@/app/components/Table/HRTable";
import CreateClient from "./components/CreateClient";
import { useDeleteClientMutation, useGetAllClientsQuery } from "@/app/Redux/api/clientApi";
import UpdateClientModal from "./components/UpdateClientModal";


const ClientsPage = () => {
   const tableHeader = ["SL", "Client Name", "Company Name", "Email", "Country", "Action"];
   const {data} = useGetAllClientsQuery({});
   const clients = data?.data;
   const [deleteClient, {isSuccess, isLoading}] = useDeleteClientMutation();
   const clientDelete = (id:any) =>{
    deleteClient(id)
  }
   if(isLoading){
      <p>Loading....</p>
    }
    if(isSuccess){
      <p>Success....</p>
    }
  //  const clients = [
  //   { id: 1, client_name: "Finance", company_name: "PingWheel", email: "ping@gmail.com", country: "BD", status: "Inactive" },
  //   { id: 2, client_name: "Staff", company_name: "Wafe Life", email: "wafe@gmail.com", country: "BD", status: "Active" },
  //   { id: 3, client_name: "Internal Audit Control", company_name: "Young Coders", email: "coders@gmail.com", country: "BD", status: "Active" },
  // ];
  return (
     <div className="min-h-[89vh]">
      {/* <PageHeader item={pageHeaderData} /> */}

      <div className="bg-white rounded-[3px] mt-4 px-6 py-4">
        <CreateClient />
        <HRTable tableHeader={tableHeader}>
          {clients?.map((client:any, i: number) => (
            <tr
              className={`${i % 2 === 0 ? "bg-gray-100" : ""} hover:bg-gray-50`}
              key={client.id}
            >
              <HRTableRow>{i+1}</HRTableRow>
              <HRTableRow>{client?.clientName}</HRTableRow>
              <HRTableRow>{client?.companyName}</HRTableRow>
              <HRTableRow>{client?.email}</HRTableRow>
              <HRTableRow>{client?.country}</HRTableRow>
              <HRTableRow>
                <Button
                  size="sm"
                  className="h-6 text-sm text-white bg-primary rounded-[4px]"
                >
                  {client?.status}
                </Button>
              </HRTableRow>
              <HRTableRow>
                <div className="flex items-center gap-2">
                  {/* <HRIconsButton className="bg-blue-100 text-blue-500 border border-blue-500">
                    <FaEdit className="text-base" />
                  </HRIconsButton> */}
                  <UpdateClientModal clientId={client?.id}/>
                  <HRIconsButton className="bg-red-100 border border-red-500 text-red-500">
                    <FaTrash className="text-base" onClick={() =>clientDelete(client?.id)}/>
                  </HRIconsButton>
                </div>
              </HRTableRow>
            </tr>
          ))}
        </HRTable>
      </div>
    </div>
  );
};

export default ClientsPage;
