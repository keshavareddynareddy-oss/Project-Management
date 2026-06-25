import { Router } from "express";
import { getMe, listUsers } from "./user.controller.js";
import { protect } from "../../middleware/auth.middleware.js";

const router = Router();

router.use(protect);
router.get("/", listUsers);
router.get("/me", getMe);

export default router;
