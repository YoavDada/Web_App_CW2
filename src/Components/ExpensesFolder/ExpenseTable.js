import React from 'react';
import GenericTable from '../GenericTable';

const ExpenseTable = ({ expenses, handleEdit, handleDelete }) => {
  const columns = [
    { field: 'id', headerName: 'ID' },
    { field: 'amount', headerName: 'Amount' },
    { field: 'expenseDate', headerName: 'Expense Date' },
    { field: 'projectName', headerName: 'Project' }
  ];

  return <GenericTable columns={columns} data={expenses} handleEdit={handleEdit} handleDelete={handleDelete} />;
};

export default ExpenseTable;
