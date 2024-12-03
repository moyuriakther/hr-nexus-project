import { Router } from "express";
import auth from "../../middleware/auth";
import { UserController } from "./user.controller";

const router = Router();

router.post("/create-user", UserController.createUser);
router.get("/get-users", UserController.getUsers);
router.get("/get-profile", auth(), UserController.getMyProfile);
router.patch("/update-profile", auth(), UserController.updateMyProfile);

export const UserRoutes = router;
