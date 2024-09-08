// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Import global CSS styles
import App from './App'; // Main App component
import reportWebVitals from './reportWebVitals'; // For measuring performance
import { BrowserRouter as Router } from 'react-router-dom'; // For routing

const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the application wrapped in Router for routing support
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);


reportWebVitals();
