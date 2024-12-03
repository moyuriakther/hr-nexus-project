import express, { NextFunction, Request, Response } from "express";
import { AuthController } from "./auth.controller";
import auth from "../../middleware/auth";

const router = express.Router();

router.post("/login", AuthController.loginUser);
router.post(
  "/refresh-token",
  //   validateRequest(AuthValidation.refreshTokenZodSchema),
  AuthController.refreshToken
);

router.post("/change-password", auth(), AuthController.changePassword);

export const AuthRoutes = router;
