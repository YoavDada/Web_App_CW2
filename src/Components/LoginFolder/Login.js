import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../../apiConfig';
import LoginForm from './LoginForm';
import Employees from '../EmployeesFolder/Employees';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [currentPage, setCurrentPage] = useState('login');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (isLoggedIn) {
      console.log('Redirecting to Employees page...');
    }
  }, [isLoggedIn]);

  useEffect(() => {
    if (currentPage === 'register') {
      setCurrentPage('login'); 
      window.location.href = 'account/register'; 
    }
  }, [currentPage]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${API_BASE_URL}account/login`, formData);
      console.log('Login response:', response.data);
      setIsLoggedIn(true);

    } catch (error) {
      console.error('Error logging in:', error);
      setError('Invalid email or password');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const handleRegister = () => {
    setCurrentPage('register');
  };

  if (isLoggedIn) {
    return <Employees handleLogout={handleLogout} />;
  }

  return (
    <div>
      <h2>Login</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <LoginForm
        formData={formData}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        handleRegister={handleRegister}
      />
    </div>
  );
};

export default Login;
