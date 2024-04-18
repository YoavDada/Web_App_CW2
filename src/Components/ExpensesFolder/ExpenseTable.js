import React from 'react';

const ExpenseTable = ({ expenses, handleEdit, handleDelete }) => {

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Amount</th>
          <th>Expense Date</th>
          <th>Project</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense) => (
          <tr key={expense.id}>
            <td>{expense.id}</td>
            <td>{expense.amount}</td>
            <td>{expense.expenseDate}</td>
            <td>{expense.projectName}</td>
            <td>
              <button onClick={() => {
                handleEdit(expense.id);
              }}>Edit</button>
              <button onClick={() => {
                handleDelete(expense.id);
              }}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ExpenseTable;