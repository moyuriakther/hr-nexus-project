export type TBasicInfoState = {
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  city: string;
  zip: string;
  alternatePhone: string;
  nationalIdNo: string;
  iqamaNo: string;
  passportNo: string;
  drivingLicenseNo: string;
  attendanceTime: string;
};

export type TSalaryAndBankInfo = {
  accountNumber: string;
  branchAddress: string;
  bankName: string;
  bbanNum: string;
  tinNo: string;
  basicSalary: string;
  grossSalary: string;
  transportAllowance: string;
  medicalBenefit: string;
  familyBenefit: string;
  transportationBenefit: string;
  otherBenefit: string;
};

export type TPersonalInformation = {
  department: string;
  payFrequency: string;
  subDepartment: string;
  payFrequencyText: string;
  position: string;
  hourlyRate: string;
  dutyType: string;
  hourlyRate2: string;
  joiningDate: string;
  employeeGrade: string;
  hireDate: string;
  terminationReason: string;
  rehireDate: string;
  workInCity: string;
  terminationDate: string;
  employeeType: string;
  cardNo: string;
  voluntaryTermination: string;
  monthlyWorkHours: string;
  workPermit: string;
};

export type TBiologicalInfoContact = {
  dateOfBirth: string;
  gander: string;
  maritalStatus: string;
  noOfKids: string;
  sos: string;
  religion: string;
  ethnicGroup: string;
  profileImage: string;
  emergencyContactPerson: string;
  emergencyContactRelationship: string;
  emergencyContact: string;
  emergencyHomePhone: string;
  emergencyWorkPhone: string;
  alterEmergencyContact: string;
  alterEmergencyHomePhone: string;
  alterEmergencyWorkPhone: string;
};

export type TOthers = {
  bloodGroup: string;
  healthCondition: string;
  isDisable: boolean;
  disabilitiesDesc: string;
  homeEmail: string;
  homePhone: string;
  cellPhone: string;
  docTitle: string;
  file: string;
  expiryDate: string;
};

export type TSupervisor = {
  isSupervisor: boolean;
  email: string;
  password: string;
};
