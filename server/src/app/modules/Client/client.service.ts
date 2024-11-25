import prisma from "../../../shared/prisma";

// Create a new client
const createClient = async (data: any) => {
  const result = await prisma.client.create({
    data: {
      ...data,
    },
  });
  return result;
};

// Get all clients
const getAllClients = async () => {
  const result = await prisma.client.findMany();
  return result;
};

// Get a single client by ID
const getSingleClient = async (id: string) => {
  const result = await prisma.client.findUniqueOrThrow({
    where: {
      id,
    },
    include: {
      project: true, // If you want to include associated projects
    },
  });
  return result;
};

// Update a client by ID
const updateClient = async (id: string, data: any) => {
  const result = await prisma.client.update({
    where: {
      id,
    },
    data,
  });
  return result;
};

// Delete a client by ID
const deleteClient = async (id: string) => {
  const result = await prisma.client.delete({
    where: {
      id,
    },
  });
  return result;
};

export const clientService = {
  createClient,
  getAllClients,
  getSingleClient,
  updateClient,
  deleteClient,
};
