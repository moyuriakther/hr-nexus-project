import prisma from "../../../shared/prisma";

// Create a new project
const createProject = async (data: any) => {
  const result = await prisma.project.create({
    data: {
      ...data,
    },
  });
  return result;
};

// Get all projects
const getAllProjects = async () => {
  const result = await prisma.project.findMany({
    include: {
      client: true, // Including client details
    },
  });
  return result;
};

// Get a single project by ID
const getSingleProject = async (id: string) => {
  const result = await prisma.project.findUniqueOrThrow({
    where: {
      id,
    },
    include: {
      client: true, // Including client details
    },
  });
  return result;
};

// Update a project by ID
const updateProject = async (id: string, data: any) => {
  const result = await prisma.project.update({
    where: {
      id,
    },
    data,
  });
  return result;
};

// Delete a project by ID
const deleteProject = async (id: string) => {
  const result = await prisma.project.delete({
    where: {
      id,
    },
  });
  return result;
};

export const projectService = {
  createProject,
  getAllProjects,
  getSingleProject,
  updateProject,
  deleteProject,
};
