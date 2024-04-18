import React from 'react';
import GenericForm from '../GenericForm'; // Importing the GenericForm component

const ProjectForm = ({ employees, clients, project, handleInputChange, handleSubmit, handleCancel }) => {
  const fields = [
    { name: 'projectName', label: 'Project Name', type: 'text' },
    { name: 'startDate', label: 'Start Date', type: 'date' },
    { name: 'endDate', label: 'End Date', type: 'date' },
    {
      name: 'managerName',
      label: 'Select Manager',
      type: 'select',
      options: [
        { value: '', text: 'Select an employee to manage the project...' },
        ...employees.map((employee) => ({
          value: employee.lastName,
          text: employee.lastName
        }))
      ]
    },
    {
      name: 'clientName',
      label: 'Select Client',
      type: 'select',
      options: [
        { value: '', text: 'Select a client...' },
        ...clients.map((client) => ({
          value: client.clientName,
          text: client.clientName
        }))
      ]
    }
  ];

  const formData = {
    projectName: project.projectName,
    startDate: project.startDate,
    endDate: project.endDate,
    managerName: project.managerName,
    clientName: project.clientName,
  };

  return (
    <GenericForm
      fields={fields}
      formData={formData}
      handleInputChange={handleInputChange}
      handleSubmit={handleSubmit}
      handleCancel={handleCancel}
    />
  );
};

export default ProjectForm;
