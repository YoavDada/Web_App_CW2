import React from 'react';
import ExpenseTable from './ExpenseTable';

const ExpenseList = ({ expenses, handleEdit, handleDelete }) => {
  return (
    <div>
      <h2>Expenses</h2>
      <ExpenseTable expenses={expenses} handleEdit={handleEdit} handleDelete={handleDelete} />
    </div>
  );
};

export default ExpenseList;