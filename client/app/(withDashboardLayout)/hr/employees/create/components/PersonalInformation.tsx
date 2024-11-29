/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { personalInfos } from "./formData/personalInfo.data";
import InputWithLabel from "@/app/components/Form/InputWithLabel";
import SelectWithLabel from "@/app/components/Form/SelectWithLabel";
import RadioWithLabel from "@/app/components/Form/RadioWithLabel";
import { useGetAllDepartmentsQuery } from "@/app/Redux/api/departmentApi";
import { useGetAllSubDepartmentsQuery } from "@/app/Redux/api/subDepartmentApi";

type TPersonalInformationProps = {
  onChange: (field: any, value: string) => void;
};

const PersonalInformation: React.FC<TPersonalInformationProps> = ({
  onChange,
}) => {
  const { data: departments } = useGetAllDepartmentsQuery({});
  const { data: subDepartments } = useGetAllSubDepartmentsQuery({});

  const departmentOptions = departments?.data?.map(
    (item: { departmentName: string; id: string }) => ({
      key: item.departmentName,
      value: item.id,
    })
  );

  const subDepartmentOptions = subDepartments?.data?.map(
    (item: { subDepartmentName: string; id: string }) => ({
      key: item.subDepartmentName,
      value: item.id,
    })
  );

  return (
    <div className="border p-3">
      <div>
        <h2 className="text-xl font-medium">Personal information: </h2>
        <div className="grid grid-cols-2 gap-x-10 gap-y-[14px]">
          <>
            <SelectWithLabel
              name="departmentId"
              onChange={(e: { target: { value: string } }) =>
                onChange("departmentId", e.target.value)
              }
              options={departmentOptions}
              label="Department"
              placeholder="Select Department"
            />
          </>
          <>
            <SelectWithLabel
              name="subDepartmentId"
              onChange={(e: { target: { value: string } }) =>
                onChange("subDepartmentId", e.target.value)
              }
              options={subDepartmentOptions}
              label="Sub Department"
              placeholder="Select Sub Department"
            />
          </>
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
