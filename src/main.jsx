import React from 'react';
import ReactDOM from 'react-dom/client'; // Import 'react-dom/client' for createRoot
import './index.css';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import { ProductProvider } from './context';
import * as serviceWorker from './serviceWorker';
import { ThemeProvider } from './components/context/ThemeContexts';

// Create the root using createRoot
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the app using the new root API
root.render(
  <ProductProvider>
    <ThemeProvider>
      <Router>
        <App />
      </Router>
    </ThemeProvider>
  </ProductProvider>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
