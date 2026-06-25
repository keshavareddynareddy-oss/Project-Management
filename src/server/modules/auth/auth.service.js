import { db } from "../../config/db.js";
import { ROLES } from "../../../shared/constants/roles.js";
import { createId } from "../../../shared/utils/helpers.js";
import { generateToken } from "../../utils/generateToken.js";
import { requireFields } from "../../utils/validators.js";
import { sanitizeUser } from "./auth.model.js";

export function loginUser(payload) {
  requireFields(payload, ["email", "password"]);

  const user = db.users.find(
    (entry) => entry.email === payload.email && entry.password === payload.password
  );

  if (!user) {
    const error = new Error("Invalid email or password");
    error.statusCode = 401;
    throw error;
  }

  return {
    token: generateToken(user),
    user: sanitizeUser(user)
  };
}

export function registerUser(payload) {
  requireFields(payload, ["name", "email", "password"]);

  const existingUser = db.users.find((entry) => entry.email === payload.email);
  if (existingUser) {
    const error = new Error("A user with this email already exists");
    error.statusCode = 409;
    throw error;
  }

  const user = {
    id: createId("user"),
    name: payload.name,
    email: payload.email,
    password: payload.password,
    role: payload.role || ROLES.MEMBER,
    title: payload.title || "Team Member"
  };

  db.users.push(user);

  return {
    token: generateToken(user),
    user: sanitizeUser(user)
  };
}
