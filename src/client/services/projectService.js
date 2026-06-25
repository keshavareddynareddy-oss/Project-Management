import { api } from "./api";

export const projectService = {
  getProjects() {
    return api.get("/projects");
  },
  getProject(id) {
    return api.get(`/projects/${id}`);
  },
  createProject(payload) {
    return api.post("/projects", payload);
  }
};
