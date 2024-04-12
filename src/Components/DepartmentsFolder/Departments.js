import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../../apiConfig';
import DepartmentList from './DepartmentList';
import DepartmentDetails from './DepartmentDetails';
import DepartmentForm from './DepartmentForm';

const Departments = () => {
  const [departments, setDepartments] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [editingDepartment, setEditingDepartment] = useState(null);

  useEffect(() => {
    // Fetch Department data when component mounts
    fetchDepartments();
  }, []);

  const fetchDepartments = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}Department`);
      setDepartments(response.data);
      setSelectedDepartment(null);
      setEditingDepartment(null);
    } catch (error) {
      console.error('Error fetching departments:', error);
    }
  };

const handleEdit = (id) => {
  console.log('Edit button clicked for id:', id);
  const selected = departments.find((department) => department.id === id);
  console.log('Selected department:', selected);
  setSelectedDepartment(null);

  setEditingDepartment({ id: selected.id, departmentName: selected.departmentName, location: selected.location});
};



  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_BASE_URL}Department/${id}`);
      fetchDepartments();
    } catch (error) {
      console.error('Error deleting department:', error);
    }
  };

  const handleViewDetails = (id) => {
    const selected = departments.find((department) => department.id === id);
    setSelectedDepartment(selected);
    setEditingDepartment(null);
  };

  const handleCreate = () => {
    setSelectedDepartment(null);
    setEditingDepartment({ departmentName: '', location: ''});
  };

  const handleCancelEdit = () => {
    setEditingDepartment(null);
  };

const handleFormSubmit = async (event) => {
  event.preventDefault();
  try {
    console.log('Editing Department:', editingDepartment);

    if (editingDepartment) {
      if (editingDepartment.id) {
        console.log('Updating existing department:', editingDepartment);
        await axios.put(`${API_BASE_URL}Department/${editingDepartment.id}`, editingDepartment);
		
      } else {
        const { id, ...newDepartment } = editingDepartment;
        console.log('Creating new department:', newDepartment);
        await axios.post(`${API_BASE_URL}Department`, newDepartment);
      }
      fetchDepartments();
    }
  } catch (error) {
    console.error('Error saving departments:', error);
    console.error('Response data:', error.response?.data);
  } finally {
    setEditingDepartment(null);
  }
};




  return (
    <div>
      <DepartmentList departments={departments} handleEdit={handleEdit} handleDelete={handleDelete} />
      {selectedDepartment && <DepartmentDetails department={selectedDepartment} />}
      {editingDepartment && (
        <DepartmentForm
          department={editingDepartment}
          handleInputChange={(e) => setEditingDepartment({ ...editingDepartment, [e.target.name]: e.target.value })}
          handleSubmit={handleFormSubmit}
          handleCancel={handleCancelEdit}
        />
      )}
      <button onClick={handleCreate}>Create New Department</button>
    </div>
  );
};

export default Departments;
