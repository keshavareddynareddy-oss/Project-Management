export function serializeProject(project, taskCount = 0) {
  return {
    ...project,
    taskCount
  };
}
