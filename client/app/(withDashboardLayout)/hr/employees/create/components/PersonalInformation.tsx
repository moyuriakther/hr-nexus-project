/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { personalInfos } from "./formData/personalInfo.data";
import InputWithLabel from "@/app/components/Form/InputWithLabel";
import SelectWithLabel from "@/app/components/Form/SelectWithLabel";
import RadioWithLabel from "@/app/components/Form/RadioWithLabel";

type TPersonalInformationProps = {
  onChange: (field: any, value: string) => void;
};

const PersonalInformation: React.FC<TPersonalInformationProps> = ({
  onChange,
}) => {
  return (
    <div className="border p-3">
      <div>
        <h2 className="text-xl font-medium">Personal information: </h2>
        <div className="grid grid-cols-2 gap-x-10 gap-y-[14px]">
          {personalInfos.map((item, i) => {
            return (
              <React.Fragment key={i}>
                {item.isSelect ? (
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
                ) : item.isRadio ? (
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
                ) : item.isTextArea ? (
                  <>
                    <div className="grid grid-cols-12 items-center">
                      <div className="flex items-center gap-1 lg:col-span-3">
                        <p className="font-medium">{item.label}</p>
                      </div>
                      <div className="lg:col-span-9">
                        <textarea
                          name={item.name}
                          className="w-full border h-20 p-4"
                          placeholder={item.placeholder}
                          onChange={(e: { target: { value: string } }) =>
                            onChange(item.name, e.target.value)
                          }
                        ></textarea>
                      </div>
                    </div>
                  </>
                ) : (
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
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PersonalInformation;
