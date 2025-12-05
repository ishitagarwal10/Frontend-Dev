import React, { useState } from "react";

function StudentForm({ onSubmit, existing }) {
  const [student, setStudent] = useState(
    existing || { name: "", section: "", marks: "", grade: "" }
  );

  function handleChange(e) {
    setStudent({ ...student, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(student);
  }

  return (
    <div>
      <h2>{existing ? "Edit Student" : "Add Student"}</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={student.name}
          onChange={handleChange}
          required
        />
        <br />

        <input
          type="text"
          name="section"
          placeholder="Section"
          value={student.section}
          onChange={handleChange}
          required
        />
        <br />

        <input
          type="number"
          name="marks"
          placeholder="Marks"
          value={student.marks}
          onChange={handleChange}
          required
        />
        <br />

        <input
          type="text"
          name="grade"
          placeholder="Grade"
          value={student.grade}
          onChange={handleChange}
          required
        />
        <br />

        <button type="submit">{existing ? "Update" : "Add"}</button>
      </form>
    </div>
  );
}

export default StudentForm;
