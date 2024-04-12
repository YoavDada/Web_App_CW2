import React from 'react';

const EmployeeDetails = ({ employee }) => {
  if (!employee) {
    return <div>No employee selected.</div>;
  }

  return (
    <div>
      <h2>Employee Details</h2>
      <p>ID: {employee.id}</p>
      <p>First Name: {employee.firstName}</p>
      <p>Last Name: {employee.lastName}</p>
      <p>Department: {employee.department}</p>
    </div>
  );
};

export default EmployeeDetails;