import prisma from "../../../shared/prisma";
// import { CandidateSearchableFields } from "./Candidate.utils";
import { paginationHelper } from "../../../Helpers/paginationHelpers";
import { IPaginationOptions } from "../../Interfaces/IPaginationOptions";
import { Prisma } from "@prisma/client";
import { CandidateSearchableFields } from "./candidate.utils";

// Create a new Candidate
const createCandidate = async (data: any) => {
  const { name, ...restData } = data;

  // Generate unique candidateId
  const candidatePrefix = name?.substring(0, 4)?.toUpperCase() || "CAND"; // Default prefix if name is shorter
  const uniqueSuffix = Math.random().toString(36).substring(2, 6);
  const candidateId = `${candidatePrefix}${uniqueSuffix}`;

  // Check if the candidate already exists in the list
  const existingCandidate = await prisma.candidateList.findFirst({
    where: {
      candidateId: candidateId, // Ensure candidateId is unique
      isDeleted: false,
    },
  });

  if (existingCandidate) {
    return {
      success: false,
      message: "A candidate with the generated ID already exists.",
    };
    // throw new Error("A candidate with the generated ID already exists.");
  }

  // Create a new candidate record
  const result = await prisma.candidateList.create({
    data: {
      candidateId, // Use the generated unique candidateId
      name,
      ...restData,
    },
  });

  console.log("Created Candidate:", result);
  return result;
};

const createCandidateShortList = async (data: any) => {
 
  const { candidateId, interviewDate } = data;

  // Check if the candidate exists
  const candidate = await prisma.candidateList.findFirst({
    where: { candidateId: candidateId, isDeleted: false },
  });

  if (!candidate) {
    return {
      success: false,
      message: "Candidate with the given ID does not exist.",
    };
    // throw new Error("");
  }

  // Check if the candidate has an existing (active or deleted) shortlist
  const existingShortlist = await prisma.shortList.findFirst({
    where: {
      candidateId: data?.candidateId,
    },
  });

  if (existingShortlist) {
    if (!existingShortlist.isDeleted) {
      // If the shortlist is active, throw an error
      return {
        success: false,
        message: "The candidate has already been shortlisted.",
      };
      // throw new Error("The candidate has already been shortlisted.");
    } else {
      // If the shortlist is deleted, update it instead of creating a new one
      const updatedShortlist = await prisma.shortList.update({
        where: { id: existingShortlist.id },
        data: {
          isDeleted: false,
          interviewDate: new Date(interviewDate),
          shortlistDate: new Date(),
          updatedAt: new Date(),
        },
      });
      console.log("Updated Shortlist--", updatedShortlist);
      return updatedShortlist;
    }
  }

  // Proceed to create a new shortlist if no existing record
  const shortList = await prisma.shortList.create({
    data: {
      ...data,
      candidateId,
      interviewDate: new Date(interviewDate),
      shortlistDate: new Date(),
    },
  });

  console.log("Created Shortlist--", shortList);
  return shortList;
};


const createCandidateInterview = async (data: any) => {
  const { candidateId, ...restData } = data;

  const candidatePrefix = candidateId.substring(0, 4);
  const uniqueSuffix = Math.random().toString(36).substring(2, 6);
  const interviewId = `${candidatePrefix}${uniqueSuffix}`;

  // Check if the candidate exists in the shortlist
  const shortListedCandidate = await prisma.shortList.findFirst({
    where: {
      candidateId,
      isDeleted: false,
    },
  });

  if (!shortListedCandidate) {
    return {
      success: false,
      message: "Invalid candidateId. No matching candidate found in the shortlist.",
    };
    // throw new Error("Invalid candidateId. No matching candidate found in the shortlist.");
  }

  // Check if the candidate already has an interview (active or deleted)
  const existingInterview = await prisma.interview.findFirst({
    where: {
      candidateId: candidateId,

    },
  });

  if (existingInterview) {
    if (!existingInterview.isDeleted) {
      // If the interview is active, throw an error
      return {
        success: false,
        message: "The candidate has already been selected for this interview.",
      };
      // throw new Error("The candidate has already been selected for this interview.");
    } else {
      // If the interview is deleted, update it instead of creating a new one
      const updatedInterview = await prisma.interview.update({
        where: { id: existingInterview.id },
        data: {
          isDeleted: false,
          interviewId,
          interviewDate: new Date().toISOString(),
          updatedAt: new Date(),
          ...restData,
        },
      });
      console.log("Updated Interview--", updatedInterview);
      return updatedInterview;
    }
  }

  // Create a new interview if no existing record
  const result = await prisma.interview.create({
    data: {
      interviewId,
      candidateId,
      interviewDate: new Date().toISOString(),
      ...restData,
    },
  });

  console.log("Created Interview--", result);
  return result;
};




const createCandidateSelection = async (data: any) => {
  const { candidateId, interviewId, selectionTerms } = data;

  // Check if the candidate exists in an interview and is valid
  console.log(data)
  const interview = await prisma.interview.findFirst({
    where: {
      candidateId,
      interviewId,
      isSelected:true,
      isDeleted: false, // Ensure the interview record is not deleted
    },
  });

  if (!interview) {
    return {
      success: false,
      message: "Invalid `candidateId`. No associated interview found or not selected.",
    };
  }
  


  // Check if the candidate has already been selected (active or deleted)
  const existingSelection = await prisma.candidateSelection.findFirst({
    where: {
      candidateId,
      interviewId
    },
  });
console.log(existingSelection)
  if (existingSelection) {
    if (!existingSelection.isDeleted) {
      // If the selection is active, throw an error
      return {
        success: false,
        message: "The candidate has already been selected.",
      };
    } else {
      // If the selection is deleted, update it instead of creating a new one
      const updatedSelection = await prisma.candidateSelection.update({
        where: { id: existingSelection.id },
        data: {
          isDeleted: false,
          interviewId: interview.interviewId, // Use the interview ID found from the query
          selectionTerms,
          updatedAt: new Date(),
        },
      });
      console.log("Updated Selection--", updatedSelection);
      return updatedSelection;
    }
  }

  // Create a new selection if no existing record
  const result = await prisma.candidateSelection.create({
    data: {
      candidateId,
      interviewId: interview.interviewId, // Use the interview ID found from the query
      selectionTerms,
    },
  });

  console.log("Created Selection--", result);
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

  // Handle search term (specific to candidateId or other searchable fields)
  if (searchTerm) {
    andConditions.push({
      OR: [
        {
          candidateId: {
            contains: searchTerm,
            mode: "insensitive",
          },
        },
        // Add more searchable fields here if needed
      ],
    });
  }

  // Handle filter conditions (e.g., filtering by specific fields)
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
      meetingLink: true,
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
    meetingLink : shortlist.meetingLink,
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
  const { searchTerm, candidateId, ...filterData } = params;
  console.log(searchTerm); // Debug log for searchTerm

  const andConditions: Prisma.InterviewWhereInput[] = [
    {
      isDeleted: false,
    },
  ];

  // Filter by candidateId if provided
  if (candidateId) {
    andConditions.push({
      shortListedCandidate: {
        candidateId: candidateId, // Filter by candidateId
      },
    });
  }

  // Handle search term
  if (searchTerm) {
    andConditions.push({
      OR: [
        {
          candidateId: {
            contains: searchTerm,
            mode: "insensitive",
          },
        },
        {
          shortListedCandidate: {
            candidate: {
              jobPosition: {
                contains: searchTerm,
                mode: "insensitive",
              },
            },
          },
        },
      ],
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
          candidate: {
            select: {
              candidateId: true,
              name: true,
              photograph: true,
              email: true,
              phone: true,
              jobPosition: true,
              ssn: true,
              meetingLink: true, // Ensure this is included here
            },
          },
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
    meetingLink: interview?.shortListedCandidate?.candidate?.meetingLink, // Access meetingLink from candidate
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


const getAllSelectedCandidates = async (params: any, options: IPaginationOptions) => {
  const { page, limit, skip } = paginationHelper.calculatePagination(options);
  const { searchTerm, ...filterData } = params;

  // Define search conditions
  const andConditions: Prisma.CandidateSelectionWhereInput[] = [
    {
      isDeleted: false,
      interview: {
        isSelected: true,
        isDeleted: false,
      },
    },
  ];

  // Add search term condition
  if (searchTerm) {
    andConditions.push({
      OR: [
        {
          interview: {
            shortListedCandidate: {
              candidate: {
                candidateId: {
                  contains: searchTerm,
                  mode: "insensitive",
                },
              },
            },
          },
        },
        {
          interview: {
            shortListedCandidate: {
              candidate: {
                jobPosition: {
                  contains: searchTerm,
                  mode: "insensitive",
                },
              },
            },
          },
        },
      ],
    });
  }

  // Add filter conditions
  if (Object.keys(filterData).length > 0) {
    andConditions.push({
      AND: Object.keys(filterData).map((key) => ({
        interview: {
          shortListedCandidate: {
            candidate: {
              [key]: {
                equals: (filterData as any)[key],
              },
            },
          },
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
              candidate: true, // Include candidate data
            },
          },
        },
      },
    },
  });

  // Transform the result
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
      interviewId: selection.interviewId,
      isDeleted: selection.isDeleted,
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
  console.log("update data",data)
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
