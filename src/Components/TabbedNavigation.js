import React, { useState } from 'react';
import Employees from './EmployeesFolder/Employees';
import Clients from './ClientsFolder/Clients';
import Departments from './DepartmentsFolder/Departments';
import Projects from './ProjectsFolder/Projects';
import Expenses from './ExpensesFolder/Expenses';
import Register from './RegisterFolder/Register';
import Login from './LoginFolder/Login';

const TabbedNavigation = () => {
  const [selectedTab, setSelectedTab] = useState('Register'); // Set the default tab to 'Register'

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div>
      <div className="tabs">
        <button
          className={selectedTab === 'Register' ? 'active' : ''}
          onClick={() => handleTabClick('Register')}
        >
          Register
        </button>
        <button
          className={selectedTab === 'Login' ? 'active' : ''}
          onClick={() => handleTabClick('Login')}
        >
          Login
        </button>
        <button
          className={selectedTab === 'Employees' ? 'active' : ''}
          onClick={() => handleTabClick('Employees')}
        >
          Employees
        </button>
        <button
          className={selectedTab === 'Clients' ? 'active' : ''}
          onClick={() => handleTabClick('Clients')}
        >
          Clients
        </button>
        <button
          className={selectedTab === 'Departments' ? 'active' : ''}
          onClick={() => handleTabClick('Departments')}
        >
          Departments
        </button>
        <button
          className={selectedTab === 'Projects' ? 'active' : ''}
          onClick={() => handleTabClick('Projects')}
        >
          Projects
        </button>
        <button
          className={selectedTab === 'Expenses' ? 'active' : ''}
          onClick={() => handleTabClick('Expenses')}
        >
          Expenses
        </button>

      </div>
      <div className="tab-content"> {/* Render the components based on selected tab */}
        {selectedTab === 'Register' && <Register />}
        {selectedTab === 'Login' && <Login />}
        {selectedTab === 'Employees' && <Employees />}
        {selectedTab === 'Clients' && <Clients/>}
        {selectedTab === 'Departments' && <Departments/>}
        {selectedTab === 'Projects' && <Projects />}
        {selectedTab === 'Expenses' && <Expenses />}
      </div>
    </div>
  );
};

export default TabbedNavigation;
