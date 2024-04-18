import React from 'react';

const ClientTable = ({ clients, handleEdit, handleDelete }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Client Name</th>
          <th>Industry</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
  {clients.map((client) => (
    <tr key={client.id}>
      <td>{client.id}</td>
      <td>{client.clientName}</td>
      <td>{client.industry}</td>
      <td>
        <button onClick={() => handleEdit(client.id)}>Edit</button>
        <button onClick={() => handleDelete(client.id)}>Delete</button>
      </td>
    </tr>
  ))}
</tbody>

    </table>
  );
};

export default ClientTable;