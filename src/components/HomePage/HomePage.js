// src/components/HomePage/HomePage.js
import React from 'react';
import './HomePage.css';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="homepage-container">
      <header className="hero-section">
        <h1>Welcome to Our Service Portal</h1>
        <p>
          Discover a variety of services to meet your needs. From professional
          consultations to creative projects, we offer a wide range of
          services tailored for you.
        </p>
        <button className="cta-button" onClick={() => navigate('/services')}>
          Explore Services
        </button>
      </header>

      <section className="about-section">
        <h2>About Us</h2>
        <p>
          We are dedicated to connecting you with top-notch services that
          enhance your lifestyle and business. Our platform offers a seamless
          experience to browse, book, and manage services all in one place.
        </p>
      </section>

      <section className="features-section">
        <h2>Why Choose Us?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Quality Services</h3>
            <p>
              We partner with highly qualified professionals to ensure you get
              the best service possible.
            </p>
          </div>
          <div className="feature-card">
            <h3>Easy Booking</h3>
            <p>
              Our platform allows you to easily book and manage your services
              with just a few clicks.
            </p>
          </div>
          <div className="feature-card">
            <h3>Customer Support</h3>
            <p>
              Our dedicated support team is available to help you with any
              questions or issues you may have.
            </p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>Ready to Get Started?</h2>
        <p>
          Browse our list of services and find the perfect match for your
          requirements.
        </p>
        <button className="cta-button" onClick={() => navigate('/add-service')}>
          Add Your Service
        </button>
      </section>
    </div>
  );
};

export default HomePage;
