// src/components/InventoryHome.jsx
import React from 'react';

function InventoryHome() {
  return (
    <div className="hero-container">
      <header className="site-header">
        <div className="logo">
          <div className="logo-icon" />
          <span className="logo-text">Inventory Management System</span>
        </div>
        <nav className="nav-links">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Features</a>
          <a href="#">Contact</a>
          <a href="#" className="login-btn">Login</a>
        </nav>
      </header>

      <section className="hero-content">
        <h1>Inventory Management System</h1>
        <p className="subtitle">
          Manage your inventory effortlessly and effectively
        </p>
        <button className="get-started-btn">Get Started</button>
      </section>
    </div>
  );
}

export default InventoryHome;
