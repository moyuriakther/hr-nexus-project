import express from "express";
import { NoticeboardController } from "./noticeboard.controller";

const router = express.Router();

router.post("/create", NoticeboardController.createNoticeboard);
router.get("/", NoticeboardController.getAllNoticeboards);
router.get("/:id", NoticeboardController.getSingleNoticeboard);
router.patch("/:id", NoticeboardController.updateNoticeboard);
router.delete("/:id", NoticeboardController.deleteNoticeboard);

export const NoticeboardRoutes = router;
