import TaskBoard from "../features/tasks/TaskBoard";

export default function Tasks({ tasks, users, onAdvance }) {
  return <TaskBoard tasks={tasks} users={users} onAdvance={onAdvance} />;
}
