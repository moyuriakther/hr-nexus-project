/* eslint-disable @typescript-eslint/no-explicit-any */
import InputWithLabel from "@/app/components/Form/InputWithLabel";
import React from "react";
import { supervisorInfo } from "./formData/supervisor.data";
import RadioWithLabel from "@/app/components/Form/RadioWithLabel";

type TSupervisorProps = {
  onChange: (field: any, value: string) => void;
};

const Supervisor: React.FC<TSupervisorProps> = ({ onChange }) => {
  return (
    <div className="border p-3">
      <div>
        <h2 className="text-xl font-medium">Supervisor info: </h2>
        <div className="grid grid-cols-2 gap-x-10 gap-y-[14px]">
          {supervisorInfo.map((item, i) => {
            return (
              <React.Fragment key={i}>
                {item.isRadio ? (
                  <>
                    <RadioWithLabel
                      required={item.required}
                      name={item.name}
                      label={item.label}
                      options={item.radioOptions}
                      onChange={(e: { target: { value: string } }) =>
                        onChange(item.name, e.target.value)
                      }
                    />
                  </>
                ) : (
                  <>
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
                  </>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Supervisor;
