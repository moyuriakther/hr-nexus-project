"use client";

import PageHeader from "@/app/(withDashboardLayout)/components/PageHeader/PageHeader";
import { pageHeaderData } from "../../../components/pageHeaderData";
import Image from "next/image";
import logo from "../../../../../../assets/images/logo.png";
import SalaryPayslipTable from "../components/SalaryPayslipTable";
import { Divider } from "@nextui-org/react";
import { FaPrint } from "react-icons/fa";
import HRIconsButton from "@/app/(withDashboardLayout)/components/UI/HRIconsButton";

const PayslipPage = ({ useParams }: { useParams: { id: string } }) => {
  const headers = ["Header 1", "Header 2", "Header 3", "Header 4"];

  // Define your row data
  const rows = [
    ["Data 1", "Data 2", "Data 3", "Data 4"],
    ["Data A", "Data B", "Data C", "Data D"],
  ];

  return (
    <div className="min-h-[89vh]">
      <PageHeader item={pageHeaderData} />

      <div className="bg-white py-4 rounded-[3px] shadow-lg mt-4">
        <div className="mb-6">
          <div className="flex justify-center items-center mt-6">
            <Image src={logo} alt="logo" height={50} width={145} />
          </div>
          <h2 className="text-2xl px-6 text-center text-black font-[500] mt-1">
            HrNexus HRM (PAYSLIP)
          </h2>
        </div>

        {/* table-1 */}
        <div className="px-12 mt-10">
          <div className="overflow-x-auto">
            <table className="table-auto w-full border-collapse border border-gray-300 text-sm text-left">
              <tbody>
                {/* Row 1 */}
                <tr className="border">
                  <th className="px-4 py-2 font-medium border-r bg-gray-100">
                    Employee name
                  </th>
                  <td className="px-4 py-2 border-r">
                    Honorato Imogene Curry Terry
                  </td>
                  <th className="px-4 py-2 font-medium border-r bg-gray-100">
                    Month
                  </th>
                  <td className="px-4 py-2">April, 2024</td>
                </tr>

                {/* Row 2 */}
                <tr className="border">
                  <th className="px-4 py-2 font-medium border-r bg-gray-100">
                    Position
                  </th>
                  <td className="px-4 py-2 border-r"></td>
                  <th className="px-4 py-2 font-medium border-r bg-gray-100">
                    From
                  </th>
                  <td className="px-4 py-2">2024-04-01</td>
                </tr>

                {/* Row 3 */}
                <tr className="border">
                  <th className="px-4 py-2 font-medium border-r bg-gray-100">
                    Contact
                  </th>
                  <td className="px-4 py-2 border-r">+1 (873) 591-1817</td>
                  <th className="px-4 py-2 font-medium border-r bg-gray-100">
                    To
                  </th>
                  <td className="px-4 py-2">2024-04-30</td>
                </tr>

                {/* Row 4 */}
                <tr className="border">
                  <th className="px-4 py-2 font-medium border-r bg-gray-100">
                    Address
                  </th>
                  <td className="px-4 py-2 border-r"></td>
                  <th className="px-4 py-2 font-medium border-r bg-gray-100">
                    Recruitment date
                  </th>
                  <td className="px-4 py-2">2011-04-27</td>
                </tr>

                {/* Row 5 */}
                <tr className="border">
                  <th className="px-4 py-2 font-medium border-r bg-gray-100">
                    Total working hours
                  </th>
                  <td className="px-4 py-2 border-r">10</td>
                  <th className="px-4 py-2 font-medium border-r bg-gray-100">
                    Worked hours
                  </th>
                  <td className="px-4 py-2">0</td>
                </tr>

                {/* Row 6 */}
                <tr className="border">
                  <th className="px-4 py-2 font-medium border-r bg-gray-100">
                    Staff ID
                  </th>
                  <td className="px-4 py-2 border-r">#000001</td>
                  <td className="px-4 py-2 border-r"></td>
                  <td className="px-4 py-2"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* table-2 */}
        <div className="mt-6 px-12">
          <SalaryPayslipTable />
        </div>

        <div className="flex justify-around mt-12 px-6 pb-4">
          <h1>Prepared by: Admin</h1>
          <h1>Checked by</h1>
          <h1>Authorized by</h1>
        </div>
        <Divider className="my-4" />
        <div className="mt-4 flex justify-end px-12">
          <div>
            <button className="bg-yellow-100 text-[#ffc107] border text-xl p-1  border-yellow-100 rounded-[3px]">
              <FaPrint className="text-base" />
            </button>
            <button className="bg-green-100 ml-2 text-[#28a745] text-xl border p-1 border-green-100 rounded-[3px]">
              Download as pdf
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayslipPage;
