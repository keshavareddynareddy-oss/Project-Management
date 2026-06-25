import { formatDate } from "../../../shared/utils/formatDate";

export default function ProjectDetails({ project }) {
  if (!project) {
    return (
      <section className="panel">
        <h2>Select a project</h2>
        <p>Choose a project from the list to inspect its tasks and comments.</p>
      </section>
    );
  }

  return (
    <section className="panel">
      <div className="panel-header">
        <p className="eyebrow">Project detail</p>
        <h2>{project.name}</h2>
      </div>
      <p>{project.description}</p>
      <div className="stat-grid compact">
        <article className="stat-card">
          <span>Status</span>
          <strong>{project.status}</strong>
        </article>
        <article className="stat-card">
          <span>Due</span>
          <strong>{formatDate(project.dueDate)}</strong>
        </article>
        <article className="stat-card">
          <span>Tasks</span>
          <strong>{project.tasks?.length || 0}</strong>
        </article>
      </div>
      <div className="split-list">
        <div>
          <h3>Tasks</h3>
          {(project.tasks || []).map((task) => (
            <div key={task.id} className="mini-card">
              <strong>{task.title}</strong>
              <span>{task.status}</span>
            </div>
          ))}
        </div>
        <div>
          <h3>Comments</h3>
          {(project.comments || []).map((comment) => (
            <div key={comment.id} className="mini-card">
              <strong>{formatDate(comment.createdAt)}</strong>
              <span>{comment.message}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
