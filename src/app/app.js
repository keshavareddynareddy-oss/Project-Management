import cors from "cors";
import express from "express";
import { env } from "../server/config/env.js";
import authRoutes from "../server/modules/auth/auth.routes.js";
import userRoutes from "../server/modules/users/user.routes.js";
import projectRoutes from "../server/modules/projects/project.routes.js";
import taskRoutes from "../server/modules/tasks/task.routes.js";
import commentRoutes from "../server/modules/comments/comment.routes.js";
import { errorHandler, notFound } from "../server/middleware/error.middleware.js";

const app = express();

app.use(
  cors({
    origin: env.clientOrigin
  })
);
app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/api/comments", commentRoutes);

app.use(notFound);
app.use(errorHandler);

export default app;
