import React from 'react';
import DepartmentTable from './DepartmentTable';

const DepartmentList = ({ departments, handleEdit, handleDelete }) => {
  return (
    <div>
      <h2>Departments</h2>
      <DepartmentTable departments={departments} handleEdit={handleEdit} handleDelete={handleDelete} />
    </div>
  );
};

export default DepartmentList;
