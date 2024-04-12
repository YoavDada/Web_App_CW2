import React from 'react';

const GenericForm = ({ formData, fields, handleInputChange, handleSubmit, handleCancel }) => {
  return (
    <div>
      <h2>Form</h2>
      <form onSubmit={handleSubmit}>
        {fields.map((field) => (
          <div key={field.name}>
            <label>
              {field.label}:
              {field.type === 'select' ? (
                <select
                  name={field.name}
                  value={formData[field.name] || ''}
                  onChange={handleInputChange}
                >
                  {field.options.map((option) => (
                    <option key={option.value} value={option.value}>{option.text}</option>
                  ))}
                </select>
              ) : (
                <input
                  type={field.type}
                  name={field.name}
                  value={formData[field.name] || ''}
                  onChange={handleInputChange}
                />
              )}
            </label>
          </div>
        ))}
        <button type="submit">Save</button>
        <button type="button" onClick={handleCancel}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default GenericForm;
