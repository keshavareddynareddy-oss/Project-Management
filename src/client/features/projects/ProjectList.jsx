import { formatDate } from "../../../shared/utils/formatDate";

export default function ProjectList({ projects, selectedProjectId, onSelect }) {
  return (
    <section className="panel">
      <div className="panel-header inline-header">
        <div>
          <p className="eyebrow">Portfolio</p>
          <h2>Projects in motion</h2>
        </div>
      </div>
      <div className="project-list">
        {projects.map((project) => (
          <button
            key={project.id}
            className={`project-item ${selectedProjectId === project.id ? "active" : ""}`}
            onClick={() => onSelect(project.id)}
            type="button"
          >
            <div>
              <strong>{project.name}</strong>
              <p>{project.description}</p>
            </div>
            <div className="project-meta">
              <span>{project.status}</span>
              <span>{project.taskCount} tasks</span>
              <span>{formatDate(project.dueDate)}</span>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}
