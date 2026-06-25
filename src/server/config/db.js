import { ROLES } from "../../shared/constants/roles.js";
import { TASK_STATUS } from "../../shared/constants/taskStatus.js";
import { createId } from "../../shared/utils/helpers.js";

const users = [
  {
    id: "user-admin",
    name: "Aarav Mehta",
    email: "aarav@projectflow.dev",
    password: "admin123",
    role: ROLES.ADMIN,
    title: "Product Lead"
  },
  {
    id: "user-manager",
    name: "Diya Sharma",
    email: "diya@projectflow.dev",
    password: "manager123",
    role: ROLES.MANAGER,
    title: "Delivery Manager"
  },
  {
    id: "user-member",
    name: "Kabir Rao",
    email: "kabir@projectflow.dev",
    password: "member123",
    role: ROLES.MEMBER,
    title: "Frontend Engineer"
  }
];

const projects = [
  {
    id: "project-launchpad",
    name: "Launchpad Revamp",
    description: "Refresh the onboarding experience and planning dashboards.",
    ownerId: "user-manager",
    status: "active",
    dueDate: new Date(Date.now() + 1000 * 60 * 60 * 24 * 12).toISOString()
  },
  {
    id: "project-mobile",
    name: "Mobile Sync",
    description: "Bring tasks, comments, and notifications to the mobile app.",
    ownerId: "user-admin",
    status: "planning",
    dueDate: new Date(Date.now() + 1000 * 60 * 60 * 24 * 28).toISOString()
  }
];

const tasks = [
  {
    id: createId("task"),
    title: "Build dashboard wireframes",
    description: "Create the first high-fidelity dashboard concepts.",
    projectId: "project-launchpad",
    assigneeId: "user-member",
    status: TASK_STATUS.IN_PROGRESS,
    priority: "high",
    dueDate: new Date(Date.now() + 1000 * 60 * 60 * 24 * 3).toISOString()
  },
  {
    id: createId("task"),
    title: "Define push sync API",
    description: "Document the sync contract for mobile notifications.",
    projectId: "project-mobile",
    assigneeId: "user-manager",
    status: TASK_STATUS.REVIEW,
    priority: "medium",
    dueDate: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7).toISOString()
  },
  {
    id: createId("task"),
    title: "Set up analytics events",
    description: "Track project creation and task completion flows.",
    projectId: "project-launchpad",
    assigneeId: "user-admin",
    status: TASK_STATUS.TODO,
    priority: "medium",
    dueDate: new Date(Date.now() + 1000 * 60 * 60 * 24 * 10).toISOString()
  }
];

const comments = [
  {
    id: createId("comment"),
    taskId: tasks[0].id,
    authorId: "user-manager",
    message: "The dashboard should prioritize delivery confidence and overdue work.",
    createdAt: new Date().toISOString()
  }
];

export const db = {
  users,
  projects,
  tasks,
  comments
};
