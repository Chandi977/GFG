// apiModule.js
const BASE_URL = "https://jsonplaceholder.typicode.com";

export async function get(endpoint) {
  const res = await fetch(`${BASE_URL}${endpoint}`);
  return res.json();
}

export async function post(endpoint, data) {
  const res = await fetch(`${BASE_URL}${endpoint}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}
