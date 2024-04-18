import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../../apiConfig';
import RegisterForm from './RegisterForm';
import Login from '../LoginFolder/Login';

const Register = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  useEffect(() => {
    if (isLoggingIn) {
      console.log('Redirecting to login page...');
    }
  }, [isLoggingIn]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const registrationResponse = await axios.post(`${API_BASE_URL}account/register`, formData);
      console.log(registrationResponse.data);
      // Reset form data after successful registration
      setFormData({ email: '', password: '' });
      setError('');
      setIsLoggingIn(true); // Redirect to login after registration
    } catch (error) {
      console.error('Error registering user:', error);
      setError('Error registering the user');
    }
  };

  const handleLogin = () => {
    setIsLoggingIn(true);
  };

  if (isLoggingIn) {
    return <Login />;
  }

  return (
    <div>
    <h2>Register</h2>
        <RegisterForm
          formData={formData}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
          handleLogin={handleLogin}
        />
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default Register;
