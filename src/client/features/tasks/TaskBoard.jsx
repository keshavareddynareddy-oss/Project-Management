import { taskColumns } from "./taskSlice";
import TaskCard from "./TaskCard";

export default function TaskBoard({ tasks, users, onAdvance }) {
  return (
    <section className="panel">
      <div className="panel-header">
        <p className="eyebrow">Execution board</p>
        <h2>Tasks by status</h2>
      </div>
      <div className="board-grid">
        {taskColumns.map((column) => (
          <div key={column.id} className="board-column">
            <div className="board-column-header">
              <h3>{column.label}</h3>
              <span>{tasks.filter((task) => task.status === column.id).length}</span>
            </div>
            <div className="column-stack">
              {tasks
                .filter((task) => task.status === column.id)
                .map((task) => (
                  <TaskCard
                    key={task.id}
                    task={task}
                    assigneeName={
                      users.find((user) => user.id === task.assigneeId)?.name || "Unassigned"
                    }
                    onAdvance={onAdvance}
                  />
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
