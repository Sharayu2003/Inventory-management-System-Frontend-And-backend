// src/components/Home.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/login");
  };

  return (
    <div className="hero-container">
      {/* Navbar */}
      

      {/* Hero Section */}
      <section className="hero-content">
        <h1 className="home-title">Inventory Management <br></br>System</h1>
<p className="home-description">
  Simplify your stock management with real-time tracking, powerful analytics, and seamless control — all in one smart system.
</p>

<button onClick={handleGetStarted} className="get-started-btn">
      🚀 Get Started
    </button>
 
      </section>
    </div>
  );
}

export default Home;
