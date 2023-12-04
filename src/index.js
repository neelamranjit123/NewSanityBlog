import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Create a root element dynamically
const rootElement = document.createElement('div');
rootElement.id = 'root';

// Append the root element to the body
document.body.appendChild(rootElement);

// Render the React app into the root element
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);


/*const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);*/



