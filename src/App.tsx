import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import ClientRoutes from './routes/ClientRoutes';
import AdminRoutes from './routes/AdminRoutes';
import Navbar from './components/Shared/Navbar';
import Footer from './components/Shared/Footer';
import './main.css';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          {/* Routes pour les utilisateurs */}
          <Route path="/*" element={<ClientRoutes />} />

          {/* Routes pour les administrateurs */}
          <Route path="/admin/*" element={<AdminRoutes />} />
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
  );
};

export default App;