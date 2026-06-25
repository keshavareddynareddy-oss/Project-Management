import { Router } from "express";
import { create, listTasks, updateStatus } from "./task.controller.js";
import { protect } from "../../middleware/auth.middleware.js";

const router = Router();

router.use(protect);
router.get("/", listTasks);
router.post("/", create);
router.patch("/:id/status", updateStatus);

export default router;
