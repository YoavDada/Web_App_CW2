import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../../apiConfig';
import ExpenseList from './ExpenseList';
import ExpenseDetails from './ExpenseDetails';
import ExpenseForm from './ExpenseForm';

const Expenses = () => {
  const [expenses, setExpenses] = useState([]);
  const [selectedExpense, setSelectedExpense] = useState(null);
  const [editingExpense, setEditingExpense] = useState(null);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetch Expense data when component mounts
    fetchExpenses();
    fetchProjects();
  }, []);

  const fetchExpenses = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}Expense`);
      setExpenses(response.data);
      setSelectedExpense(null);
      setEditingExpense(null);
    } catch (error) {
      console.error('Error fetching expenses:', error);
    }
  };

  const fetchProjects = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}Project`);
      setProjects(response.data);
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
  };

const handleEdit = (id) => {
  console.log('Edit button clicked for id:', id);
  const selected = expenses.find((expense) => expense.id === id);
  console.log('Selected expense:', selected);
  setSelectedExpense(null);

  setEditingExpense({ id: selected.id, amount: selected.amount, expenseDate: selected.expenseDate, project: selected.project });
};



  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_BASE_URL}Expense/${id}`);
      fetchExpenses();
    } catch (error) {
      console.error('Error deleting expense:', error);
    }
  };

  const handleViewDetails = (id) => {
    const selected = expenses.find((expense) => expense.id === id);
    setSelectedExpense(selected);
    setEditingExpense(null);
  };

  const handleCreate = () => {
    setSelectedExpense(null);
    setEditingExpense({ amount: '', expenseDate: '', project: '' });
  };

  const handleCancelEdit = () => {
    setEditingExpense(null);
  };

const handleFormSubmit = async (event) => {
  event.preventDefault();
  try {
    console.log('Editing Expense:', editingExpense);

    if (editingExpense) {
      if (editingExpense.id) {
        console.log('Updating existing expense:', editingExpense);
        await axios.put(`${API_BASE_URL}Expense/${editingExpense.id}`, editingExpense);
		
      } else {
        // Remove the existing id property for new expenses
        const { id, ...newExpense } = editingExpense;
        console.log('Creating new expense:', newExpense);
        await axios.post(`${API_BASE_URL}Expense`, newExpense);
      }
      fetchExpenses();
    }
  } catch (error) {
    console.error('Error saving expenses:', error);
    console.error('Response data:', error.response?.data);
  } finally {
    setEditingExpense(null);
  }
};




  return (
    <div>
      <ExpenseList expenses={expenses} handleEdit={handleEdit} handleDelete={handleDelete} />
      {selectedExpense && <ExpenseDetails expense={selectedExpense} />}
      {editingExpense && (
        <ExpenseForm
            projects={projects}
            expense={editingExpense}
            handleInputChange={(e) => setEditingExpense({ ...editingExpense, [e.target.name]: e.target.value })}
            handleSubmit={handleFormSubmit}
            handleCancel={handleCancelEdit}
        />
      )}
      <button onClick={handleCreate}>Create New Expense</button>
    </div>
  );
};

export default Expenses;
