export default function Dashboard({ metrics }) {
  return (
    <section className="stat-grid">
      <article className="stat-card accent">
        <span>Total Projects</span>
        <strong>{metrics.totalProjects}</strong>
      </article>
      <article className="stat-card">
        <span>Open Tasks</span>
        <strong>{metrics.totalTasks}</strong>
      </article>
      <article className="stat-card">
        <span>Team Members</span>
        <strong>{metrics.totalUsers}</strong>
      </article>
      <article className="stat-card">
        <span>Completion Rate</span>
        <strong>{metrics.completionRate}%</strong>
      </article>
    </section>
  );
}
