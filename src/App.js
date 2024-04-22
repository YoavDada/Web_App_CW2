import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import TabbedNavigation from './Components/TabbedNavigation';
import 'leaflet/dist/leaflet.css';
import './css/bootstrap.min.css';

function App() {
  return (
    <Router> 
      <div className="App">
        <TabbedNavigation />
      </div>
    </Router>
  );
}

export default App;
