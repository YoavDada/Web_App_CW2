import React from 'react';
import EmployeeTable from './EmployeeTable';

const EmployeeList = ({ employees, handleEdit, handleDelete }) => {
  return (
    <div>
      <h2>Employees</h2>
      <EmployeeTable employees={employees} handleEdit={handleEdit} handleDelete={handleDelete} />
    </div>
  );
};

export default EmployeeList;