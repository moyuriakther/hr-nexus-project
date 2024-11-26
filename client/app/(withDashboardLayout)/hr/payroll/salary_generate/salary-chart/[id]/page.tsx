// "use client";

import PageHeader from "@/app/(withDashboardLayout)/components/PageHeader/PageHeader";
import { pageHeaderData } from "../../../components/pageHeaderData";
import { Button, Divider } from "@nextui-org/react";
import { FaPrint } from "react-icons/fa";
import Image from "next/image";
import logo from "../../../../../../assets/images/logo.png";
import SalaryChartTable from "../components/SalaryChartTable";

const SalaryChartPage = ({ useParams }: { useParams: { id: string } }) => {
  return (
    <div className="min-h-[89vh]">
      <PageHeader item={pageHeaderData} />

      <div className="bg-white py-4 rounded-[3px] shadow-lg mt-4">
        <div className="flex items-center px-6 justify-between flex-wrap pb-4 lg:gap-0 gap-2">
          <h2 className="font-semibold text-lg">Employee salary chart</h2>
          <div className="flex items-center gap-1">
            <Button
              size="sm"
              className="bg-primary rounded-[4px] text-sm text-white"
            >
              <FaPrint /> Print
            </Button>
          </div>
        </div>
        <Divider />
        <div>
          <div className="flex justify-center items-center mt-6">
            <Image src={logo} alt="logo" height={50} width={145} />
          </div>
          <h2 className="text-xl px-6 text-center text-black font-semibold mt-1">
            Employee salary chart for November, 2050
          </h2>
        </div>

        {/* table */}
        <div className="mt-8 px-6">
          <SalaryChartTable />
        </div>

        <div className="flex justify-between mt-12 px-6 pb-4">
          <h1>Prepared by: Admin</h1>
          <h1>Checked by</h1>
          <h1>Authorized by</h1>
        </div>
      </div>
    </div>
  );
};

export default SalaryChartPage;
