import React from 'react';
import GenericForm from '../GenericForm'; // Importing the GenericForm component

const EmployeeForm = ({ departments, employee, handleInputChange, handleSubmit, handleCancel }) => {
  const fields = [
    { name: 'firstName', label: 'First Name', type: 'text' },
    { name: 'lastName', label: 'Last Name', type: 'text' },
    {
      name: 'departmentId',
      label: 'Select Department',
      type: 'select',
      options: [
        { value: '', text: 'Select a department...' },
        ...departments.map((department) => ({
          value: department.id,
          text: department.departmentName
        }))
      ]
    }
  ];

  // Creating formData object with both employee and department data
  const formData = {
    firstName: employee.firstName,
    lastName: employee.lastName,
    departmentId: employee.departmentId,
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

export default EmployeeForm;
