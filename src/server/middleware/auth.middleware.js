import { db } from "../config/db.js";

export function protect(req, _res, next) {
  const token = req.headers.authorization?.replace("Bearer ", "");

  if (!token) {
    req.user = db.users[0];
    return next();
  }

  const userId = token.replace("demo-token-", "");
  req.user = db.users.find((user) => user.id === userId) || db.users[0];
  return next();
}
