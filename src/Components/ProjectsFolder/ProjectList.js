import React from 'react';
import ProjectTable from './ProjectTable';

const ProjectList = ({ projects, handleEdit, handleDelete }) => {
  return (
    <div>
      <h2>Projects</h2>
      <ProjectTable projects={projects} handleEdit={handleEdit} handleDelete={handleDelete} />
    </div>
  );
};

export default ProjectList;