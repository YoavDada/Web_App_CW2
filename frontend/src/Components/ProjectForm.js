import React from 'react';

const ProjectForm = ({ employees, clients, project, handleInputChange, handleSubmit, handleCancel }) => {
  return (
    <div>
      <h2>Project Creation Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Project Name:
          <input type="text" name="projectName" value={project.projectName} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Start Date:
          <input type="date" name="startDate" value={project.startDate} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          End Date:
          <input type="date" name="endDate" value={project.endDate} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Manager:
          <select name="employeeId" value={project.id} onChange={handleInputChange}>
            <option value="">Select a manager...</option>
            {employees.map((employee) => (
              <option key={employee.id} value={employee.id}>
                {employee.firstName} {employee.lastName}
              </option>
            ))}
          </select>
        </label>
        <br />
        <label>
          Client:
          <select name="clientId" value={project.id} onChange={handleInputChange}>
            <option value="">Select a client...</option>
            {clients.map((client) => (
              <option key={client.id} value={client.id}>
                {client.clientName}
              </option>
            ))}
          </select>
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

export default ProjectForm;
