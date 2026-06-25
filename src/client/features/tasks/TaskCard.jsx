import { formatDate } from "../../../shared/utils/formatDate";

export default function TaskCard({ task, assigneeName, onAdvance }) {
  return (
    <article className="task-card">
      <div className="task-card-header">
        <strong>{task.title}</strong>
        <span className={`priority ${task.priority}`}>{task.priority}</span>
      </div>
      <p>{task.description}</p>
      <div className="task-card-footer">
        <span>{assigneeName}</span>
        <span>{formatDate(task.dueDate)}</span>
      </div>
      <button className="button subtle" onClick={() => onAdvance(task)} type="button">
        Advance status
      </button>
    </article>
  );
}
