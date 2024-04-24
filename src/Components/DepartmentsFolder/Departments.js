import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../../apiConfig';
import DepartmentList from './DepartmentList';
import DepartmentDetails from './DepartmentDetails';
import DepartmentForm from './DepartmentForm';
import DepartmentMap from './DepartmentMap';
import Footer from '../Footer';
import { Card, Row, Col } from 'react-bootstrap';

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

  /*
  const handleViewDetails = (id) => {
    const selected = departments.find((department) => department.id === id);
    setSelectedDepartment(selected);
    setEditingDepartment(null);
  };
  */

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
    <div className="d-flex flex-column min-vh-100">
      <div className="flex-grow-1">      
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
      {!editingDepartment && <button onClick={handleCreate} className="btn btn-success">Create New Department</button>}
      <Card>
        <div className='row'>
            <Col md={8}>
              <DepartmentMap />
            </Col>
            <Col md={4}>
              <Card.Body>
                <Card.Title>Our Headquarters:</Card.Title>
                <Card.Text>
                  Our headquarters are situated in the heart of London on Cavendish Street. We welcome employees from all around the world to come visit our headquarters.
                </Card.Text>
              </Card.Body>
            </Col>
          </div>
        </Card>
      </div>
      <Footer />
    </div>
  );
};

export default Departments;
