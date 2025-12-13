import React from 'react';
import { HelmetProvider } from "react-helmet-async";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
 <BrowserRouter>
 <HelmetProvider>
    <App />
    </HelmetProvider>
    </BrowserRouter>
);

