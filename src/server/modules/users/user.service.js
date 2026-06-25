import { db } from "../../config/db.js";
import { findById } from "../../utils/validators.js";
import { serializeUser } from "./user.model.js";

export function getUsers() {
  return db.users.map(serializeUser);
}

export function getUserProfile(userId) {
  return serializeUser(findById(db.users, userId, "User"));
}
