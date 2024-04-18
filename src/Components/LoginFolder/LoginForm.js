import React from 'react';
import GenericForm from '../GenericForm';

const LoginForm = ({ formData, handleInputChange, handleSubmit, handleRegister }) => {
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
    <button onClick={handleRegister}>Want to create an account? Register</button>
    </div>
  );
};

export default LoginForm;
