// src/Services.js
import React from 'react';
import './Services.css';
import Service from './Service';

const Services = ({ services, setServices }) => {
  const handleUpdate = (service) => {
    const updatedName = prompt("Enter new name", service.name);
    const updatedDescription = prompt("Enter new description", service.description);
    const updatedPrice = prompt("Enter new price", service.price);

    if (updatedName && updatedDescription && updatedPrice) {
      setServices((prev) =>
        prev.map((item) =>
          item.id === service.id
            ? { ...item, name: updatedName, description: updatedDescription, price: updatedPrice }
            : item
        )
      );
    }
  };

  const handleDelete = (id) => {
    const updatedServices = services.filter(service => service.id !== id);
    setServices(updatedServices);
  };
 console.log(services)

  return (
    <div className="services-container">
       {services.length > 0 ? (
        services.map((service) => (
          <div key={service.id} >
            <Service
              service={service}
              onUpdate={handleUpdate}
              onDelete={handleDelete}
            />
          </div>
        ))
      ) : (
        <p>No services available. Please add some services.</p>
      )}
    </div>
  );
};

export default Services;
