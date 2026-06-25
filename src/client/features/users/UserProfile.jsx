export default function UserProfile({ user }) {
  if (!user) {
    return null;
  }

  return (
    <section className="panel profile-panel">
      <p className="eyebrow">Current user</p>
      <h2>{user.name}</h2>
      <p>{user.title}</p>
      <div className="pill-row">
        <span className="pill">{user.role}</span>
        <span className="pill">{user.email}</span>
      </div>
    </section>
  );
}
