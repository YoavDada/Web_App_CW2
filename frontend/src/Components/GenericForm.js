import React, { useState } from 'react';

const GenericForm = ({ fields, onSubmit }) => {
  const [formData, setFormData] = useState({});

  const handleInputChange = (e) => 
  {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => 
  {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      {fields.map((field) => (
        <div key={field.name}>
          <label>
            {field.label}:
            <input
              type={field.type}
              name={field.name}
              value={formData[field.name] || ''}
              onChange={handleInputChange}
            />
          </label>
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};

export default GenericForm;