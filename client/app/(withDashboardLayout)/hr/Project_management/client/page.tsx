import HRIconsButton from "@/app/(withDashboardLayout)/components/UI/HRIconsButton";
import HRTableRow from "@/app/components/Table/HRTableRow";
import { Button } from "@nextui-org/react";
import { FaEdit, FaTrash } from "react-icons/fa";
import HRTable from "@/app/components/Table/HRTable";
import CreateClient from "./components/CreateClient";


const ClientsPage = () => {
   const tableHeader = ["SL", "Client Name", "Company Name", "Email", "Country", "Action"];
   const clients = [
    { id: 1, client_name: "Finance", company_name: "PingWheel", email: "ping@gmail.com", country: "BD", status: "Inactive" },
    { id: 2, client_name: "Staff", company_name: "Wafe Life", email: "wafe@gmail.com", country: "BD", status: "Active" },
    { id: 3, client_name: "Internal Audit Control", company_name: "Young Coders", email: "coders@gmail.com", country: "BD", status: "Active" },
  ];
  return (
     <div className="min-h-[89vh]">
      {/* <PageHeader item={pageHeaderData} /> */}

      <div className="bg-white rounded-[3px] mt-4 px-6 py-4">
        <CreateClient />
        <HRTable tableHeader={tableHeader}>
          {clients?.map((client, i) => (
            <tr
              className={`${i % 2 === 0 ? "bg-gray-100" : ""} hover:bg-gray-50`}
              key={client.id}
            >
              <HRTableRow>{client.id}</HRTableRow>
              <HRTableRow>{client.client_name}</HRTableRow>
              <HRTableRow>{client.company_name}</HRTableRow>
              <HRTableRow>{client.email}</HRTableRow>
              <HRTableRow>{client.country}</HRTableRow>
              <HRTableRow>
                <Button
                  size="sm"
                  className="h-6 text-sm text-white bg-primary rounded-[4px]"
                >
                  {client.status}
                </Button>
              </HRTableRow>
              <HRTableRow>
                <div className="flex items-center gap-2">
                  <HRIconsButton className="bg-blue-100 text-blue-500 border border-blue-500">
                    <FaEdit className="text-base" />
                  </HRIconsButton>
                  <HRIconsButton className="bg-red-100 border border-red-500 text-red-500">
                    <FaTrash className="text-base" />
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
