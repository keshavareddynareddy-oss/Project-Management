export function createTaskRecord(task) {
  return {
    id: task.id,
    title: task.title,
    description: task.description,
    projectId: task.projectId,
    assigneeId: task.assigneeId,
    status: task.status,
    priority: task.priority,
    dueDate: task.dueDate
  };
}
