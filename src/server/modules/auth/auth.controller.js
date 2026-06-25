import { loginUser, registerUser } from "./auth.service.js";

export function login(req, res, next) {
  try {
    res.json(loginUser(req.body));
  } catch (error) {
    next(error);
  }
}

export function register(req, res, next) {
  try {
    res.status(201).json(registerUser(req.body));
  } catch (error) {
    next(error);
  }
}
