const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

async function request(path, options = {}) {
  const response = await fetch(`${API_URL}${path}`, {
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {})
    },
    ...options
  });

  if (!response.ok) {
    const errorPayload = await response.json().catch(() => ({
      message: "Request failed"
    }));
    throw new Error(errorPayload.message);
  }

  return response.json();
}

export const api = {
  get: (path, options) => request(path, options),
  post: (path, body, options) =>
    request(path, {
      method: "POST",
      body: JSON.stringify(body),
      ...options
    }),
  patch: (path, body, options) =>
    request(path, {
      method: "PATCH",
      body: JSON.stringify(body),
      ...options
    })
};
