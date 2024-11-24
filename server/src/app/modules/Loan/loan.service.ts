import prisma from "../../../shared/prisma";

// Create a new loan
const createLoan = async (data: any) => {
  const result = await prisma.loan.create({
    data: {
      ...data,
    },
  });
  return result;
};

// Get all loans
const getAllLoans = async () => {
  const result = await prisma.loan.findMany({
    include: {
      employee: true,
    },
  });
  return result;
};

// Get a single loan by ID
const getSingleLoan = async (id: string) => {
  const result = await prisma.loan.findUniqueOrThrow({
    where: {
      id,
    },
    include: {
      employee: true,
    },
  });
  return result;
};

// Update a loan by ID
const updateLoan = async (id: string, data: any) => {
  const result = await prisma.loan.update({
    where: {
      id,
    },
    data,
  });
  return result;
};

// Delete a loan by ID
const deleteLoan = async (id: string) => {
  const result = await prisma.loan.delete({
    where: {
      id,
    },
  });
  return result;
};

export const loanService = {
  createLoan,
  getAllLoans,
  getSingleLoan,
  updateLoan,
  deleteLoan,
};
