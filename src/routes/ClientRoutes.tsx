import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Client/Home';
import Login from '../pages/Client/Login';
import Register from '../pages/Client/Register';
import Visualisation from '../pages/Client/visualisation'
import DataView from '../pages/Client/Data-View'; // Import de la page DataView

const ClientRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/data-view" element={<DataView />} /> {/* Ajout de la route */}
      <Route path="/Visualisation" element={<Visualisation />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default ClientRoutes;