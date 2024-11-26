


const ProjectsPage = () => {

  return (
     <div className="min-h-[89vh]">
      {/* <PageHeader item={pageHeaderData} /> */}
<h1>projects page</h1>
      {/* <div className="bg-white rounded-[3px] mt-4 px-6 py-4">
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
      </div> */}
    </div>
  );
};

export default ProjectsPage;
