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


router.post("/forgot-password", AuthController.forgotPassword);
router.post("/reset-password", AuthController.resetPassword);
export const AuthRoutes = router;
