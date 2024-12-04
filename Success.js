import React from 'react';
import { Link } from 'react-router-dom';
import './Success.css';

const Success = () => {
  return (
    <div className="success-container">
      <h2>Your registration is successful!</h2>
      <p>Begin your journey by <Link to="/login">logging in</Link>.</p>
    </div>
  );
};

export default Success;
