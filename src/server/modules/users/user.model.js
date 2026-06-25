export function serializeUser(user) {
  const { password, ...safeUser } = user;
  return safeUser;
}
