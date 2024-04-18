import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../../apiConfig';
import LoginForm from './LoginForm';
import Employees from '../EmployeesFolder/Employees';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if the user is already logged in when the component mounts
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

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
      
      // Store the JWT token in local storage
      localStorage.setItem('token', response.data.token);
  
      // Set the authorization header for all subsequent axios requests
      axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
  
      // Update the isLoggedIn state to true
      setIsLoggedIn(true);
  
    } catch (error) {
      console.error('Error logging in:', error);
      setError('Invalid email or password');
    }
  };  

  const handleLogout = () => {
    // Clear the JWT token from local storage
    localStorage.removeItem('token');
    
    // Update the isLoggedIn state to false
    setIsLoggedIn(false);
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h2>Welcome</h2>
          <button onClick={handleLogout}>Logout</button>
          <Employees />
        </div>
      ) : (
        <div>
          <h2>Login</h2>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <LoginForm
            formData={formData}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
          />
        </div>
      )}
    </div>
  );
};

export default Login;
