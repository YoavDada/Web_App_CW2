import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../../apiConfig';
import ProjectList from './ProjectList';
import ProjectDetails from './ProjectDetails';
import ProjectForm from './ProjectForm';
import Footer from '../Footer'; 

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [editingProject, setEditingProject] = useState(null);
  const [employees, setEmployees] = useState([]);
  const [clients, setClients] = useState([]);

  useEffect(() => {
    // Fetch data when component mounts
    fetchProjects();
    fetchEmployees();
    fetchClients();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}Project`);
      setProjects(response.data);
      setSelectedProject(null);
      setEditingProject(null);
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
  };

  const fetchEmployees = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}Employee`);
      setEmployees(response.data);
    } catch (error) {
      console.error('Error fetching employees:', error);
    }
  };

  const fetchClients = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}Clients`);
      setClients(response.data);
    } catch (error) {
      console.error('Error fetching clients:', error);
    }
  };

const handleEdit = (id) => {
  console.log('Edit button clicked for id:', id);
  const selected = projects.find((project) => project.id === id);
  console.log('Selected project:', selected);
  setSelectedProject(null);

  setEditingProject({ id: selected.id, projectName: selected.projectName, startDate: selected.startDate, endDate: selected.endDate, employee: selected.employee, client: selected.client });
};



  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_BASE_URL}Project/${id}`);
      fetchProjects();
    } catch (error) {
      console.error('Error deleting project:', error);
    }
  };

  /*
  const handleViewDetails = (id) => {
    const selected = projects.find((project) => project.id === id);
    setSelectedProject(selected);
    setEditingProject(null);
  };
  */

  const handleCreate = () => {
    setSelectedProject(null);
    setEditingProject({ projectName: '', startDate: '', endDate: '', employee: null, client:null });
  };

  const handleCancelEdit = () => {
    setEditingProject(null);
  };

const handleFormSubmit = async (event) => {
  event.preventDefault();
  try {
    console.log('Editing Project:', editingProject);

    if (editingProject) {
      if (editingProject.id) {
        console.log('Updating existing project:', editingProject);
        await axios.put(`${API_BASE_URL}Project/${editingProject.id}`, editingProject);
		
      } else {
        const { id, ...newProject } = editingProject;

        const selectedEmployee = employees.find((employee) => employee.lastName === newProject.lastName);
        const selectedClient = clients.find((client) => client.clientName === newProject.clientName);

        newProject.employee = selectedEmployee;
        newProject.client = selectedClient;
        console.log('Creating new project:', newProject);
        await axios.post(`${API_BASE_URL}Project`, newProject);
      }
      fetchProjects();
    }
  } catch (error) {
    console.error('Error saving projects:', error);
    console.error('Response data:', error.response?.data);
  } finally {
    setEditingProject(null);
  }
};




  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="flex-grow-1"> 
      <ProjectList projects={projects} handleEdit={handleEdit} handleDelete={handleDelete} />
      {selectedProject && <ProjectDetails project={selectedProject} />}
      {editingProject && (
        <ProjectForm
          employees={employees}
          clients={clients}
          project={editingProject}
          handleInputChange={(e) => setEditingProject({ ...editingProject, [e.target.name]: e.target.value })}
          handleSubmit={handleFormSubmit}
          handleCancel={handleCancelEdit}
        />
      )}
      {!editingProject && <button onClick={handleCreate} className="btn btn-success">Create New Project</button>}
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
