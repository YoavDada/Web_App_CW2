import React from 'react';

const ProjectDetails = ({ project }) => {
  if (!project) {
    return <div>No project selected.</div>;
  }

  return (
    <div>
      <h2>Project Details</h2>
      <p>ID: {project.id}</p>
      <p>Project Name: {project.projectName}</p>
      <p>Start Date: {project.startDate}</p>
      <p>End Date: {project.endDate}</p>
      <p>Manager: {project.employee}</p>
      <p>Client: {project.client}</p>
    </div>
  );
};

export default ProjectDetails;