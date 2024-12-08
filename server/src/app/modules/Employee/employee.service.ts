import bcrypt from "bcrypt";
import prisma from "../../../shared/prisma";
import { Prisma } from "@prisma/client";
import { IPaginationOptions } from "../../Interfaces/IPaginationOptions";
import { paginationHelper } from "../../../Helpers/paginationHelpers";
import { employeeSearchableFields } from "./employee.utils";
import sendMail from "../../../shared/sendEmail";

const createEmployee = async (payload: any) => {
  // Hash the password
  const hashPassword: string = await bcrypt.hash(payload.password, 12);

  // Execute a Prisma transaction
  const employeeInfo = await prisma.$transaction(async (prisma) => {
    const UserName = payload.firstName + " " + payload.lastName;
    await prisma.user.create({
      data: {
        name: UserName,
        email: payload.email,
        phoneNumber: payload.phoneNumber,
        password: hashPassword,
      },
    });

    // Create employee information, linking to the created user

    const employee = await prisma.employee.create({
      data: {
        firstName: payload.firstName,
        lastName: payload.lastName,
        middleName: payload.middleName,
        email: payload.email,
        phoneNumber: payload.phoneNumber,
        address: payload.address,
        dateOfBirth: payload.dateOfBirth,
        joiningDate: payload.joiningDate,
        status: payload.status,
        designation: payload.designation,
        departmentId: payload.departmentId,
        employeeType: payload.employeeType,
        accountNumber: payload.accountNumber,
        alternateNumber: payload.alternateNumber,
        alternateEmergencyContact: payload.alternateEmergencyContact,
        alternateEmergencyHomePhone: payload.alternateEmergencyHomePhone,
        alternateEmergencyWorkPhone: payload.alternateEmergencyWorkPhone,
        attendanceShift: payload.attendanceShift,
        basicSalary: payload.basicSalary,
        bloodGroup: payload.bloodGroup,
        branchAddress: payload.branchAddress,
        cardNumber: payload.cardNumber,
        city: payload.city,
        country: payload.country,
        tinNumber: payload.tinNumber,
        terminationDate: payload.terminationDate,
        terminationReason: payload.terminationReason,
        workInCity: payload.workInCity,
        workPermit: payload.workPermit,
        transportationBenefit: payload.transportationBenefit,
        transportAllowance: payload.transportAllowance,
        gender: payload.gender,
        maritalStatus: payload.maritalStatus,
        hourlyRate: payload.hourlyRate,
        hourlyRate2: payload.hourlyRate2,
        familyBenefit: payload.familyBenefit,
        medicalBenefit: payload.medicalBenefit,
        otherBenefit: payload.otherBenefit,
        healthCondition: payload.healthCondition,
        homeEmail: payload.homeEmail,
        homePhone: payload.homePhone,
        isDisabled: payload.isDisabled,
        numberOfKids: payload.numberOfKids,
        nidNumber: payload.nidNumber,
        emergencyContactNumber: payload.emergencyContactNumber,
        profileImage: payload.profileImage,
        religion: payload.religion,
        emergencyContactPerson: payload.emergencyContactPerson,
        emergencyHomePhone: payload.emergencyHomePhone,
        emergencyWorkPhone: payload.emergencyWorkPhone,
        disabilitiesDescription: payload.disabilitiesDescription,
        position: payload.position,
        emergencyContactRelationship: payload.emergencyContactRelationship,
        dutyType: payload.dutyType,
        employeeGrade: payload.employeeGrade,
        hireDate: payload.hireDate,
        monthlyWorkHours: payload.monthlyWorkHours,
        sosNumber: payload.sosNumber,
        createdAt: payload.createdAt,
        grossSalary: payload.grossSalary,
        ethnicGroup: payload.ethnicGroup,
        payFrequency: payload.payFrequency,
        passport: payload.passport,
        payFrequencyText: payload.payFrequencyText,
        routingNumber: payload.routingNumber,
        rehireDate: payload.rehireDate,
        subDepartmentId: payload.subDepartmentId,
        password: hashPassword,
      },
    });

    // const send = sendMail({
    //   email: employee.email,
    //   subject: "Employee Registration",
    //   message: `Hello ${employee.firstName} ${employee.lastName}, your employee registration has been successful. You can now login using your email and password.`,
    // });

    return employee;
  });

  return employeeInfo;
};

const getEmployees = async (params: any, options: IPaginationOptions) => {
  const { page, limit, skip } = paginationHelper.calculatePagination(options);
  const { searchTerm, ...filterData } = params;

  const andConditions: Prisma.EmployeeWhereInput[] = [
    {
      isDeleted: false,
    },
  ];

  //console.log(filterData);
  if (params.searchTerm) {
    andConditions.push({
      OR: employeeSearchableFields.map((field) => ({
        [field]: {
          contains: params.searchTerm,
          mode: "insensitive",
        },
      })),
    });
  }

  if (Object.keys(filterData).length > 0) {
    andConditions.push({
      AND: Object.keys(filterData).map((key) => ({
        [key]: {
          equals: (filterData as any)[key],
        },
      })),
    });
  }

  const whereConditions: Prisma.EmployeeWhereInput =
    andConditions.length > 0 ? { AND: andConditions } : {};

  const result = await prisma.employee.findMany({
    where: whereConditions,
    skip,
    take: limit,
    orderBy:
      options.sortBy && options.sortOrder
        ? {
            [options.sortBy]: options.sortOrder,
          }
        : {
            createdAt: "desc",
          },
    include: {
      department: true,
      subDepartment: true,
      payment: true,
      award: true,
      leave: true,
      loan: true,
      salary: true,
      attendance: true,
    },
  });

  const total = await prisma.employee.count({
    where: whereConditions,
  });

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};
const getSingleEmployee = async (id: string) => {
  const result = await prisma.employee.findUniqueOrThrow({
    where: {
      id,
    },
  });
  return result;
};
const updateEmployee = async (id: string, payload: any) => {
  const hashPassword: string = await bcrypt.hash(payload.password, 12);

  const user = await prisma.employee.findUnique({
    where: {
      id,
    },
  });

  const result = await prisma.employee.update({
    where: {
      id,
    },
    data: {
      firstName: payload?.firstName || user?.firstName,
      lastName: payload?.lastName || user?.lastName,
      middleName: payload?.middleName || user?.middleName,
      email: payload?.email || user?.email,
      phoneNumber: payload?.phoneNumber || user?.phoneNumber,
      address: payload?.address || user?.address,
      dateOfBirth: payload?.dateOfBirth || user?.dateOfBirth,
      joiningDate: payload?.joiningDate || user?.joiningDate,
      status: payload?.status || user?.status,
      designation: payload?.designation || user?.designation,
      departmentId: payload?.departmentId || user?.departmentId,
      employeeType: payload?.employeeType || user?.employeeType,
      accountNumber: payload?.accountNumber || user?.accountNumber,
      alternateNumber: payload?.alternateNumber || user?.alternateNumber,
      alternateEmergencyContact:
        payload?.alternateEmergencyContact || user?.alternateEmergencyContact,
      alternateEmergencyHomePhone:
        payload?.alternateEmergencyHomePhone ||
        user?.alternateEmergencyHomePhone,
      alternateEmergencyWorkPhone:
        payload?.alternateEmergencyWorkPhone ||
        user?.alternateEmergencyWorkPhone,
      attendanceShift: payload?.attendanceShift || user?.attendanceShift,
      basicSalary: payload?.basicSalary || user?.basicSalary,
      bloodGroup: payload?.bloodGroup || user?.bloodGroup,
      branchAddress: payload?.branchAddress || user?.branchAddress,
      cardNumber: payload?.cardNumber || user?.cardNumber,
      city: payload?.city || user?.city,
      country: payload?.country || user?.country,
      tinNumber: payload?.tinNumber || user?.tinNumber,
      terminationDate: payload?.terminationDate || user?.terminationDate,
      terminationReason: payload?.terminationReason || user?.terminationReason,
      workInCity: payload?.workInCity || user?.workInCity,
      workPermit: payload?.workPermit || user?.workPermit,
      transportationBenefit:
        payload?.transportationBenefit || user?.transportationBenefit,
      transportAllowance:
        payload?.transportAllowance || user?.transportAllowance,
      gender: payload?.gender || user?.gender,
      maritalStatus: payload?.maritalStatus || user?.maritalStatus,
      hourlyRate: payload?.hourlyRate || user?.hourlyRate,
      hourlyRate2: payload?.hourlyRate2 || user?.hourlyRate2,
      familyBenefit: payload?.familyBenefit || user?.familyBenefit,
      medicalBenefit: payload?.medicalBenefit || user?.medicalBenefit,
      otherBenefit: payload?.otherBenefit || user?.otherBenefit,
      healthCondition: payload?.healthCondition || user?.healthCondition,
      homeEmail: payload?.homeEmail || user?.homeEmail,
      homePhone: payload?.homePhone || user?.homePhone,
      isDisabled: payload?.isDisabled || user?.isDisabled,
      numberOfKids: payload?.numberOfKids || user?.numberOfKids,
      nidNumber: payload?.nidNumber || user?.nidNumber,
      emergencyContactNumber:
        payload?.emergencyContactNumber || user?.emergencyContactNumber,
      profileImage: payload?.profileImage || user?.profileImage,
      religion: payload?.religion || user?.religion,
      emergencyContactPerson:
        payload?.emergencyContactPerson || user?.emergencyContactPerson,
      emergencyHomePhone:
        payload?.emergencyHomePhone || user?.emergencyHomePhone,
      emergencyWorkPhone:
        payload?.emergencyWorkPhone || user?.emergencyWorkPhone,
      disabilitiesDescription:
        payload?.disabilitiesDescription || user?.disabilitiesDescription,
      position: payload?.position || user?.position,
      emergencyContactRelationship:
        payload?.emergencyContactRelationship ||
        user?.emergencyContactRelationship,
      dutyType: payload?.dutyType || user?.dutyType,
      employeeGrade: payload?.employeeGrade || user?.employeeGrade,
      hireDate: payload?.hireDate || user?.hireDate,
      monthlyWorkHours: payload?.monthlyWorkHours || user?.monthlyWorkHours,
      sosNumber: payload?.sosNumber || user?.sosNumber,

      grossSalary: payload?.grossSalary || user?.grossSalary,
      ethnicGroup: payload?.ethnicGroup || user?.ethnicGroup,
      payFrequency: payload?.payFrequency || user?.payFrequency,
      passport: payload?.passport || user?.passport,
      payFrequencyText: payload?.payFrequencyText || user?.payFrequencyText,
      routingNumber: payload?.routingNumber || user?.routingNumber,
      rehireDate: payload?.rehireDate || user?.rehireDate,
      subDepartmentId: payload?.subDepartmentId || user?.subDepartmentId,
      password: hashPassword || user?.password,
    },
  });

  return result;
};

const deleteEmployee = async (id: string) => {
  console.log(id);

  const result = await prisma.employee.update({
    where: { id },
    data: { isDeleted: true },
  });
  return result;
};
export const EmployeeServices = {
  createEmployee,
  getEmployees,
  getSingleEmployee,
  updateEmployee,
  deleteEmployee,
};
