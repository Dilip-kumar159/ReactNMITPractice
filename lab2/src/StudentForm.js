import React, { useState } from 'react';

const StudentForm = ({ addStudent }) => {
  const [name, setName] = useState('');
  const [grade, setGrade] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addStudent({ name, grade });
    setName('');
    setGrade('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Grade:
        <input type="text" value={grade} onChange={(e) => setGrade(e.target.value)} />
      </label>
      <button type="submit">Add Student</button>
    </form>
  );
};

export default StudentForm;
