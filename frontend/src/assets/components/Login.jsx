// src/components/Login.jsx

import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
// import { api } from "../services/api.js";

function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    if (error) setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formData;
    if (!email || !password) {
      setError('Please provide both email and password.');
      return;
    }
    // Example login logic (replace with real auth)
    console.log('Login attempt:', formData);

    if (email === "admin@gmail.com" && password === "admin@2003") {
      // Navigate to dashboard
      navigate("/dashboard");
    } else {
      setError("Invalid credentials!");
    }
  };

  return (
    <Container className="login-page my-5">
      <Row className="justify-content-center">
        <Col md={6} lg={4}>
          <div className="login-form-container p-4 shadow-sm bg-white rounded">
            <h2 className="text-center mb-4">Login</h2>
            {error && <Alert variant="danger">{error}</Alert>}

            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="loginEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-4" controlId="loginPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Enter Password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </Form.Group>

              <Button type="submit" variant="primary" className="w-100">
                Log In
              </Button>
            </Form>

            <div className="text-center mt-3">
              <span>Not registered yet? </span>
              <a href="/register">Register</a>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
