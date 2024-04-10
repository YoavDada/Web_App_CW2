import React from 'react';

const DepartmentForm = ({ department, handleInputChange, handleSubmit, handleCancel }) => {
  return (
    <div>
      <h2>Department Creation Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Department Name:
          <input type="text" name="departmentName" value={department.departmentName} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Location:
          <input type="text" name="location" value={department.location} onChange={handleInputChange} />
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

export default DepartmentForm;