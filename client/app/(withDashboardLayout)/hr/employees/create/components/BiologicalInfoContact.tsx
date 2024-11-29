/* eslint-disable @typescript-eslint/no-explicit-any */
import InputWithLabel from "@/app/components/Form/InputWithLabel";
import React from "react";
import { biologicalInfos } from "./formData/biologicalInfoContact.data";
import { useAppDispatch } from "@/app/Redux/hook";
import { setFile } from "@/app/Redux/multiStepper/multiStepperSlice";
import SelectWithLabel from "@/app/components/Form/SelectWithLabel";

type TBiologicalInfoContactProps = {
  onChange: (field: any, value: string) => void;
};

const BiologicalInfoContact: React.FC<TBiologicalInfoContactProps> = ({
  onChange,
}) => {
  const dispatch = useAppDispatch();

  return (
    <div className="border p-3">
      <div>
        <h2 className="text-xl font-medium">Biological info contact: </h2>
        <div className="grid grid-cols-2 gap-x-10 gap-y-[14px]">
          {biologicalInfos.map((item, i) => {
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
                ) : item.isFile ? (
                  <>
                    <div className="grid grid-cols-12 items-center gap-2">
                      <div className="flex items-center gap-1 lg:col-span-3">
                        <p className="font-medium">{item.label}</p>
                      </div>
                      <div className="lg:col-span-9">
                        <input
                          name={item.name}
                          type="file"
                          onChange={(e) => dispatch(setFile(e.target.files))}
                          className="h-10 rounded-none border w-full px-4 outline-[#198754]  transition duration-200 outline-[1px]"
                        />
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
                    onChange={(e: { target: { value: string } }) => {
                      onChange(item.name, e.target.value);
                    }}
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

export default BiologicalInfoContact;
