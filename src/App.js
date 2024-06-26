// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import TestTokens from './components/TestTokens';
import Balance from './components/Balance';
import Market from './components/Market';
import Converter from './components/Converter';
import Onboarding from './components/Onboarding';
import './App.css';

const App = () => {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
};

const AppRoutes = () => {
  const navigate = useNavigate();

  const navigateToBalance = () => {
    navigate('/balance');
  };

  return (
    <div className="App">
      <div className="content">
        <Routes>
          <Route path="/onboarding" element={<Onboarding navigateToBalance={navigateToBalance} />} />
          <Route path="/dashboard" element={<><Header /><Dashboard /></>} />
          <Route path="/test-tokens" element={<><Header /><TestTokens /></>} />
          <Route path="/balance" element={<><Header /><Balance /></>} />
          <Route path="/market" element={<><Header /><Market /></>} />
          <Route path="/converter" element={<><Header /><Converter /></>} />
          <Route path="/" element={<Navigate to="/onboarding" />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
