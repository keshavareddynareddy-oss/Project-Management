import { db } from "../../config/db.js";
import { TASK_STATUS } from "../../../shared/constants/taskStatus.js";
import { createId } from "../../../shared/utils/helpers.js";
import { findById, requireFields } from "../../utils/validators.js";
import { serializeTask } from "./task.model.js";

export function getTasks() {
  return db.tasks.map(serializeTask);
}

export function createTask(payload) {
  requireFields(payload, ["title", "projectId", "assigneeId"]);
  findById(db.projects, payload.projectId, "Project");
  findById(db.users, payload.assigneeId, "User");

  const task = {
    id: createId("task"),
    title: payload.title,
    description: payload.description || "",
    projectId: payload.projectId,
    assigneeId: payload.assigneeId,
    status: payload.status || TASK_STATUS.TODO,
    priority: payload.priority || "medium",
    dueDate: payload.dueDate || null
  };

  db.tasks.push(task);
  return serializeTask(task);
}

export function updateTaskStatus(taskId, status) {
  const task = findById(db.tasks, taskId, "Task");
  task.status = status;
  return serializeTask(task);
}
