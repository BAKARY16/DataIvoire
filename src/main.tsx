import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './main.css'; // Assurez-vous que le fichier global.css est bien dans le même dossier que index.tsx

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);