import { Router } from "express";
import validateRequest from "../../../shared/validateRequest";
import { UserValidation } from "./user.validation";
import { UserController } from "./user.controller";
import auth from "../../middleware/auth";

const router = Router();

router.post("/create-user", UserController.createUser);
router.get("/get-users", UserController.getUsers);
router.get("/get-profile", auth(), UserController.getMyProfile);
router.put("/update-profile", auth(), UserController.updateMyProfile);

export const UserRoutes = router;
