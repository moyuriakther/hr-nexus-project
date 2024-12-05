import { TSelect } from "@/app/types";

export const bloodGroupOptions: TSelect[] = [
  {
    key: "A+",
    value: "A+",
  },
  {
    key: "A-",
    value: "A-",
  },
  {
    key: "B+",
    value: "B+",
  },
  {
    key: "B-",
    value: "B-",
  },
  {
    key: "AB+",
    value: "AB+",
  },
  {
    key: "AB-",
    value: "AB-",
  },
  {
    key: "O+",
    value: "O+",
  },
  {
    key: "O-",
    value: "O-",
  },
];

export const othersInfo = [
  {
    name: "bloodGroup",
    placeholder: "Blood Group",
    label: "Blood Group",
    isSelect: true,
    options: bloodGroupOptions,
    required: false,
  },
  {
    name: "healthCondition",
    placeholder: "Health Condition",
    type: "text",
    label: "Health Condition",
    isSelect: false,
    required: false,
  },

  {
    name: "disabilitiesDesc",
    placeholder: "Disabilities Description",
    label: "Disabilities Description",
    isSelect: false,
    isTextArea: true,
    required: false,
  },
  {
    name: "homeEmail",
    placeholder: "Home Email",
    type: "email",
    label: "Home Email",
    isSelect: false,
    required: true,
  },
  {
    name: "homePhone",
    placeholder: "Home Phone",
    type: "text",
    label: "Home Phone",
    isSelect: false,
    required: true,
  },
];
