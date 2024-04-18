import React from 'react';

const ProjectTable = ({ projects, handleEdit, handleDelete }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Project Name</th>
          <th>Start Date</th>
          <th>End Date</th>
          <th>Manager</th>
          <th>Client</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
  {projects.map((project) => (
    <tr key={project.id}>
      <td>{project.id}</td>
      <td>{project.projectName}</td>
      <td>{project.startDate}</td>
      <td>{project.endDate}</td>
      <td>{project.managerName}</td>
      <td>{project.clientName}</td>
      <td>
        <button onClick={() => handleEdit(project.id)}>Edit</button>
        <button onClick={() => handleDelete(project.id)}>Delete</button>
      </td>
    </tr>
  ))}
</tbody>

    </table>
  );
};

export default ProjectTable;