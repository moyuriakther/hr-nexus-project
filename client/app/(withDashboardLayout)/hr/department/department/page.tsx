

const DepartmentPage = () => {
   const departments = [
    { id: 1, name: "Finance", status: "Inactive" },
    { id: 2, name: "Staff", status: "Active" },
    { id: 3, name: "Internal Audit Control", status: "Active" },
    { id: 4, name: "Testing", status: "Active" },
    { id: 5, name: "Marketing", status: "Active" },
    { id: 6, name: "Software", status: "Active" },
    { id: 7, name: "Accounts", status: "Active" },
    { id: 8, name: "Production", status: "Active" },
    { id: 9, name: "Electrical", status: "Active" },
  ];
  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6">
      <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h2 className="text-lg sm:text-xl font-bold">Department List</h2>
          <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 w-full sm:w-auto text-center">
            + Add Department
          </button>
        </div>

        {/* Table Section */}
        <div className="mt-4 overflow-x-auto">
          <table className="w-full border-collapse border border-gray-200 text-sm sm:text-base">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2 border border-gray-200 text-left">SI</th>
                <th className="p-2 border border-gray-200 text-left">
                  Department Name
                </th>
                <th className="p-2 border border-gray-200 text-left">Status</th>
                <th className="p-2 border border-gray-200 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {departments.map((dept, index) => (
                <tr
                  key={dept.id}
                  className="even:bg-gray-50 text-gray-700 whitespace-nowrap"
                >
                  <td className="p-2 border border-gray-200">{index + 1}</td>
                  <td className="p-2 border border-gray-200">{dept.name}</td>
                  <td className="p-2 border border-gray-200">
                    <span
                      className={`px-3 py-1 rounded-full text-white ${
                        dept.status === "Active"
                          ? "bg-green-500"
                          : "bg-red-500"
                      }`}
                    >
                      {dept.status}
                    </span>
                  </td>
                  <td className="p-2 border border-gray-200">
                    <div className="flex gap-2">
                      <button className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600">
                        Edit
                      </button>
                      <button className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600">
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-4 text-sm sm:text-base">
          <span>
            Showing 1 to {departments.length} of {departments.length} entries
          </span>
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300">
              Previous
            </button>
            <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepartmentPage;
