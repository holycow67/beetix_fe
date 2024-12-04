import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';
import { Link } from 'react-router-dom';
import registImage from './images/registimg.jpg';

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    age: '',
    phone: ''
  });

  const [errors, setErrors] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    const { email, password } = formData;
    let emailError = '';
    let passwordError = '';

    // Email Validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      emailError = 'Please enter a valid email.';
    }

    // Password Validation
    if (password.length < 8) {
      passwordError = 'Password must be at least 8 characters long.';
    }

    if (emailError || passwordError) {
      setErrors({ email: emailError, password: passwordError });
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      navigate('/success');
    }
  };

  return (
    <div className="register-container">
      <div className="register-card">
=        <div className="register-image">
          <img src={registImage} alt="Register" />
        </div>

        {/* Registration Form */}
        <div className="register-form-container">
          <form onSubmit={handleSubmit} className="register-form">
            <h2>Create an Account</h2>

            <div className="form-group">
              <label htmlFor="first-name">First Name</label>
              <input
                type="text"
                id="first-name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="last-name">Last Name</label>
              <input
                type="text"
                id="last-name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              {errors.email && <small className="error">{errors.email}</small>}
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              {errors.password && <small className="error">{errors.password}</small>}
            </div>

            <div className="form-group">
              <label htmlFor="age">Age</label>
              <input
                type="number"
                id="age"
                name="age"
                value={formData.age}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="register-btn">Register</button>
          </form>
          <div className="redirect-link">
            <p>
              Already have an account? Login {' '}
              <Link to="/login" className="link-style">
                here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
