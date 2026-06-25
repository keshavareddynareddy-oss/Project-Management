export function requireFields(payload, fields) {
  const missing = fields.filter((field) => !payload[field]);

  if (missing.length > 0) {
    const error = new Error(`Missing required fields: ${missing.join(", ")}`);
    error.statusCode = 400;
    throw error;
  }
}

export function findById(collection, id, label = "Resource") {
  const item = collection.find((entry) => entry.id === id);

  if (!item) {
    const error = new Error(`${label} not found`);
    error.statusCode = 404;
    throw error;
  }

  return item;
}
