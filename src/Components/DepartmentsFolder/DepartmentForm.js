import React from 'react';
import GenericForm from '../GenericForm';

const DepartmentForm = ({ department, handleInputChange, handleSubmit, handleCancel }) => {
  return (
    <GenericForm
      formData={department}
      fields={[
        { name: 'departmentName', label: 'Department Name', type: 'text' },
        { name: 'location', label: 'Location', type: 'text' },
      ]}
      handleInputChange={handleInputChange}
      handleSubmit={handleSubmit}
      handleCancel={handleCancel}
    />
  );
};

export default DepartmentForm;

