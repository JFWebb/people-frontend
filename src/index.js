import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.scss'
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import Router
import {BrowserRouter as Router} from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);


reportWebVitals();
