import React, { useState } from 'react';
import './Register.css';
import axios from 'axios';


function Register() {
  const [form, setForm] = useState({
    username: '', email: '', password: '', contact: '', address: ''
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!form.username) errs.username = 'Username is required.';
    if (!form.email) errs.email = 'Valid email is required.';
    if (!form.password || form.password.length < 8) errs.password = 'Password must be 8+ chars.';
    if (!form.contact) errs.contact = 'Contact number is required.';
    if (!form.address) errs.address = 'Address is required.';
    return errs;
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: '' }));
  };

const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length === 0) {
      console.log("Submitted:", form);
      try {
        const res = await axios.post("http://localhost:3000/reg", form, {
          headers: { "Content-Type": "application/json" },
        });
        console.log("Registration successful:", res.data);
      } catch (err) {
        console.error("Registration failed:", err.response?.data || err.message);
      }
    } else {
      setErrors(errs);
    }
  };

  return (
    <div className="register-bg">
      <form className="register-card" onSubmit={handleSubmit}>
        <h2>Create Account</h2>

        <div className="input-group1">
          <label>Username</label>
          <input
            type="text"
            name="username"
            placeholder="Enter username"
            value={form.username}
            onChange={handleChange}
          />
          {errors.username && <div className="error">{errors.username}</div>}
        </div>

        <div className="input-group1">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={form.email}
            onChange={handleChange}
          />
          {errors.email && <div className="error">{errors.email}</div>}
        </div>

        <div className="input-group1">
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={form.password}
            onChange={handleChange}
          />
          {errors.password && <div className="error">{errors.password}</div>}
        </div>

        <div className="input-group1">
          <label>Contact Number</label>
          <input
            type="text"
            name="contact"
            placeholder="Enter Contact"
            value={form.contact}
            onChange={handleChange}
          />
          {errors.contact && <div className="error">{errors.contact}</div>}
        </div>

        <div className="input-group1">
          <label>Address</label>
          <textarea
            name="address"
            placeholder="Enter Address"
            value={form.address}
            onChange={handleChange}
          />
          {errors.address && <div className="error">{errors.address}</div>}
        </div>

        <button type="submit">Register</button>
        <p className="login-link">
          Already have an account? <a href="/login">Login</a>
        </p>
      </form>
    </div>
  );
}

export default Register;
