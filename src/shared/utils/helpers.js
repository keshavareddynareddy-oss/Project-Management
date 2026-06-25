export function createId(prefix) {
  return `${prefix}-${Math.random().toString(36).slice(2, 10)}`;
}

export function slugify(value) {
  return value.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-");
}

export function groupBy(items, selector) {
  return items.reduce((accumulator, item) => {
    const key = selector(item);
    accumulator[key] = accumulator[key] || [];
    accumulator[key].push(item);
    return accumulator;
  }, {});
}
