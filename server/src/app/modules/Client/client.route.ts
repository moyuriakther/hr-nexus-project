import express from "express";
import { clientController } from "./client.controller";

const router = express.Router();

router.post("/create-client", clientController.createClient);
router.get("/", clientController.getAllClients);
router.get("/:id", clientController.getSingleClient);
router.patch("/:id", clientController.updateClient);
router.delete("/:id", clientController.deleteClient);

export const ClientRoutes = router;
