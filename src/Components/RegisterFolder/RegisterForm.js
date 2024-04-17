import React from 'react';
import GenericForm from '../GenericForm';

const RegisterForm = ({ formData, handleInputChange, handleSubmit, handleLogin }) => {
  const fields = [
    { name: 'email', label: 'Email', type: 'email' },
    { name: 'password', label: 'Password', type: 'password' },
  ];

  return (
    <div>
    <GenericForm
      formData={formData}
      fields={fields}
      handleInputChange={handleInputChange}
      handleSubmit={handleSubmit}
    />
    <button onClick={handleLogin}>Already have an account? Login</button>
    </div>
  );
};

export default RegisterForm;
