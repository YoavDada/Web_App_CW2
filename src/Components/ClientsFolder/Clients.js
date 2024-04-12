import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../../apiConfig';
import ClientList from './ClientList';
import ClientDetails from './ClientDetails';
import ClientForm from './ClientForm';

const Clients = () => {
  const [clients, setClients] = useState([]);
  const [selectedClient, setSelectedClient] = useState(null);
  const [editingClient, setEditingClient] = useState(null);

  useEffect(() => {
    // Fetch Client data when component mounts
    fetchClients();
  }, []);

  const fetchClients = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}Clients`);
      setClients(response.data);
      setSelectedClient(null);
      setEditingClient(null);
    } catch (error) {
      console.error('Error fetching clients:', error);
    }
  };

const handleEdit = (id) => {
  console.log('Edit button clicked for id:', id);
  const selected = clients.find((client) => client.id === id);
  console.log('Selected client:', selected);
  setSelectedClient(null);

  // Ensure that the property names match the expected format (id, firstName, lastName, enrollmentDate)
  setEditingClient({ id: selected.id, clientName: selected.clientName, industry: selected.industry});
};



  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_BASE_URL}Clients/${id}`);
      fetchClients();
    } catch (error) {
      console.error('Error deleting client:', error);
    }
  };

  const handleViewDetails = (id) => {
    const selected = clients.find((client) => client.id === id);
    setSelectedClient(selected);
    setEditingClient(null);
  };

  const handleCreate = () => {
    setSelectedClient(null);
    setEditingClient({ clientName: '', industry: ''});
  };

  const handleCancelEdit = () => {
    setEditingClient(null);
  };

const handleFormSubmit = async (event) => {
  event.preventDefault();
  try {
    console.log('Editing Client:', editingClient);

    if (editingClient) {
      if (editingClient.cleintId) {
        console.log('Updating existing client:', editingClient);
        await axios.put(`${API_BASE_URL}Clients/${editingClient.id}`, editingClient);
		
      } else {
        // Remove the existing id property for new clients
        const { id, ...newClient } = editingClient;
        console.log('Creating new client:', newClient);
        await axios.post(`${API_BASE_URL}Clients`, newClient);
      }
      fetchClients();
    }
  } catch (error) {
    console.error('Error saving clients:', error);
    console.error('Response data:', error.response?.data);
  } finally {
    setEditingClient(null);
  }
};




  return (
    <div>
      <ClientList clients={clients} handleEdit={handleEdit} handleDelete={handleDelete} />
      {selectedClient && <ClientDetails client={selectedClient} />}
      {editingClient && (
        <ClientForm
          client={editingClient}
          handleInputChange={(e) => setEditingClient({ ...editingClient, [e.target.name]: e.target.value })}
          handleSubmit={handleFormSubmit}
          handleCancel={handleCancelEdit}
        />
      )}
      <button onClick={handleCreate}>Create New Client</button>
    </div>
  );
};

export default Clients;
