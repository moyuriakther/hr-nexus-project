/* eslint-disable @typescript-eslint/no-explicit-any */
import InputWithLabel from "@/app/components/Form/InputWithLabel";
import React from "react";
import { salaryAndBankInfos } from "./formData/salaryAndBankInfo";

type TSalaryAndBankInfoProps = {
  onChange: (field: any, value: string) => void;
};

const SalaryAndBankInfo: React.FC<TSalaryAndBankInfoProps> = ({ onChange }) => {
  return (
    <div className="border p-3">
      <div>
        <h2 className="text-xl font-medium">Salary and bank info: </h2>
        <div className="grid grid-cols-2 gap-x-10 gap-y-[14px]">
          {salaryAndBankInfos.map((item, i) => {
            return (
              <React.Fragment key={i}>
                <InputWithLabel
                  required={item.required}
                  name={item.name}
                  label={item.label}
                  placeholder={item.placeholder}
                  type={item.type || ""}
                  onChange={(e: { target: { value: string } }) =>
                    onChange(item.name, e.target.value)
                  }
                />
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SalaryAndBankInfo;
