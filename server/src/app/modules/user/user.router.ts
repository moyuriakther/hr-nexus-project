import { Router } from "express";
import validateRequest from "../../../shared/validateRequest";
import { UserValidation } from "./user.validation";
import { UserController } from "./user.controller";

const router = Router();

router.post("/create-user", UserController.createUser);

export const UserRoutes = router;
