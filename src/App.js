// src/App.js
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import AddService from './components/AddService/AddService';
import Services from './components/Services/Services';
import Navbar from './components/Navbar/Navbar';
import HomePage from './components/HomePage/HomePage';

function App() {
  const initialServices = () => {
    const storedServices = localStorage.getItem('services');
    return  JSON.parse(storedServices);
  };

  // Initialize the services state
  const [services, setServices] = useState(initialServices);

  // Save services state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('services', JSON.stringify(services));
  }, [services]);

  // Function to add a new service
  const addService = (newService) => {
    setServices((prevServices) => [
      ...prevServices,
      { id: prevServices.length + 1, ...newService }
    ]);
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/add-service"
            element={<AddService addService={addService} />}
          />
          <Route
            path="/services"
            element={<Services services={services} setServices={setServices} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
