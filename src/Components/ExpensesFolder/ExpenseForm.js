import React from 'react';
import GenericForm from '../GenericForm';

const ExpenseForm = ({ projects, expense, handleInputChange, handleSubmit, handleCancel }) => {
  const fields = [
    { name: 'amount', label: 'Amount', type: 'text' },
    { name: 'date', label: 'Date', type: 'date' },
    {
      name: 'projectId',
      label: 'Select Project',
      type: 'select',
      options: [
        { value: '', text: 'Select a project...' },
        ...projects.map((project) => ({
          value: project.id,
          text: project.projectName
        }))
      ]
    }
  ];

  const formData = {
    amount: expense.amount,
    date: expense.date,
    projectId: expense.projectId,
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

export default ExpenseForm;
