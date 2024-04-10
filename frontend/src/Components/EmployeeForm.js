import React from 'react';

const EmployeeForm = ({ departments, employee, handleInputChange, handleSubmit, handleCancel }) => {
  return (
    <div>
      <h2>Employee Creation Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input type="text" name="firstName" value={employee.firstName} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Last Name:
          <input type="text" name="lastName" value={employee.lastName} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Select Department:
          <select name="id" value={employee.id} onChange={handleInputChange}>
            <option value="">Select a department...</option>
            {departments.map((department) => (
              <option key={department.id} value={department.id}>
                {department.departmentName}
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

export default EmployeeForm;