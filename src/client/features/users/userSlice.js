export function buildWorkload(users, tasks) {
  return users.map((user) => ({
    ...user,
    assignedTasks: tasks.filter((task) => task.assigneeId === user.id).length
  }));
}
