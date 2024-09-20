import React, { useState } from 'react';
import './AddService.css';
import { useNavigate } from 'react-router-dom';

const AddService = ({ addService }) => {
  const [formData, setFormData] = useState({
    image: null,
    name: '',
    description: '',
    price: ''
  });

  const navigate = useNavigate();

  // Function to convert image to base64 string
  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  // Handle form input changes
  const handleChange = async (e) => {
    const { name, value, files } = e.target;

    // If an image file is selected, convert it to base64
    if (files) {
      const base64Image = await convertToBase64(files[0]);
      setFormData((prevFormData) => ({
        ...prevFormData,
        image: base64Image // Store base64 string instead of File object
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value
      }));
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const { image, name, description, price } = formData;
    if (image && name && description && price) {
      addService(formData); 
      setFormData({ image: null, name: '', description: '', price: '' });
      navigate('/services'); 
    } else {
      alert('Please fill out all fields.'); 
    }
  };

  return (
    <div className="add-service-container">
      <h2>Add Service</h2>
      <form onSubmit={handleSubmit} className="add-service-form">
        {/* Image Upload */}
        <div className="form-group">
          <label htmlFor="image">Service Image</label>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
            className="form-input"
            required
          />
          {formData.image && (
            <img src={formData.image} alt="Service Preview" className="preview-image" />
          )}
        </div>

        {/* Service Name */}
        <div className="form-group">
          <label htmlFor="name">Service Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter service name"
            className="form-input"
            required
          />
        </div>

        {/* Service Description */}
        <div className="form-group">
          <label htmlFor="description">Service Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter service description"
            className="form-input"
            rows="4"
            required
          />
        </div>

        {/* Service Price */}
        <div className="form-group">
          <label htmlFor="price">Service Price (₹)</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="Enter price"
            className="form-input"
            required
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="submit-button">
          Add Service
        </button>
      </form>
    </div>
  );
};

export default AddService;
