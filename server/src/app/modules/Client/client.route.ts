import express from "express";
import { clientController } from "./client.controller";

const router = express.Router();

router.post("/create-client", clientController.createClient); // Create client
router.get("/", clientController.getAllClients); // Get all clients
router.get("/:id", clientController.getSingleClient); // Get single client by ID
router.patch("/:id", clientController.updateClient); // Update client by ID
router.delete("/:id", clientController.deleteClient); // Delete client by ID

export const ClientRoutes = router;
