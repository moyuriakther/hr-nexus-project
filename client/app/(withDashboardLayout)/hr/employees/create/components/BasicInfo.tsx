/* eslint-disable @typescript-eslint/no-explicit-any */
import InputWithLabel from "@/app/components/Form/InputWithLabel";
import { TBasicInfoState } from "@/app/types";
import React from "react";
import { basicInfos } from "./formData/multiForm.data";
import SelectWithLabel from "@/app/components/Form/SelectWithLabel";

type TBasicInfoProps = {
  data: TBasicInfoState;
  onChange: (field: any, value: string) => void;
};

const BasicInfo: React.FC<TBasicInfoProps> = ({ onChange }) => {
  return (
    <div className="border p-3">
      <div>
        <h2 className="text-xl font-medium">Basic info: </h2>
        <div className="grid grid-cols-2 gap-x-10 gap-y-[14px]">
          {basicInfos.map((item, i) => {
            return (
              <React.Fragment key={i}>
                {!item.isSelect ? (
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
                ) : (
                  <>
                    <SelectWithLabel
                      name={item.name}
                      onChange={(e: { target: { value: string } }) =>
                        onChange(item.name, e.target.value)
                      }
                      options={item.options || []}
                      label={item.label}
                      placeholder={item.placeholder}
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

export default BasicInfo;
