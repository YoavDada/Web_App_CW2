import React from 'react';

const DepartmentTable = ({ departments, handleEdit, handleDelete }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Department Name</th>
          <th>Location</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
  {departments.map((department) => (
    <tr key={department.id}>
      <td>{department.id}</td>
      <td>{department.departmentName}</td>
      <td>{department.location}</td>
      <td>
        <button onClick={() => handleEdit(department.id)}>Edit</button>
        <button onClick={() => handleDelete(department.id)}>Delete</button>
      </td>
    </tr>
  ))}
</tbody>

    </table>
  );
};

export default DepartmentTable;

