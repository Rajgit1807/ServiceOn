// src/Service.js
import React, { useEffect, useState } from 'react';
import './Service.css';

const Service = ({ service, onUpdate, onDelete }) => {
  const { image, name, description, price } = service;
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    let objectUrl;

    // Check if the image is a File object
    if (image instanceof File) {
      objectUrl = URL.createObjectURL(image);
      setImageUrl(objectUrl);
    } else if (typeof image === 'string') {
      // If the image is already a URL or a base64 string, use it directly
      setImageUrl(image);
    }

    // Cleanup: Revoke the object URL if it's a File
    return () => {
      if (objectUrl) {
        URL.revokeObjectURL(objectUrl);
      }
    };
  }, [image]);

  return (
    <div className="service-card">
      {imageUrl ? (
        <img src={imageUrl} alt={name} className="service-image" />
      ) : (
        <div className="placeholder">No Image Available</div>
      )}
      <div className="service-info">
        <h3>{name}</h3>
        <p>{description}</p>
        <p><strong>Price:</strong> ₹{price}</p>
        <div className="service-actions">
          <button className="update-btn" onClick={() => onUpdate(service)}>Update</button>
          <button className="delete-btn" onClick={() => onDelete(service.id)}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default Service;
