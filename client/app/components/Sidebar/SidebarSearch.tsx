/* eslint-disable @typescript-eslint/no-explicit-any */
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import HRForm from "../Form/HRForm";
import HRInput from "../Form/HRInput";

const SidebarSearch = () => {
  const handleLogin: SubmitHandler<FieldValues> = async (data) => {
    try {
      console.log(data);
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <HRForm onSubmit={handleLogin}>
      <div className="mb-5">
        <HRInput
          type="text"
          className="border-primary h-10 rounded-[5px]"
          placeholder="Menu Search..."
          name="search"
        />
      </div>
    </HRForm>
  );
};

export default SidebarSearch;
