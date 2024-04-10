import React from 'react';

const ExpenseDetails = ({ expense }) => {
  if (!expense) {
    return <div>No expense selected.</div>;
  }

  return (
    <div>
      <h2>Expense Details</h2>
      <p>ID: {expense.id}</p>
      <p>Amount: {expense.amount}</p>
      <p>Expense Date: {expense.expenseDate}</p>
      <p>Project: {expense.project}</p>
    </div>
  );
};

export default ExpenseDetails;