import React from "react";

function StudentList({ students, onLoad, onAdd, onEdit, onDelete, onView }) {
  return (
    <div>
      <h2>Student List</h2>

      <button onClick={onLoad}>Load Students</button>
      <button onClick={onAdd}>Add Student</button>

      <table border="1" cellPadding="8" style={{ marginTop: "15px" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Section</th>
            <th>Marks</th>
            <th>Grade</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {students.map((s) => (
            <tr key={s.id}>
              <td>{s.name}</td>
              <td>{s.section}</td>
              <td>{s.marks}</td>
              <td>{s.grade}</td>
              <td>
                <button onClick={() => onView(s.id)}>View</button>
                <button onClick={() => onEdit(s.id)}>Edit</button>
                <button onClick={() => onDelete(s.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentList;
