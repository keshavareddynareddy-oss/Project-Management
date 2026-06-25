export function summarizeProjectHealth(projects) {
  return {
    total: projects.length,
    active: projects.filter((project) => project.status === "active").length,
    planning: projects.filter((project) => project.status === "planning").length
  };
}
