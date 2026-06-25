import { createTask, getTasks, updateTaskStatus } from "./task.service.js";

export function listTasks(_req, res, next) {
  try {
    res.json(getTasks());
  } catch (error) {
    next(error);
  }
}

export function create(req, res, next) {
  try {
    res.status(201).json(createTask(req.body));
  } catch (error) {
    next(error);
  }
}

export function updateStatus(req, res, next) {
  try {
    res.json(updateTaskStatus(req.params.id, req.body.status));
  } catch (error) {
    next(error);
  }
}
