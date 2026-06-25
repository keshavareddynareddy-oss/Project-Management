import { api } from "./api";

export const taskService = {
  getTasks() {
    return api.get("/tasks");
  },
  createTask(payload) {
    return api.post("/tasks", payload);
  },
  updateStatus(id, status) {
    return api.patch(`/tasks/${id}/status`, { status });
  }
};
