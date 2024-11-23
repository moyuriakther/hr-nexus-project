import { z } from "zod";

const createUserValidation = z.object({
  body: z.object({
    name: z.string().optional(),
    email: z.string(),
    password: z.string(),
    photo: z.string().optional(),
    phoneNumber: z.string().optional(),
  }),
});

export const UserValidation = {
  createUserValidation,
};
