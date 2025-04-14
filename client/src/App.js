
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Submit from './pages/Submit';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/submit">Submit Feedback</Link>
        <Link to="/dashboard">Dashboard</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/submit" element={<Submit />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
    