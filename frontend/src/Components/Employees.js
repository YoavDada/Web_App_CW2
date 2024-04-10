import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../apiConfig';
import EmployeeList from './EmployeeList';
import EmployeeDetails from './EmployeeDetails';
import EmployeeForm from './EmployeeForm';

const Employees = () => {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [editingEmployee, setEditingEmployee] = useState(null);

  useEffect(() => {
    // Fetch Employee data when component mounts
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}Employees`);
      setEmployees(response.data);
      setSelectedEmployee(null);
      setEditingEmployee(null);
    } catch (error) {
      console.error('Error fetching employees:', error);
    }
  };

const handleEdit = (id) => {
  console.log('Edit button clicked for id:', id);
  const selected = employees.find((employee) => employee.id === id);
  console.log('Selected employee:', selected);
  setSelectedEmployee(null);

  // Ensure that the property names match the expected format (id, firstName, lastName, enrollmentDate)
  setEditingEmployee({ id: selected.id, firstName: selected.firstName, lastName: selected.lastName, department: selected.department });
};



  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_BASE_URL}Employees/${id}`);
      fetchEmployees();
    } catch (error) {
      console.error('Error deleting employee:', error);
    }
  };

  const handleViewDetails = (id) => {
    const selected = employees.find((employee) => employee.id === id);
    setSelectedEmployee(selected);
    setEditingEmployee(null);
  };

  const handleCreate = () => {
    setSelectedEmployee(null);
    setEditingEmployee({ firstName: '', lastName: '', department: '' });
  };

  const handleCancelEdit = () => {
    setEditingEmployee(null);
  };

const handleFormSubmit = async (event) => {
  event.preventDefault();
  try {
    console.log('Editing Employee:', editingEmployee);

    if (editingEmployee) {
      if (editingEmployee.id) {
        console.log('Updating existing employee:', editingEmployee);
        await axios.put(`${API_BASE_URL}Employees/${editingEmployee.id}`, editingEmployee);
		
      } else {
        // Remove the existing id property for new employees
        const { id, ...newEmployee } = editingEmployee;
        console.log('Creating new employee:', newEmployee);
        await axios.post(`${API_BASE_URL}Employees`, newEmployee);
      }
      fetchEmployees();
    }
  } catch (error) {
    console.error('Error saving employees:', error);
    console.error('Response data:', error.response?.data);
  } finally {
    setEditingEmployee(null);
  }
};




  return (
    <div>
      <EmployeeList employees={employees} handleEdit={handleEdit} handleDelete={handleDelete} />
      {selectedEmployee && <EmployeeDetails employee={selectedEmployee} />}
      {editingEmployee && (
        <EmployeeForm
          employee={editingEmployee}
          handleInputChange={(e) => setEditingEmployee({ ...editingEmployee, [e.target.name]: e.target.value })}
          handleSubmit={handleFormSubmit}
          handleCancel={handleCancelEdit}
        />
      )}
      <button onClick={handleCreate}>Create New Employee</button>
    </div>
  );
};

export default Employees;
