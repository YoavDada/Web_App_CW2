import React from 'react';
import GenericTable from '../GenericTable';

const EmployeeTable = ({ employees, handleEdit, handleDelete }) => {
  const columns = [
    { field: 'id', headerName: 'ID' },
    { field: 'firstName', headerName: 'First Name' },
    { field: 'lastName', headerName: 'Last Name' },
    { field: 'departmentName', headerName: 'Department' }
  ];

  return <GenericTable columns={columns} data={employees} handleEdit={handleEdit} handleDelete={handleDelete} />;
};

export default EmployeeTable;
