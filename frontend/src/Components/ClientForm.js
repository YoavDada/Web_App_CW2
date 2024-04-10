import React from 'react';

const ClientForm = ({ client, handleInputChange, handleSubmit, handleCancel }) => {
  return (
    <div>
      <h2>Client Creation Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Client Name:
          <input type="text" name="clientName" value={client.clientName} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Industry:
          <input type="text" name="industry" value={client.industry} onChange={handleInputChange} />
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

export default ClientForm;