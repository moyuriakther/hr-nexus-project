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

export const supervisorInfo = [
  {
    name: "isSupervisor",
    label: "Is Supervisor",
    isSelect: false,
    isRadio: true,
    radioOptions: workPermit,
    required: false,
  },
  {
    name: "email",
    placeholder: "Supervisor Email",
    type: "email",
    label: "Supervisor Email",
    isSelect: false,
    required: true,
  },
  {
    name: "password",
    placeholder: "Supervisor Password",
    type: "password",
    label: "Supervisor Password",
    isSelect: false,
    required: true,
  },
];
