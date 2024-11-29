import PageHeader from "@/app/(withDashboardLayout)/components/PageHeader/PageHeader";
import MultiStepForm from "./components/MultiStepper";
import { pageHeaderData } from "../components/pageHeaderData";
import { Button, Divider } from "@nextui-org/react";
import Link from "next/link";
import { FaList } from "react-icons/fa";

const CreateEmployeePage = () => {
  return (
    <div>
      <PageHeader item={pageHeaderData} />
      <div className="bg-white rounded-[3px] mt-4 px-6 py-4">
        <div className="lg:pb-12 pb-8">
          <div className="flex items-center justify-between pb-4">
            <h2 className="text-lg font-medium">Employee</h2>
            <Button
              size="sm"
              className="bg-primary rounded-[4px] text-sm text-white"
            >
              <Link
                href="/hr/employees/create"
                className="flex items-center gap-2"
              >
                <FaList /> Employee list
              </Link>
            </Button>
          </div>
          <Divider />
        </div>

        <MultiStepForm />
      </div>
    </div>
  );
};

export default CreateEmployeePage;
