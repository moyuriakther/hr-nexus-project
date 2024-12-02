"use client";

import HRModal from "@/app/components/Modal/HRModal";

import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";

// Define the type for the form data
type LoanFormData = {
  employeeName: string;
  permittedBy: string;
  loanDetails: string;
  amount: number;
  approvedDate: string;
  repaymentFrom: string;
  interestPercentage: number;
  installmentPeriod: number;
  repaymentAmount: number;
  installment: number;
  status: string;
};

type AddLoanModalProps = {
  modalIsOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onSave: (data: LoanFormData) => void;
};

const AddLoanModal: React.FC<AddLoanModalProps> = ({
  modalIsOpen,
  setIsOpen,
}) => {
  const { register, handleSubmit } = useForm<LoanFormData>();

  //   // Submit handler for the form
  const onSubmit: SubmitHandler<LoanFormData> = async (values) => {
    try {
      const loanData = { ...values };
      console.log(loanData);
      //   const res = await createLoan(loanData).unwrap();
      //   if (res?.id) {
      //     toast.success("Loan Created Successfully");
      //     setIsOpen(false);
      //     reset();
      //   }
    } catch (error) {
      if (error instanceof Error) {
        toast.error(`Error: ${error.message || "An error occurred"}`);
      } else {
        toast.error("Error creating loan");
      }
      console.error(error);
    }
  };

  return (
    <HRModal
      modalIsOpen={modalIsOpen}
      setIsOpen={setIsOpen}
      modalTitle="Add New Loan"
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-4">
          {/* Employee Name */}
          <div className="flex justify-between items-center">
            <label className="block font-medium text-gray-700">
              Employee Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              {...register("employeeName", { required: true })}
              placeholder="Employee Name"
              className="w-80 border rounded-md  px-2 ms-10"
            />
          </div>

          {/* Permitted By */}
          <div className="flex justify-between items-center">
            <label className="block font-medium text-gray-700">
              Permitted By <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              {...register("permittedBy", { required: true })}
              placeholder="Permitted By"
              className="w-80 border rounded-md  px-2 "
            />
          </div>

          {/* Loan Details */}
          <div className="flex justify-between items-center">
            <label className="block font-medium text-gray-700">
              Loan Details
            </label>
            <textarea
              {...register("loanDetails")}
              placeholder="Loan Details"
              className="w-80 border rounded-md  px-2 "
            />
          </div>

          {/* Amount */}
          <div className="flex justify-between items-center">
            <label className="block font-medium text-gray-700">
              Amount <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              {...register("amount", { required: true })}
              placeholder="Amount"
              className="w-80 border rounded-md  px-2 "
            />
          </div>

          {/* Approved Date */}
          <div className="flex justify-between items-center">
            <label className="block font-medium text-gray-700">
              Approved Date <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              {...register("approvedDate", { required: true })}
              className="w-80 border rounded-md  px-2 "
            />
          </div>

          {/* Repayment From */}
          <div className="flex justify-between items-center">
            <label className="block font-medium text-gray-700">
              Repayment From <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              {...register("repaymentFrom", { required: true })}
              placeholder="Repayment From"
              className="w-80 border rounded-md  px-2 "
            />
          </div>

          {/* Interest Percentage */}
          <div className="flex justify-between items-center">
            <label className="block font-medium text-gray-700">
              Interest Percentage (%) <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              {...register("interestPercentage", { required: true })}
              placeholder="Interest Percentage"
              className="w-80 border rounded-md  px-2 "
            />
          </div>

          {/* Installment Period */}
          <div className="flex justify-between items-center">
            <label className="block font-medium text-gray-700">
              Installment Period <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              {...register("installmentPeriod", { required: true })}
              placeholder="Installment Period"
              className="w-80 border rounded-md  px-2 "
            />
          </div>

          {/* Repayment Amount */}
          <div className="flex justify-between items-center">
            <label className="block font-medium text-gray-700">
              Repayment Amount <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              {...register("repaymentAmount", { required: true })}
              placeholder="Repayment Amount"
              className="w-80 border rounded-md  px-2 "
            />
          </div>

          {/* Installment */}
          <div className="flex justify-between items-center">
            <label className="block font-medium text-gray-700">
              Installment <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              {...register("installment", { required: true })}
              placeholder="Installment"
              className="w-80 border rounded-md  px-2 "
            />
          </div>

          {/* Status */}
          <div className="flex justify-between items-center">
            <label className="block font-medium text-gray-700">
              Status <span className="text-red-500">*</span>
            </label>
            <select
              {...register("status", { required: true })}
              className="w-80 border rounded-md  px-2"
            >
              <option value="">Select Status</option>
              <option value="Pending">Pending</option>
              <option value="Approved">Approved</option>
              <option value="Rejected">Rejected</option>
            </select>
          </div>
        </div>

        {/* Modal Buttons */}
        <div className="flex justify-end mt-4 space-x-4">
          <button
            type="button"
            className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600"
            onClick={() => setIsOpen(false)}
          >
            Close
          </button>
          <button
            type="submit"
            className="bg-[#198754] text-white py-2 px-4 rounded-md hover:bg-green-600"
          >
            Save
          </button>
        </div>
      </form>
    </HRModal>
  );
};

export default AddLoanModal;
