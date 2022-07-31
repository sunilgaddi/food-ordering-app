import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import App from './App';
import Context from './components/context/Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Context>
      <App />
    </Context>
  </Router>
);

