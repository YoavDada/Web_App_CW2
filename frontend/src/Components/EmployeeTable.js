import React from 'react';

const EmployeeTable = ({ employees, handleEdit, handleDelete }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Department</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
  {employees.map((employee) => (
    <tr key={employee.id}>
      <td>{employee.id}</td>
      <td>{employee.firstName}</td>
      <td>{employee.lastName}</td>
      <td>{employee.department}</td>
      <td>
        <button onClick={() => handleEdit(employee.id)}>Edit</button>
        <button onClick={() => handleDelete(employee.id)}>Delete</button>
      </td>
    </tr>
  ))}
</tbody>

    </table>
  );
};

export default EmployeeTable;