import React from 'react';
import GenericTable from '../GenericTable';

const ProjectTable = ({ projects, handleEdit, handleDelete }) => {
  const columns = [
    { field: 'id', headerName: 'ID' },
    { field: 'projectName', headerName: 'Project Name' },
    { field: 'startDate', headerName: 'Start Date' },
    { field: 'endDate', headerName: 'End Date' },
    { field: 'managerName', headerName: 'Manager' },
    { field: 'clientName', headerName: 'Client' }
  ];

  return <GenericTable columns={columns} data={projects} handleEdit={handleEdit} handleDelete={handleDelete} />;
};

export default ProjectTable;
