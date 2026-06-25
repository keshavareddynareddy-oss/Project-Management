export function createUserRecord(user) {
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
    title: user.title
  };
}
