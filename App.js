import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import NowPlaying from './NowPlaying';
import Upcoming from './Upcoming';
import Login from './Login'; 
import Register from './Register'; 
import Success from './Success';
import MovieDetail from './MovieDetail';

import logo from './images/logoril.png';

function App() {
  return (
    <Router>
      <div className="app-container">
        <header className="header">
          <div className="logo-container">
            <Link to="/">
              <img src={logo} alt="BeeTix Logo" className="logo-image" />
            </Link>
          </div>
          <nav className="nav">
            <ul>
              <li>
                <Link to="/">Now Showing</Link>
              </li>
              <li>
                <Link to="/upcoming">Upcoming</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
            </ul>
          </nav>
        </header>

        <div className="main-content">
          <Routes>
            <Route path="/" element={<NowPlaying />} />
            <Route path="/upcoming" element={<Upcoming />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/success" element={<Success />} />
            <Route path="/movie/:movieId" element={<MovieDetail />} />
          </Routes>
        </div>

        <footer className="footer">
          <p>&copy; {new Date().getFullYear()} BeeTix. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
