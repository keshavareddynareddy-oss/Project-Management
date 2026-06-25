import { Router } from "express";
import { create, getProject, listProjects } from "./project.controller.js";
import { protect } from "../../middleware/auth.middleware.js";

const router = Router();

router.use(protect);
router.get("/", listProjects);
router.get("/:id", getProject);
router.post("/", create);

export default router;
