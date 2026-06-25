import { getUserProfile, getUsers } from "./user.service.js";

export function listUsers(_req, res, next) {
  try {
    res.json(getUsers());
  } catch (error) {
    next(error);
  }
}

export function getMe(req, res, next) {
  try {
    res.json(getUserProfile(req.user.id));
  } catch (error) {
    next(error);
  }
}
