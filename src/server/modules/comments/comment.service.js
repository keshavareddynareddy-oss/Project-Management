import { db } from "../../config/db.js";
import { createId } from "../../../shared/utils/helpers.js";
import { findById, requireFields } from "../../utils/validators.js";
import { serializeComment } from "./comment.model.js";

export function getComments() {
  return db.comments.map(serializeComment);
}

export function createComment(payload, user) {
  requireFields(payload, ["taskId", "message"]);
  findById(db.tasks, payload.taskId, "Task");

  const comment = {
    id: createId("comment"),
    taskId: payload.taskId,
    authorId: user.id,
    message: payload.message,
    createdAt: new Date().toISOString()
  };

  db.comments.push(comment);
  return serializeComment(comment);
}
