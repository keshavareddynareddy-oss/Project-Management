import { db } from "../../config/db.js";
import { createId } from "../../../shared/utils/helpers.js";
import { findById, requireFields } from "../../utils/validators.js";
import { serializeProject } from "./project.model.js";

export function getProjects() {
  return db.projects.map((project) =>
    serializeProject(
      project,
      db.tasks.filter((task) => task.projectId === project.id).length
    )
  );
}

export function getProjectById(projectId) {
  const project = findById(db.projects, projectId, "Project");
  const projectTasks = db.tasks.filter((task) => task.projectId === projectId);

  return {
    ...serializeProject(project, projectTasks.length),
    tasks: projectTasks,
    comments: db.comments.filter((comment) =>
      projectTasks.some((task) => task.id === comment.taskId)
    )
  };
}

export function createProject(payload, user) {
  requireFields(payload, ["name", "description"]);

  const project = {
    id: createId("project"),
    name: payload.name,
    description: payload.description,
    ownerId: user.id,
    status: payload.status || "planning",
    dueDate: payload.dueDate || null
  };

  db.projects.push(project);
  return serializeProject(project, 0);
}
