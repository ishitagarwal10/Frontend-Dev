import React from "react";

function StudentDetails({ student, onBack }) {
  return (
    <div>
      <h2>Student Details</h2>

      <p><strong>Name:</strong> {student.name}</p>
      <p><strong>Section:</strong> {student.section}</p>
      <p><strong>Marks:</strong> {student.marks}</p>
      <p><strong>Grade:</strong> {student.grade}</p>

      <button onClick={onBack}>Back</button>
    </div>
  );
}

export default StudentDetails;
