import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../../apiConfig';
import EmployeeList from './EmployeeList';
import EmployeeDetails from './EmployeeDetails';
import EmployeeForm from './EmployeeForm';
import Footer from '../Footer'; 


const Employees = () => {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [editingEmployee, setEditingEmployee] = useState(null);
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    // Fetch Employee data when component mounts
    fetchEmployees();
    fetchDepartments();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}Employee`);
      setEmployees(response.data);
      setSelectedEmployee(null);
      setEditingEmployee(null);
    } catch (error) {
      console.error('Error fetching employees:', error);
    }
  };

  const fetchDepartments = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}Department`);
      setDepartments(response.data);
    } catch (error) {
      console.error('Error fetching departments:', error);
    }
  };

const handleEdit = (id) => {
  console.log('Edit button clicked for id:', id);
  const selected = employees.find((employee) => employee.id === id);
  console.log('Selected employee:', selected);
  setSelectedEmployee(null);

  setEditingEmployee({ id: selected.id, firstName: selected.firstName, lastName: selected.lastName, department: selected.department });
};



  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_BASE_URL}Employee/${id}`);
      fetchEmployees();
    } catch (error) {
      console.error('Error deleting employee:', error);
    }
  };

  /*
    const handleViewDetails = (id) => {
    const selected = employees.find((employee) => employee.id === id);
    setSelectedEmployee(selected);
    setEditingEmployee(null);
  };
  */

  const handleCreate = () => {
    setSelectedEmployee(null);
    setEditingEmployee({ firstName: '', lastName: '', department: null });
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
        await axios.put(`${API_BASE_URL}Employee/${editingEmployee.id}`, editingEmployee);
		
      } else {
        const { id, ...newEmployee } = editingEmployee;

        const selectedDepartment = departments.find((department) => department.departmentName === newEmployee.departmentName);
        
        newEmployee.department = selectedDepartment;
        console.log('Creating new employee:', newEmployee);
        await axios.post(`${API_BASE_URL}Employee`, newEmployee);
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

const handleInputChange = (event) => {
  const { name, value } = event.target;
  
  if (name === 'firstName' || name === 'lastName') {
    if (!/^[a-zA-Z]*$/.test(value)) {
      return; 
    }
  }

  setEditingEmployee(prev => ({
    ...prev,
    [name]: value
  }));
};


  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="flex-grow-1">
      <EmployeeList employees={employees} handleEdit={handleEdit} handleDelete={handleDelete} />
      {selectedEmployee && <EmployeeDetails employee={selectedEmployee} />}
      {editingEmployee && (
        <EmployeeForm
          departments={departments}
          employee={editingEmployee}
          handleInputChange={handleInputChange}
          handleSubmit={handleFormSubmit}
          handleCancel={handleCancelEdit}
        />
      )}
      {!editingEmployee && <button onClick={handleCreate} className="btn btn-success">Create New Employee</button>}
      </div>
      <Footer />
    </div>
  );
};

export default Employees;
