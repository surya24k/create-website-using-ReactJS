import React from 'react';

const StudentTable = ({ students }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
          <th>Grade</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student) => (
          <tr key={student.id}>
            <td>{student.id}</td>
            <td>{student.name}</td>
            <td>{student.age}</td>
            <td>{student.grade}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const App = () => {
  const studentsData = [
    { id: 1, name: 'Alice', age: 20, grade: 'A' },
    { id: 2, name: 'Bob', age: 21, grade: 'B' },
    { id: 3, name: 'Charlie', age: 19, grade: 'A-' },
  ];

  return (
    <div>
      <h1>Student Table</h1>
      <StudentTable students={studentsData} />
    </div>
  );
};

export default App;