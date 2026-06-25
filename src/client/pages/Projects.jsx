import ProjectDetails from "../features/projects/ProjectDetails";
import ProjectList from "../features/projects/ProjectList";

export default function Projects({ projects, selectedProjectId, selectedProject, onSelect }) {
  return (
    <section className="content-grid">
      <ProjectList
        projects={projects}
        selectedProjectId={selectedProjectId}
        onSelect={onSelect}
      />
      <ProjectDetails project={selectedProject} />
    </section>
  );
}
