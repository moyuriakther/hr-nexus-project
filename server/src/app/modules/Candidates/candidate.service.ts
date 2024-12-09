import prisma from "../../../shared/prisma";
// import { CandidateSearchableFields } from "./Candidate.utils";
import { paginationHelper } from "../../../Helpers/paginationHelpers";
import { IPaginationOptions } from "../../Interfaces/IPaginationOptions";
import { Prisma } from "@prisma/client";
import { CandidateSearchableFields } from "./candidate.utils";

// Create a new Candidate
const createCandidate = async (data: any) => {

  const existingCandidate = await prisma.candidateList.findFirst({
    where: {
      candidateId: data?.candidateId,
      isDeleted: false,
    },
  });

  if (existingCandidate) {
    throw new Error("The candidate has already been candidate List");
  }
  const result = await prisma.candidateList.create({
    data: {
      ...data,
    },
  });
  return result;
};
const createCandidateShortList = async (data: any) => {
  // Check if the candidate exists
  const candidate = await prisma.candidateList.findUnique({
    where: { candidateId: data.candidateId ,isDeleted: false},
  });
  console.log(data,candidate)

  if (!candidate) {
    throw new Error("Candidate with the given ID does not exist.");
  }

  const existingShortlist = await prisma.shortList.findFirst({
    where: {
      candidateId: candidateId,
      isDeleted: false,
    },
  });

  if (existingShortlist) {
    throw new Error("The candidate has already been shortlist");
  }
  // Proceed to create the shortlist
  const shortList = await prisma.shortList.create({
    data: {
      ...data,
    },
  });

  return shortList;
};

const createCandidateInterview = async (data: any) => {
  const { candidateId, ...restData } = data;

  const candidatePrefix = candidateId.substring(0, 4);
  
  // Generate a 4-character unique suffix
  const uniqueSuffix = Math.random().toString(36).substring(2, 6);
  const interviewId = `${candidatePrefix}${uniqueSuffix}`;

  const existingInterviewList = await prisma.interview.findFirst({
    where: {
      candidateId: candidateId,
      isDeleted: false,
    },
  });

  if (existingInterviewList) {
    throw new Error("The candidate has already been selected for this interview.");
  }
  const shortListedCandidate = await prisma.shortList.findFirst({
    where: {
      candidateId,
      isDeleted: false,
    },
  });

  if (!shortListedCandidate) {
    throw new Error("Invalid candidateId. No matching candidate found in the shortlist.");
  }

  // Create Interview with the generated interviewId
  const result = await prisma.interview.create({
    data: {
      interviewId, // Custom 8-character interview ID
      candidateId,
      ...restData,
    },
  });

  return result;
};


// const createCandidateSelection = async (data: any) => {
//   const result = await prisma.candidateSelection.create({
//     data: {
//       ...data,
//     },
//   });
//   return result;
// };
const createCandidateSelection = async (data: any) => {
  const { candidateId, interviewId, position, selectionTerms } = data;
  const existingSelection = await prisma.candidateSelection.findFirst({
    where: {
      candidateId: candidateId,
      isDeleted: false,
    },
  });

  if (existingSelection) {
    throw new Error("The candidate has already been selected");
  }
  
  const interview = await prisma.interview.findFirst({
    where: {
      interviewId: interviewId,
      candidateId, 
      isDeleted: false, 
    },
  });

  if (!interview) {
    throw new Error(
      "Invalid candidateId or interviewId. No matching interview found."
    );
  }

  const result = await prisma.candidateSelection.create({
    data: {
      candidateId,
      interviewId: interview.interviewId, 
      position,
      selectionTerms,
    },
  });

  return result;
};



// Get all Candidates
const getAllCandidates = async (params: any, options: IPaginationOptions) => {
  const { page, limit, skip } = paginationHelper.calculatePagination(options);
  const { searchTerm, ...filterData } = params;
  console.log(searchTerm); // Debug log for searchTerm

  const andConditions: Prisma.CandidateListWhereInput[] = [
    {
      isDeleted: false, // Ensure only non-deleted records are fetched
    },
  ];

  // Handle search term
  if (searchTerm) {
    andConditions.push({
      OR: CandidateSearchableFields.map((field) => ({
        [field]: {
          contains: searchTerm,
          mode: "insensitive",
        },
      })),
    });
  }

  // Handle filter conditions
  if (Object.keys(filterData).length > 0) {
    andConditions.push({
      AND: Object.keys(filterData).map((key) => ({
        [key]: {
          equals: (filterData as any)[key],
        },
      })),
    });
  }

  // Combine conditions
  const whereConditions: Prisma.CandidateListWhereInput =
    andConditions.length > 0 ? { AND: andConditions } : {};

  // Fetch data with pagination and sorting
  const result = await prisma.candidateList.findMany({
    where: whereConditions,
    skip,
    take: limit,
    orderBy:
      options.sortBy && options.sortOrder
        ? { [options.sortBy]: options.sortOrder }
        : { createdAt: "desc" },
    // include: {
    //   project: true,
    // },
  });

  // Get total count
  const total = await prisma.candidateList.count({ where: whereConditions });

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};

//   params: any,
//   options: IPaginationOptions
// ) => {
//   const { page, limit, skip } = paginationHelper.calculatePagination(options);
//   const { searchTerm, ...filterData } = params;
//   console.log(searchTerm); // Debug log for searchTerm

//   const andConditions: Prisma.ShortListWhereInput[] = [
//     {
//       isDeleted: false, // Ensure only non-deleted records are fetched
//     },
//   ];

//   // Handle search term
//   if (searchTerm) {
//     andConditions.push({
//       OR: CandidateSearchableFields.map((field) => ({
//         [field]: {
//           contains: searchTerm,
//           mode: "insensitive",
//         },
//       })),
//     });
//   }

//   // Handle filter conditions
//   if (Object.keys(filterData).length > 0) {
//     andConditions.push({
//       AND: Object.keys(filterData).map((key) => ({
//         [key]: {
//           equals: (filterData as any)[key],
//         },
//       })),
//     });
//   }

//   // Combine conditions
//   const whereConditions: Prisma.ShortListWhereInput =
//     andConditions.length > 0 ? { AND: andConditions } : {};

//   // Fetch data with pagination and sorting
//   const result = await prisma.shortList.findMany({
//     where: whereConditions,
//     skip,
//     take: limit,
//     orderBy:
//       options.sortBy && options.sortOrder
//         ? { [options.sortBy]: options.sortOrder }
//         : { createdAt: "desc" },
//     // include: {
//     //   project: true,
//     // },
//   });

//   // Get total count
//   const total = await prisma.shortList.count({ where: whereConditions });

//   return {
//     meta: {
//       page,
//       limit,
//       total,
//     },
//     data: result,
//   };
// };
const getAllShortListedCandidates = async (
  params: any,
  options: IPaginationOptions
) => {
  const { page, limit, skip } = paginationHelper.calculatePagination(options);
  const { searchTerm, ...filterData } = params;

  const andConditions: Prisma.ShortListWhereInput[] = [
    {
      isDeleted: false,
    },
  ];

  // Handle search term
  if (searchTerm) {
    andConditions.push({
      OR: CandidateSearchableFields.map((field) => ({
        [field]: {
          contains: searchTerm,
          mode: "insensitive",
        },
      })),
    });
  }

  // Handle filter conditions
  if (Object.keys(filterData).length > 0) {
    andConditions.push({
      AND: Object.keys(filterData).map((key) => ({
        [key]: {
          equals: (filterData as any)[key],
        },
      })),
    });
  }

  const whereConditions: Prisma.ShortListWhereInput =
    andConditions.length > 0 ? { AND: andConditions } : {};

  // Fetch shortlisted candidates with flattened fields
  const result = await prisma.shortList.findMany({
    where: whereConditions,
    skip,
    take: limit,
    orderBy:
      options.sortBy && options.sortOrder
        ? { [options.sortBy]: options.sortOrder }
        : { createdAt: "desc" },
    select: {
      id: true,
      candidateId: true,
      shortlistDate: true,
      interviewDate: true,
      isDeleted: true,
      createdAt: true,
      updatedAt: true,
      candidate: {
        select: {
          name: true,
          photograph: true,
          email: true,
          ssn: true,
          phone: true,
          jobPosition: true,
          isDeleted: true,
          createdAt: true,
          updatedAt: true,
        },
      },
    },
  });

  // Flatten the result
  const flattenedResult = result.map((shortlist) => ({
    id: shortlist.id,
    candidateId: shortlist.candidateId,
    shortlistDate: shortlist.shortlistDate,
    interviewDate: shortlist.interviewDate,
    isDeleted: shortlist.isDeleted,
    createdAt: shortlist.createdAt,
    updatedAt: shortlist.updatedAt,
    ...shortlist.candidate, // Merge candidate fields
  }));

  // Get total count
  const total = await prisma.shortList.count({ where: whereConditions });

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: flattenedResult,
  };
};


const getCandidateInterviewResults = async (
  params: any,
  options: IPaginationOptions
) => {
  const { page, limit, skip } = paginationHelper.calculatePagination(options);
  const { searchTerm, ...filterData } = params;
  console.log(searchTerm); // Debug log for searchTerm

  const andConditions: Prisma.InterviewWhereInput[] = [
    {
      isDeleted: false,
      // isSelected: true, // Uncomment if you want to filter based on isSelected
    },
  ];

  // Handle search term
  if (searchTerm) {
    andConditions.push({
      OR: CandidateSearchableFields.map((field) => ({
        [field]: {
          contains: searchTerm,
          mode: "insensitive",
        },
      })),
    });
  }

  // Handle filter conditions
  if (Object.keys(filterData).length > 0) {
    andConditions.push({
      AND: Object.keys(filterData).map((key) => ({
        [key]: {
          equals: (filterData as any)[key],
        },
      })),
    });
  }

  // Combine conditions
  const whereConditions: Prisma.InterviewWhereInput =
    andConditions.length > 0 ? { AND: andConditions } : {};

  // Fetch data with pagination and sorting
  const result = await prisma.interview.findMany({
    where: whereConditions,
    skip,
    take: limit,
    orderBy:
      options.sortBy && options.sortOrder
        ? { [options.sortBy]: options.sortOrder }
        : { createdAt: "desc" },
    include: {
      shortListedCandidate: {
        include: {
          candidate: true, // Include all candidate fields
        },
      },
    },
  });

  // Get total count
  const total = await prisma.interview.count({
    where: whereConditions,
  });

  // Prepare the result structure
  const formattedResult = result.map(interview => ({
    id: interview.id,
    interviewId: interview.interviewId, 
    interviewer: interview.interviewer,
    interviewDate: interview.interviewDate,
    vivaMarks: interview.vivaMarks,
    writtenMarks: interview.writtenMarks,
    mcqTotalMarks: interview.mcqTotalMarks,
    totalMarks: interview.totalMarks,
    meetingLink: interview?.meetingLink,
    isSelected: interview?.isSelected,
    isDeleted: interview.isDeleted,
    createdAt: interview.createdAt,
    updatedAt: interview.updatedAt,
    candidateId: interview?.shortListedCandidate?.candidateId,
    name: interview?.shortListedCandidate?.candidate?.name,
    photograph: interview?.shortListedCandidate?.candidate?.photograph,
    email: interview?.shortListedCandidate?.candidate?.email,
    phone: interview?.shortListedCandidate?.candidate?.phone,
    jobPosition: interview?.shortListedCandidate?.candidate?.jobPosition,
    ssn: interview?.shortListedCandidate?.candidate?.ssn,
  }));

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: formattedResult,
  };
};


// const getAllSelectedCandidates = async (
//   params: any,
//   options: IPaginationOptions
// ) => {
//   const { page, limit, skip } = paginationHelper.calculatePagination(options);
//   const { searchTerm, ...filterData } = params;
//   console.log(searchTerm); // Debug log for searchTerm

//   const andConditions: Prisma.CandidateSelectionWhereInput[] = [
//     {
//       isDeleted: false, // Ensure only non-deleted records are fetched
//     },
//   ];

//   // Handle search term
//   if (searchTerm) {
//     andConditions.push({
//       OR: CandidateSearchableFields.map((field) => ({
//         [field]: {
//           contains: searchTerm,
//           mode: "insensitive",
//         },
//       })),
//     });
//   }

//   // Handle filter conditions
//   if (Object.keys(filterData).length > 0) {
//     andConditions.push({
//       AND: Object.keys(filterData).map((key) => ({
//         [key]: {
//           equals: (filterData as any)[key],
//         },
//       })),
//     });
//   }

//   // Combine conditions
//   const whereConditions: Prisma.CandidateSelectionWhereInput =
//     andConditions.length > 0 ? { AND: andConditions } : {};

//   // Fetch data with pagination and sorting
//   const result = await prisma.candidateSelection.findMany({
//     where: whereConditions,
//     skip,
//     take: limit,
//     orderBy:
//       options.sortBy && options.sortOrder
//         ? { [options.sortBy]: options.sortOrder }
//         : { createdAt: "desc" },
//     // include: {
//     //   project: true,
//     // },
//   });

//   // Get total count
//   const total = await prisma.candidateSelection.count({
//     where: whereConditions,
//   });

//   return {
//     meta: {
//       page,
//       limit,
//       total,
//     },
//     data: result,
//   };
// };
// Get a single Candidate by ID

const getAllSelectedCandidates = async (
  params: any,
  options: IPaginationOptions
) => {
  const { page, limit, skip } = paginationHelper.calculatePagination(options);
  const { searchTerm, ...filterData } = params;

  const andConditions: Prisma.CandidateSelectionWhereInput[] = [
    {
      isDeleted: false, // Ensure only non-deleted records are fetched
      interview: {
        isSelected: true, // Fetch only selected candidates
        isDeleted: false, // Ensure the interview record is not deleted
      },
    },
  ];

  // Handle search term
  if (searchTerm) {
    andConditions.push({
      OR: CandidateSearchableFields.map((field) => ({
        [`interview.shortListedCandidate.candidate.${field}`]: {
          contains: searchTerm,
          mode: "insensitive",
        },
      })),
    });
  }

  // Handle filter conditions
  if (Object.keys(filterData).length > 0) {
    andConditions.push({
      AND: Object.keys(filterData).map((key) => ({
        [`interview.shortListedCandidate.candidate.${key}`]: {
          equals: (filterData as any)[key],
        },
      })),
    });
  }

  // Combine conditions
  const whereConditions: Prisma.CandidateSelectionWhereInput =
    andConditions.length > 0 ? { AND: andConditions } : {};

  // Fetch data with pagination and sorting
  const result = await prisma.candidateSelection.findMany({
    where: whereConditions,
    skip,
    take: limit,
    orderBy:
      options.sortBy && options.sortOrder
        ? { [options.sortBy]: options.sortOrder }
        : { createdAt: "desc" },
    include: {
      interview: {
        include: {
          shortListedCandidate: {
            include: {
              candidate: true, // Include candidate details
            },
          },
        },
      },
    },
  });

  // Transform the result to return only the required fields
  const formattedResult = result.map((selection) => {
    const { interview } = selection;
    const { shortListedCandidate } = interview ?? {};
    const { candidate } = shortListedCandidate ?? {};
    return {
      id: selection.id,
      candidateId: candidate?.candidateId,
      name: candidate?.name,
      email: candidate?.email,
      phone: candidate?.phone,
      jobPosition: candidate?.jobPosition,
      interviewDate: interview?.interviewDate,
      vivaMarks: interview?.vivaMarks,
      writtenMarks: interview?.writtenMarks,
      totalMarks: interview?.totalMarks,
      selectionTerms: selection.selectionTerms,
      interviewId: selection.interviewId, // Added interviewId from CandidateSelection
      isDeleted: selection.isDeleted, // Added isDeleted from CandidateSelection
      createdAt: selection.createdAt,
      updatedAt: selection.updatedAt,
    };
  });

  // Get total count
  const total = await prisma.candidateSelection.count({
    where: whereConditions,
  });

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: formattedResult,
  };
};


const getSingleCandidate = async (id: string) => {
  const result = await prisma.candidateList.findUniqueOrThrow({
    where: {
      id,
    },
    // include: {
    //   project: true, // If you want to include associated projects
    // },
  });
  return result;
};
const getSingleShortListedCandidate = async (id: string) => {
  const result = await prisma.shortList.findUniqueOrThrow({
    where: {
      id,
    },
    include: {
      candidate: true,
    },
  });
  return result;
};
const getSingleSelectedCandidate = async (id: string) => {
  const result = await prisma.candidateSelection.findUniqueOrThrow({
    where: {
      id,
    },
  });
  return result;
};

// Update a Candidate by ID
const updateCandidate = async (id: string, data: any) => {
  const result = await prisma.candidateList.update({
    where: {
      id,
    },
    data,
  });
  return result;
};
// Update a Candidate by ID
const updateShortListedCandidate = async (id: string, data: any) => {
  const result = await prisma.shortList.update({
    where: {
      id,
    },
    data,
  });
  return result;
};
// Update a Candidate by ID
const updateSelectedCandidate = async (id: string, data: any) => {
  const result = await prisma.candidateSelection.update({
    where: {
      id,
    },
    data,
  });
  return result;
};
const updateCandidateInterview = async (id: string, data: any) => {
  const result = await prisma.interview.update({
    where: {
      id,
    },
    data,
  });
  return result;
};

// Delete a Candidate by ID
const deleteCandidate = async (id: string) => {
  const result = await prisma.candidateList.delete({
    where: {
      id,
    },
  });
  return result;
};

export const CandidateService = {
  createCandidate,
  createCandidateSelection,
  getAllCandidates,
  createCandidateShortList,
  createCandidateInterview,
  getAllShortListedCandidates,
  getAllSelectedCandidates,
  getCandidateInterviewResults,
  getSingleCandidate,
  getSingleShortListedCandidate,
  getSingleSelectedCandidate,
  updateCandidate,
  updateShortListedCandidate,
  updateSelectedCandidate,
  updateCandidateInterview,
  deleteCandidate,
};
