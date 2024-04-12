import React from 'react';

const DepartmentDetails = ({ department }) => {
  if (!department) {
    return <div>No department selected.</div>;
  }

  return (
    <div>
      <h2>Department Details</h2>
      <p>ID: {department.id}</p>
      <p>Department Name: {department.departmentName}</p>
      <p>Location: {department.location}</p>
    </div>
  );
};

export default DepartmentDetails;