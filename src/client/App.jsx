import { useEffect, useMemo, useState } from "react";
import Login from "./features/auth/Login";
import Register from "./features/auth/Register";
import UserProfile from "./features/users/UserProfile";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import Tasks from "./pages/Tasks";
import { authService } from "./services/authService";
import { projectService } from "./services/projectService";
import { taskService } from "./services/taskService";
import { api } from "./services/api";
import { TASK_STATUS } from "../shared/constants/taskStatus";
import { summarizeProjectHealth } from "./features/projects/projectSlice";
import "./styles/app.css";

const statusFlow = [
  TASK_STATUS.TODO,
  TASK_STATUS.IN_PROGRESS,
  TASK_STATUS.REVIEW,
  TASK_STATUS.DONE
];

export default function App() {
  const [authState, setAuthState] = useState({
    loading: false,
    user: null,
    error: ""
  });
  const [dataState, setDataState] = useState({
    loading: true,
    error: "",
    users: [],
    projects: [],
    tasks: [],
    selectedProjectId: ""
  });

  async function loadWorkspace() {
    try {
      setDataState((current) => ({ ...current, loading: true, error: "" }));
      const [users, projects, tasks] = await Promise.all([
        api.get("/users"),
        projectService.getProjects(),
        taskService.getTasks()
      ]);

      setDataState((current) => ({
        ...current,
        loading: false,
        users,
        projects,
        tasks,
        selectedProjectId: current.selectedProjectId || projects[0]?.id || ""
      }));
    } catch (error) {
      setDataState((current) => ({
        ...current,
        loading: false,
        error: error.message
      }));
    }
  }

  useEffect(() => {
    loadWorkspace();
  }, []);

  async function handleLogin(credentials) {
    try {
      setAuthState((current) => ({ ...current, loading: true, error: "" }));
      const result = await authService.login(credentials);
      setAuthState({ loading: false, user: result.user, error: "" });
    } catch (error) {
      setAuthState({ loading: false, user: null, error: error.message });
    }
  }

  async function handleRegister(payload) {
    try {
      setAuthState((current) => ({ ...current, loading: true, error: "" }));
      const result = await authService.register(payload);
      setAuthState({ loading: false, user: result.user, error: "" });
      await loadWorkspace();
    } catch (error) {
      setAuthState((current) => ({
        ...current,
        loading: false,
        error: error.message
      }));
    }
  }

  async function advanceTask(task) {
    const currentIndex = statusFlow.indexOf(task.status);
    const nextStatus = statusFlow[Math.min(currentIndex + 1, statusFlow.length - 1)];
    await taskService.updateStatus(task.id, nextStatus);
    await loadWorkspace();
  }

  const projectHealth = useMemo(
    () => summarizeProjectHealth(dataState.projects),
    [dataState.projects]
  );

  const metrics = useMemo(() => {
    const completedTasks = dataState.tasks.filter(
      (task) => task.status === TASK_STATUS.DONE
    ).length;
    const completionRate = dataState.tasks.length
      ? Math.round((completedTasks / dataState.tasks.length) * 100)
      : 0;

    return {
      totalProjects: dataState.projects.length,
      totalTasks: dataState.tasks.length,
      totalUsers: dataState.users.length,
      completionRate
    };
  }, [dataState.projects.length, dataState.tasks, dataState.users.length]);

  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (!dataState.selectedProjectId) {
      setSelectedProject(null);
      return;
    }

    projectService
      .getProject(dataState.selectedProjectId)
      .then(setSelectedProject)
      .catch(() => setSelectedProject(null));
  }, [dataState.selectedProjectId, dataState.tasks]);

  return (
    <main className="app-shell">
      <section className="hero">
        <div>
          <p className="eyebrow">ProjectFlow workspace</p>
          <h1>Keep projects clear, teams aligned, and delivery visible.</h1>
          <p className="hero-copy">
            This starter app includes demo authentication, an in-memory API, project
            summaries, and a task board wired to the backend modules in your chosen
            folder structure.
          </p>
        </div>
        <div className="hero-badges">
          <span className="badge">Active: {projectHealth.active}</span>
          <span className="badge">Planning: {projectHealth.planning}</span>
          <span className="badge">Total: {projectHealth.total}</span>
        </div>
      </section>

      {authState.error ? <div className="alert">{authState.error}</div> : null}
      {dataState.error ? <div className="alert">{dataState.error}</div> : null}

      <section className="auth-grid">
        <Login onSubmit={handleLogin} loading={authState.loading} />
        <Register onSubmit={handleRegister} loading={authState.loading} />
      </section>

      <UserProfile user={authState.user || dataState.users[0]} />

      {dataState.loading ? (
        <section className="panel">
          <h2>Loading workspace...</h2>
        </section>
      ) : (
        <>
          <Dashboard metrics={metrics} />
          <Projects
            projects={dataState.projects}
            selectedProjectId={dataState.selectedProjectId}
            selectedProject={selectedProject}
            onSelect={(projectId) =>
              setDataState((current) => ({ ...current, selectedProjectId: projectId }))
            }
          />
          <Tasks tasks={dataState.tasks} users={dataState.users} onAdvance={advanceTask} />
        </>
      )}
    </main>
  );
}
