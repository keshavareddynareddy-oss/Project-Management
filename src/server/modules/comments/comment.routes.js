import { Router } from "express";
import { create, listComments } from "./comment.controller.js";
import { protect } from "../../middleware/auth.middleware.js";

const router = Router();

router.use(protect);
router.get("/", listComments);
router.post("/", create);

export default router;
