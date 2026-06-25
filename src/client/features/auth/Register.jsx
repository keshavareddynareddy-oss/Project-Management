import { useState } from "react";

export default function Register({ onSubmit, loading }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    title: ""
  });

  function updateField(event) {
    setForm((current) => ({
      ...current,
      [event.target.name]: event.target.value
    }));
  }

  return (
    <section className="panel auth-panel secondary">
      <div className="panel-header">
        <p className="eyebrow">New teammate?</p>
        <h2>Create a demo account</h2>
      </div>
      <form
        className="stack"
        onSubmit={(event) => {
          event.preventDefault();
          onSubmit(form);
        }}
      >
        <label className="field">
          <span>Name</span>
          <input name="name" value={form.name} onChange={updateField} />
        </label>
        <label className="field">
          <span>Title</span>
          <input name="title" value={form.title} onChange={updateField} />
        </label>
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
        <button className="button ghost" disabled={loading} type="submit">
          {loading ? "Creating..." : "Create Account"}
        </button>
      </form>
    </section>
  );
}
