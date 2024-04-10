import React, { useState } from 'react';
import Employees from './Employees';
import Clients from './Clients';
import Departments from './Departments';
import Projects from './Projects';
import Expenses from './Expenses';

const TabbedNavigation = () => {
  const [selectedTab, setSelectedTab] = useState('Employees');

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div>
      <div className="tabs">
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
      <div className="tab-content">
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
