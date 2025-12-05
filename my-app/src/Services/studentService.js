const API_URL = "http://localhost:3000/students";

// Get all students
export async function getStudents() {
  const res = await fetch(API_URL);
  return await res.json();
}

// Get single student
export async function getStudent(id) {
  const res = await fetch(`${API_URL}/${id}`);
  return await res.json();
}

// Add student
export async function addStudent(student) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(student)
  });
  return await res.json();
}

// Update student
export async function updateStudent(id, student) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(student)
  });
  return await res.json();
}

// Delete student
export async function deleteStudent(id) {
  await fetch(`${API_URL}/${id}`, { method: "DELETE" });
}
