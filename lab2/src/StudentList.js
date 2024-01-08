import React from 'react';

const StudentList = ({ students }) => (
  <div>
    <h2>Student List</h2>
    <ul>
      {students.map((student, index) => (
        <li key={index}>
          {student.name} - Grade: {student.grade}
        </li>
      ))}
    </ul>
  </div>
);

export default StudentList;
