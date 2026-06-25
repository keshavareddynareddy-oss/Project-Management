import { createProject, getProjectById, getProjects } from "./project.service.js";

export function listProjects(_req, res, next) {
  try {
    res.json(getProjects());
  } catch (error) {
    next(error);
  }
}

export function getProject(req, res, next) {
  try {
    res.json(getProjectById(req.params.id));
  } catch (error) {
    next(error);
  }
}

export function create(req, res, next) {
  try {
    res.status(201).json(createProject(req.body, req.user));
  } catch (error) {
    next(error);
  }
}
