import { createComment, getComments } from "./comment.service.js";

export function listComments(_req, res, next) {
  try {
    res.json(getComments());
  } catch (error) {
    next(error);
  }
}

export function create(req, res, next) {
  try {
    res.status(201).json(createComment(req.body, req.user));
  } catch (error) {
    next(error);
  }
}
