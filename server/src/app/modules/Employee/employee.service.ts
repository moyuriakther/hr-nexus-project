import bcrypt from "bcrypt";
import prisma from "../../../shared/prisma";
import { Prisma } from "@prisma/client";
import { IPaginationOptions } from "../../Interfaces/IPaginationOptions";
import { paginationHelper } from "../../../Helpers/paginationHelpers";
import { employeeSearchableFields } from "./employee.utils";

const createEmployee = async (payload: any) => {
  // Hash the password
  const hashPassword: string = await bcrypt.hash(payload.password, 12);

  // Execute a Prisma transaction
  const employeeInfo = await prisma.$transaction(async (prisma) => {
    const UserName = payload.firstName + " " + payload.lastName;
    const userInfo = await prisma.user.create({
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
        passportPhoto: payload.passportPhoto,

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
        password: payload.password,

        updatedAt: payload.updatedAt,
      },
    });

    return employee; // Return the created employee information
  });

  return employeeInfo; // Return the employee information to the caller
};

const getEmployees = async (params: any, options: IPaginationOptions) => {
  const { page, limit, skip } = paginationHelper.calculatePagination(options);
  const { searchTerm, ...filterData } = params;

  const andConditions: Prisma.EmployeeWhereInput[] = [];

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
    select: {
      id: true,
      phoneNumber: true,
      email: true,
      firstName: true,
      lastName: true,
      middleName: true,
      address: true,
      dateOfBirth: true,
      joiningDate: true,
      status: true,
      designation: true,
      departmentId: true,
      employeeType: true,
      accountNumber: true,
      alternateNumber: true,
      alternateEmergencyContact: true,
      alternateEmergencyHomePhone: true,
      alternateEmergencyWorkPhone: true,
      attendanceShift: true,
      basicSalary: true,
      bloodGroup: true,
      branchAddress: true,
      cardNumber: true,
      city: true,
      country: true,
      tinNumber: true,
      terminationDate: true,
      terminationReason: true,
      workInCity: true,
      workPermit: true,
      transportationBenefit: true,
      transportAllowance: true,
      gender: true,
      maritalStatus: true,
      hourlyRate: true,
      hourlyRate2: true,
      familyBenefit: true,
      medicalBenefit: true,
      otherBenefit: true,
      healthCondition: true,
      homeEmail: true,
      homePhone: true,
      isDisabled: true,
      numberOfKids: true,
      nidNumber: true,
      emergencyContactNumber: true,
      passportPhoto: true,
      profileImage: true,
      religion: true,
      emergencyContactPerson: true,
      emergencyHomePhone: true,
      emergencyWorkPhone: true,
      disabilitiesDescription: true,
      position: true,
      emergencyContactRelationship: true,
      dutyType: true,
      employeeGrade: true,
      hireDate: true,
      monthlyWorkHours: true,
      sosNumber: true,

      grossSalary: true,
      ethnicGroup: true,
      payFrequency: true,
      passport: true,
      payFrequencyText: true,
      routingNumber: true,
      rehireDate: true,
      subDepartmentId: true,
      attendance: {
        select: {
          id: true,
          employeeId: true,
          date: true,
          monthName: true,
          attendanceType: true,
          checkIn: true,
          checkOut: true,
          createdAt: true,
          updatedAt: true,
        },
      },
      department: {
        select: {
          name: true,
          id: true,
          description: true,
          createdAt: true,
          updatedAt: true,
          subDepartment: {
            select: {
              name: true,
              id: true,
              description: true,
              createdAt: true,
              updatedAt: true,
            },
          },
        },
      },
      salary: {
        select: {
          id: true,
          basicSalary: true,
          salaryAdvance: true,
          loanDeduction: true,
          grossSalary: true,
          createdAt: true,
          updatedAt: true,
          socialSecurity: true,
          stateIncomeTax: true,
          transportAllowance: true,
          totalBenefits: true,
          contribution: true,
        },
      },

      createdAt: true,
      updatedAt: true,
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
  // console.log(data);

  const result = await prisma.employee.findUniqueOrThrow({
    where: {
      id,
    },
  });
  return result;
};
export const EmployeeServices = {
  createEmployee,
  getEmployees,
  getSingleEmployee,
};
