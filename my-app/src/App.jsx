import { useState } from "react";
import StudentList from "./components/StudentList";
import StudentForm from "./components/StudentForm";
import StudentDetails from "./components/StudentDetails";
import {
  getStudents,
  getStudent,
  addStudent,
  updateStudent,
  deleteStudent
} from "./services/studentService";

function App() {
  const [students, setStudents] = useState([]);
  const [mode, setMode] = useState("list");
  const [selectedId, setSelectedId] = useState(null);
  const [selectedStudent, setSelectedStudent] = useState(null);

  async function loadStudents() {
    const data = await getStudents();
    setStudents(data);
  }

  async function handleAdd() {
    setMode("add");
  }

  async function handleEdit(id) {
    const data = await getStudent(id);
    setSelectedStudent(data);
    setSelectedId(id);
    setMode("edit");
  }

  async function handleView(id) {
    const data = await getStudent(id);
    setSelectedStudent(data);
    setMode("view");
  }

  async function handleDelete(id) {
    await deleteStudent(id);
    alert("Student Deleted");
  }

  async function handleSubmit(student) {
    if (mode === "add") {
      await addStudent(student);
      alert("Student Added");
    } else {
      await updateStudent(selectedId, student);
      alert("Student Updated");
    }

    setMode("list");
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Student Result Management System</h1>

      {mode === "list" && (
        <StudentList
          students={students}
          onLoad={loadStudents}
          onAdd={handleAdd}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onView={handleView}
        />
      )}

      {mode === "add" && <StudentForm onSubmit={handleSubmit} />}
      {mode === "edit" && (
        <StudentForm onSubmit={handleSubmit} existing={selectedStudent} />
      )}
      {mode === "view" && (
        <StudentDetails student={selectedStudent} onBack={() => setMode("list")} />
      )}
    </div>
  );
}

export default App;
