import React from "react";
import "./About.css";
import aboutImage from "../image/Inventory_graphic.jpg"; // Place your image here

const About = () => {
  return (
    <section className="about-wrapper">
      <div className="about-header">
        <h1>Welcome to Our Inventory Management System</h1>
        <p>
          Revolutionizing the way businesses handle their inventory with simplicity,
          speed, and smart insights.
        </p>
      </div>

      <div className="about-body">
        <div className="about-left">
          <img src={aboutImage} alt="Inventory Graphic" />
        </div>

        <div className="about-right">
          <h2>Why Choose Us?</h2>
          <div className="features-grid">
            <div className="feature-box">
              <i className="fas fa-tachometer-alt"></i>
              <h3>Real-Time Tracking</h3>
              <p>Monitor stock levels and movements as they happen with live updates.</p>
            </div>
            <div className="feature-box">
              <i className="fas fa-users"></i>
              <h3>User Management</h3>
              <p>Assign roles, track activity, and control permissions easily.</p>
            </div>
            <div className="feature-box">
              <i className="fas fa-chart-line"></i>
              <h3>Advanced Analytics</h3>
              <p>Access powerful visual reports and inventory forecasting tools.</p>
            </div>
            <div className="feature-box">
              <i className="fas fa-lock"></i>
              <h3>Secure & Scalable</h3>
              <p>Your data is protected, and our system grows with your business.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="about-cta">
        <h2>Our Mission</h2>
        <p>
          To empower businesses with a smart, intuitive, and effective inventory system
          that helps reduce waste, improve efficiency, and maximize profits.
        </p>
        <a href="/contact" className="cta-button">Get in Touch</a>
      </div>
    </section>
  );
};

export default About;
