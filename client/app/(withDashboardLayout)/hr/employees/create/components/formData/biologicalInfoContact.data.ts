import { TSelect } from "@/app/types";

export const maritalStatus: TSelect[] = [
  {
    key: "SINGLE",
    value: "SINGLE",
  },
  {
    key: "MARRIED",
    value: "MARRIED",
  },
  {
    key: "DIVORCED",
    value: "DIVORCED",
  },
  {
    key: "WIDOWED",
    value: "WIDOWED",
  },
];

export const gender: TSelect[] = [
  {
    key: "MALE",
    value: "MALE",
  },
  {
    key: "FEMALE",
    value: "FEMALE",
  },
  {
    key: "OTHER",
    value: "OTHER",
  },
];

export const biologicalInfos = [
  {
    name: "dateOfBirth",
    placeholder: "Date of Birth",
    type: "date",
    label: "Date of Birth",
    isSelect: false,
    required: true,
  },
  {
    name: "gender",
    placeholder: "Gender",
    label: "Gender",
    isSelect: true,
    options: gender,
    required: false,
  },

  {
    name: "maritalStatus",
    placeholder: "Marital Status",
    label: "Marital Status",
    isSelect: true,
    options: maritalStatus,
    required: false,
  },

  {
    name: "numberOfKids",
    placeholder: "Number of Kids",
    type: "number",
    label: "Number of Kids",
    isSelect: false,
    required: false,
  },
  {
    name: "sosNumber",
    placeholder: "SOS",
    type: "text",
    label: "SOS",
    isSelect: false,
    required: true,
  },
  {
    name: "religion",
    placeholder: "Religion",
    type: "text",
    label: "Religion",
    isSelect: false,
    required: false,
  },
  {
    name: "ethnicGroup",
    placeholder: "Ethnic Group",
    type: "text",
    label: "Ethnic Group",
    isSelect: false,
    required: false,
  },

  {
    name: "profileImage",
    placeholder: "Profile Image",
    type: "file",
    label: "Profile Image",
    isSelect: false,
    isFile: true,
    required: false,
  },

  {
    name: "emergencyContactPerson",
    placeholder: "Emergency Contact Person",
    type: "text",
    label: "Emergency Contact Person",
    isSelect: false,
    required: true,
  },
  {
    name: "emergencyContactRelationship",
    placeholder: "Emergency Contact Relationship",
    type: "text",
    label: "Emergency Contact Relationship",
    isSelect: false,
    required: false,
  },
  {
    name: "emergencyContactNumber",
    placeholder: "Emergency Contact",
    type: "text",
    label: "Emergency Contact",
    isSelect: false,
    required: true,
  },
  {
    name: "emergencyHomePhone",
    placeholder: "Emergency Home Phone",
    type: "text",
    label: "Emergency Home Phone",
    isSelect: false,
    required: false,
  },
  {
    name: "emergencyWorkPhone",
    placeholder: "Emergency Work Phone",
    type: "text",
    label: "Emergency Work Phone",
    isSelect: false,
    required: false,
  },
  {
    name: "alternateEmergencyContact",
    placeholder: "Alternate Emergency Contact",
    type: "text",
    label: "Alternate Emergency Contact",
    isSelect: false,
    required: false,
  },
  {
    name: "alternateEmergencyHomePhone",
    placeholder: "Alternate Emergency Home Phone",
    type: "text",
    label: "Alternate Emergency Home Phone",
    isSelect: false,
    required: false,
  },
  {
    name: "alternateEmergencyWorkPhone",
    placeholder: "Alternate Emergency Work Phone",
    type: "text",
    label: "Alternate Emergency Work Phone",
    isSelect: false,
    required: false,
  },
];
