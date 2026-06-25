export function createProjectRecord(project) {
  return {
    id: project.id,
    name: project.name,
    description: project.description,
    ownerId: project.ownerId,
    status: project.status,
    dueDate: project.dueDate
  };
}
