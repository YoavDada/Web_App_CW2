import React from 'react';
import GenericForm from '../GenericForm'; // Importing the GenericForm component

const EmployeeForm = ({ departments, employee, handleInputChange, handleSubmit, handleCancel }) => {
  const fields = [
    { name: 'firstName', label: 'First Name', type: 'text', placeholder: 'Enter alphabetic values only'},
    { name: 'lastName', label: 'Last Name', type: 'text', placeholder: 'Enter alphabetic values only' },
    {
      name: 'departmentName',
      label: 'Select Department',
      type: 'select',
      options: [
        { value: '', text: 'Select a department...' },
        ...departments.map((department) => ({
          value: department.departmentName,
          text: department.departmentName
        }))
      ]
    }
  ];

  // Creating formData object with both employee and department data
  const formData = {
    firstName: employee.firstName,
    lastName: employee.lastName,
    departmentName: employee.departmentName,
  };

  return (
    <GenericForm
      formData={formData}
      fields={fields}
      handleInputChange={handleInputChange}
      handleSubmit={handleSubmit}
      handleCancel={handleCancel}
    />
  );
};

export default EmployeeForm;
