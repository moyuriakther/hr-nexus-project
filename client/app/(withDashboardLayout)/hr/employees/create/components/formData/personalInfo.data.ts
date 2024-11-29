import { TSelect } from "@/app/types";

export const department: TSelect[] = [
  {
    key: "HR Department",
    value: "HR Department",
  },
  {
    key: "HR Department",
    value: "HR Department",
  },
  {
    key: "HR Department",
    value: "HR Department",
  },
  {
    key: "HR Department",
    value: "HR Department",
  },
  {
    key: "HR Department",
    value: "HR Department",
  },
  {
    key: "HR Department",
    value: "HR Department",
  },
];

export const subDepartment: TSelect[] = [
  {
    key: "HR Department",
    value: "HR Department",
  },
  {
    key: "HR Department",
    value: "HR Department",
  },
  {
    key: "HR Department",
    value: "HR Department",
  },
  {
    key: "HR Department",
    value: "HR Department",
  },
  {
    key: "HR Department",
    value: "HR Department",
  },
  {
    key: "HR Department",
    value: "HR Department",
  },
];

export const position: TSelect[] = [
  {
    key: "Data analysis",
    value: "Data analysis",
  },
  {
    key: "Management",
    value: "Management",
  },
  {
    key: "Account Executive",
    value: "Account Executive",
  },
  {
    key: "Medical Assistant",
    value: "Medical Assistant",
  },
];

export const payFrequency: TSelect[] = [
  {
    key: "Yearly",
    value: "Yearly",
  },
  {
    key: "Monthly",
    value: "Monthly",
  },
  {
    key: "Biweekly",
    value: "Biweekly",
  },
  {
    key: "Weekly",
    value: "Weekly",
  },
];

export const dutyType: TSelect[] = [
  {
    key: "Full Time",
    value: "Full Time",
  },
  {
    key: "Part Time",
    value: "Part Time",
  },
  {
    key: "Contractual",
    value: "Contractual",
  },
  {
    key: "Other",
    value: "Other",
  },
];

export const employeeType: TSelect[] = [
  {
    key: "Intern",
    value: "Intern",
  },
  {
    key: "Contractual",
    value: "Contractual",
  },
  {
    key: "Full Time",
    value: "Full Time",
  },
  {
    key: "Remote",
    value: "Remote",
  },
];

export const voluntaryTermination: TSelect[] = [
  {
    key: "Yes",
    value: "Yes",
  },
  {
    key: "No",
    value: "No",
  },
];

export const workPermit = [
  {
    value: true,
    label: "Yes",
  },
  {
    value: false,
    label: "No",
  },
];

export const personalInfos = [
  {
    name: "payFrequency",
    placeholder: "Pay Frequency",
    label: "Pay Frequency",
    isSelect: true,
    options: payFrequency,
    required: true,
  },
  {
    name: "position",
    placeholder: "Select Position",
    label: "Position",
    isSelect: true,
    options: position,
    required: true,
  },
  {
    name: "payFrequencyText",
    placeholder: "Pay frequency text",
    type: "text",
    label: "Pay frequency text",
    isSelect: false,
    required: false,
  },

  {
    name: "dutyType",
    placeholder: "Duty Type",
    label: "Duty Type",
    isSelect: true,
    options: dutyType,
    required: false,
  },
  {
    name: "hourlyRate",
    placeholder: "Hourly rate",
    type: "number",
    label: "Hourly rate",
    isSelect: false,
    required: false,
  },

  {
    name: "hourlyRate2",
    placeholder: "Hourly rate2",
    type: "number",
    label: "Hourly rate2",
    isSelect: false,
    required: false,
  },
  {
    name: "employeeGrade",
    placeholder: "Employee grade",
    type: "text",
    label: "Employee grade",
    isSelect: false,
    required: false,
  },

  {
    name: "joiningDate",
    placeholder: "Joining Date",
    type: "date",
    label: "Joining Date",
    isSelect: false,
    required: true,
  },

  {
    name: "hireDate",
    placeholder: "Hire Date",
    type: "date",
    label: "Hire Date",
    isSelect: false,
    required: true,
  },

  {
    name: "terminationReason",
    placeholder: "Termination reason",
    label: "Termination reason",
    isSelect: false,
    isTextArea: true,
    required: false,
  },

  {
    name: "rehireDate",
    placeholder: "Rehire date",
    type: "date",
    label: "Rehire date",
    isSelect: false,
    required: false,
  },

  {
    name: "workInCity",
    placeholder: "Work in city",
    type: "text",
    required: false,
    label: "Work in city",
    isSelect: false,
  },
  {
    name: "terminationDate",
    placeholder: "Termination date",
    type: "date",
    label: "Termination date",
    isSelect: false,
    required: false,
  },
  {
    name: "employeeType",
    placeholder: "Select Employee Type",
    label: "Employee Type",
    isSelect: true,
    options: employeeType,
    required: true,
  },

  {
    name: "cardNumber",
    placeholder: "Card no",
    type: "text",
    label: "Card no",
    isSelect: false,
    required: false,
  },

  {
    name: "monthlyWorkHours",
    placeholder: "Monthly work hours",
    type: "number",
    label: "Monthly work hours",
    isSelect: false,
    required: true,
  },

  {
    name: "workPermit",
    label: "Work permit",
    isSelect: false,
    isRadio: true,
    radioOptions: workPermit,
    required: false,
  },
];
