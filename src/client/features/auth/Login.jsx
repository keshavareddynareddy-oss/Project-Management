import { useState } from "react";
import { demoCredentials } from "./authSlice";

export default function Login({ onSubmit, loading }) {
  const [form, setForm] = useState({
    email: demoCredentials[0].email,
    password: demoCredentials[0].password
  });

  function updateField(event) {
    setForm((current) => ({
      ...current,
      [event.target.name]: event.target.value
    }));
  }

  return (
    <section className="panel auth-panel">
      <div className="panel-header">
        <p className="eyebrow">Welcome back</p>
        <h2>Sign in to your workspace</h2>
      </div>
      <form
        className="stack"
        onSubmit={(event) => {
          event.preventDefault();
          onSubmit(form);
        }}
      >
        <label className="field">
          <span>Email</span>
          <input name="email" type="email" value={form.email} onChange={updateField} />
        </label>
        <label className="field">
          <span>Password</span>
          <input
            name="password"
            type="password"
            value={form.password}
            onChange={updateField}
          />
        </label>
        <button className="button primary" disabled={loading} type="submit">
          {loading ? "Signing in..." : "Sign In"}
        </button>
      </form>
      <div className="demo-credentials">
        {demoCredentials.map((credential) => (
          <div key={credential.role} className="credential-card">
            <strong>{credential.role}</strong>
            <span>{credential.email}</span>
            <span>{credential.password}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
