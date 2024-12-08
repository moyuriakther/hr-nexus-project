import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import pick from "../../../shared/pick";
import { CandidateService } from "./candidate.service";
import { CandidateFilterableFields } from "./candidate.utils";

// Create a new Candidate
const createCandidate = catchAsync(async (req: Request, res: Response) => {
  const result = await CandidateService.createCandidate(req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Candidate created successfully!",
    data: result,
  });
});
const createCandidateSelection = catchAsync(
  async (req: Request, res: Response) => {
    const result = await CandidateService.createCandidateSelection(req.body);

    sendResponse(res, {
      statusCode: httpStatus.CREATED,
      success: true,
      message: "Candidate Selection created successfully!",
      data: result,
    });
  }
);
const createCandidateShortList = catchAsync(
  async (req: Request, res: Response) => {
    const result = await CandidateService.createCandidateShortList(req.body);

    sendResponse(res, {
      statusCode: httpStatus.CREATED,
      success: true,
      message: "Candidate ShortList created successfully!",
      data: result,
    });
  }
);
const createCandidateInterview = catchAsync(
  async (req: Request, res: Response) => {
    const result = await CandidateService.createCandidateInterview(req.body);

    sendResponse(res, {
      statusCode: httpStatus.CREATED,
      success: true,
      message: "Candidate Interview is  created successfully!",
      data: result,
    });
  }
);

// Get all Candidates
const getAllCandidates = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, CandidateFilterableFields);
  const options = pick(req.query, ["limit", "page", "sortBy", "sortOrder"]);
  const result = await CandidateService.getAllCandidates(filters, options);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Candidates retrieved successfully!",
    data: result,
  });
});
const getAllShortListedCandidates = catchAsync(
  async (req: Request, res: Response) => {
    const filters = pick(req.query, CandidateFilterableFields);
    const options = pick(req.query, ["limit", "page", "sortBy", "sortOrder"]);
    const result = await CandidateService.getAllShortListedCandidates(
      filters,
      options
    );

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Short Listed Candidates retrieved successfully!",
      data: result,
    });
  }
);
const getAllSelectedCandidates = catchAsync(
  async (req: Request, res: Response) => {
    const filters = pick(req.query, CandidateFilterableFields);
    const options = pick(req.query, ["limit", "page", "sortBy", "sortOrder"]);
    const result = await CandidateService.getAllSelectedCandidates(
      filters,
      options
    );

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Selected Candidates retrieved successfully!",
      data: result,
    });
  }
);
const getCandidatesInterviews = catchAsync(
  async (req: Request, res: Response) => {
    const filters = pick(req.query, CandidateFilterableFields);
    const options = pick(req.query, ["limit", "page", "sortBy", "sortOrder"]);
    const result = await CandidateService.getCandidateInterviewResults(
      filters,
      options
    );

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: " Candidates Interview retrieved successfully!",
      data: result,
    });
  }
);

// Get a single Candidate
const getSingleCandidate = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;

  const result = await CandidateService.getSingleCandidate(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Candidate retrieved successfully!",
    data: result,
  });
});
const getSingleShortListedCandidate = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;

    const result = await CandidateService.getSingleShortListedCandidate(id);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Short Listed Candidate retrieved successfully!",
      data: result,
    });
  }
);
const getSingleSelectedCandidate = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;

    const result = await CandidateService.getSingleSelectedCandidate(id);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Selected Candidate retrieved successfully!",
      data: result,
    });
  }
);

// Update a Candidate
const updateCandidate = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = req.body;

  const result = await CandidateService.updateCandidate(id, data);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Candidate updated successfully!",
    data: result,
  });
});
const updateCandidateShortList = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const data = req.body;

    const result = await CandidateService.updateShortListedCandidate(id, data);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Candidate ShortList updated successfully!",
      data: result,
    });
  }
);
const updateCandidateSelection = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const data = req.body;

    const result = await CandidateService.updateSelectedCandidate(id, data);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Candidate Selection updated successfully!",
      data: result,
    });
  }
);
const updateCandidateInterview = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const data = req.body;

    const result = await CandidateService.updateCandidateInterview(id, data);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Candidate Selection updated successfully!",
      data: result,
    });
  }
);

// Delete a Candidate
const deleteCandidate = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;

  const result = await CandidateService.deleteCandidate(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Candidate deleted successfully!",
    data: result,
  });
});

export const CandidateController = {
  createCandidate,
  createCandidateSelection,
  createCandidateShortList,
  createCandidateInterview,
  getAllCandidates,
  getAllShortListedCandidates,
  getAllSelectedCandidates,
  getCandidatesInterviews,
  getSingleCandidate,
  getSingleShortListedCandidate,
  getSingleSelectedCandidate,
  updateCandidateShortList,
  updateCandidateSelection,
  updateCandidate,
  updateCandidateInterview,
  deleteCandidate,
};
