import React from 'react';
import GenericForm from '../GenericForm';

const ExpenseForm = ({ projects, expense, handleInputChange, handleSubmit, handleCancel }) => {
  const fields = [
    { name: 'amount', label: 'Amount', type: 'text' },
    { name: 'expenseDate', label: 'Date', type: 'date' },
    {
      name: 'projectName',
      label: 'Select Project',
      type: 'select',
      options: [
        { value: '', text: 'Select a project...' },
        ...projects.map((project) => ({
          value: project.projectName,
          text: project.projectName
        }))
      ]
    }
  ];

  const formData = {
    amount: expense.amount,
    expenseDate: expense.expenseDate,
    projectName: expense.projectName,
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
