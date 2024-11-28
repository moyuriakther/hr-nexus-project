/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

// components/MultiStepForm.js
import { Button } from "@nextui-org/react";
import { useState } from "react";
import BasicInfo from "./BasicInfo";
import BiologicalInfoContact from "./BiologicalInfoContact";
import Others from "./Others";
import PersonalInformation from "./PersonalInformation";
import SalaryAndBankInfo from "./SalaryAndBankInfo";
import Supervisor from "./Supervisor";
import {
  basicInfoState,
  biologicalInfoContact,
  others,
  personalInformation,
  salaryAndBankInfo,
  supervisor,
} from "./formData/multiForm.data";
import { stepperData } from "./stepperData";
import { flattenData } from "@/app/components/utils/flattenData";

const MultiStepForm = () => {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState({
    basicInfo: basicInfoState,
    salaryAndBankInfo: salaryAndBankInfo,
    personalInformation: personalInformation,
    biologicalInfoContact: biologicalInfoContact,
    others: others,
    supervisor: supervisor,
  });

  const nextStep = () =>
    setStep((prevStep) => Math.min(prevStep + 1, stepperData.length));
  const prevStep = () => setStep((prevStep) => Math.max(prevStep - 1, 1));

  const handleInputChange = <T extends keyof typeof formData>(
    stepName: T,
    field: keyof (typeof formData)[T],
    value: string
  ) => {
    setFormData((prevData) => ({
      ...prevData,
      [stepName]: {
        ...prevData[stepName],
        [field]: value,
      },
    }));
  };

  const flatData = flattenData(formData);

  const handleSubmit = () => {
    console.log(flatData.profileImage);
  };

  return (
    <div className="">
      {/* Step Indicators with Horizontal Active Line */}
      <div className="relative mb-8 flex items-center justify-between">
        {/* Inactive Line */}
        <div className="absolute top-5 left-0 w-full h-[1px] bg-gray-300"></div>

        {/* Active Line */}
        <div
          className="absolute top-5 left-0 h-[1px] bg-primary transition-all duration-300"
          style={{ width: `${(100 / (stepperData.length - 1)) * (step - 1)}%` }}
        ></div>

        {/* Step Circles */}
        {stepperData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center flex-wrap lg:gap-0"
          >
            <div
              className={`flex items-center justify-center lg:size-12 size-7 rounded-full z-10 ${
                step === index + 1
                  ? "bg-primary text-white"
                  : index + 1 < step
                  ? "bg-white text-primary border border-primary"
                  : "bg-gray-300 text-gray-700"
              }`}
            >
              {item.icon}
            </div>
            <span
              className={`lg:mt-2 lg:text-base text-[10px] ${
                step === index + 1 ? "text-primary" : "text-gray-500"
              }`}
            >
              {item.name}
            </span>
          </div>
        ))}
      </div>

      {/* Form Steps */}
      <div>
        {step === 1 && (
          <BasicInfo
            onChange={(field, value) =>
              handleInputChange("basicInfo", field, value)
            }
            data={formData.basicInfo}
          />
        )}
        {step === 2 && (
          <SalaryAndBankInfo
            onChange={(field, value) =>
              handleInputChange("salaryAndBankInfo", field, value)
            }
          />
        )}
        {step === 3 && (
          <PersonalInformation
            onChange={(field, value) =>
              handleInputChange("personalInformation", field, value)
            }
          />
        )}
        {step === 4 && (
          <BiologicalInfoContact
            onChange={(field, value) =>
              handleInputChange("biologicalInfoContact", field, value)
            }
          />
        )}
        {step === 5 && (
          <Others
            onChange={(field, value) =>
              handleInputChange("others", field, value)
            }
          />
        )}
        {step === 6 && (
          <Supervisor
            onChange={(field, value) =>
              handleInputChange("supervisor", field, value)
            }
          />
        )}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-end gap-2 mt-8">
        {step > 1 && (
          <Button
            size="md"
            className="bg-secondary rounded text-sm"
            onClick={prevStep}
          >
            Previous
          </Button>
        )}

        {step === 6 && (
          <Button
            onClick={handleSubmit}
            size="md"
            className="bg-primary text-sm text-white rounded"
          >
            Submit
          </Button>
        )}

        {step < stepperData.length && (
          <Button
            size="md"
            className="bg-primary text-sm text-white rounded"
            onClick={nextStep}
          >
            Next
          </Button>
        )}
      </div>
    </div>
  );
};

export default MultiStepForm;
