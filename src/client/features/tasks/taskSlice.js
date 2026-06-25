import { TASK_STATUS } from "../../../shared/constants/taskStatus";

export const taskColumns = [
  { id: TASK_STATUS.TODO, label: "To Do" },
  { id: TASK_STATUS.IN_PROGRESS, label: "In Progress" },
  { id: TASK_STATUS.REVIEW, label: "In Review" },
  { id: TASK_STATUS.DONE, label: "Done" }
];
