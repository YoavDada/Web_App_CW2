import React from 'react';

const ExpenseForm = ({ projects, expense, handleInputChange, handleSubmit, handleCancel }) => {
  return (
    <div>
      <h2>Expense Creation Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Amount:
          <input type="number" name="amount" value={expense.amount} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Expense Date:
          <input type="date" name="expenseDate" value={expense.expenseDate} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Project:
          <select name="Id" value={expense.id} onChange={handleInputChange}>
            <option value="">Select a project...</option>
            {projects.map((project) => (
              <option key={project.id} value={project.id}>
                {project.projectName}
              </option>
            ))}
          </select>
        </label>
        <br />
        <button type="submit">Save</button>
        <button type="button" onClick={handleCancel}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default ExpenseForm;
