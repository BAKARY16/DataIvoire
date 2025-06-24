import React from 'react';
import { useNavigate } from 'react-router-dom';

const AdminDashboard: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isAdmin');
    navigate('/admin/login');
  };

  return (
    <div>
      <h1>Tableau de bord Administrateur</h1>
      <p>Bienvenue dans l'espace administrateur. Gérez vos utilisateurs et contenus ici.</p>
      <button onClick={handleLogout}>Se déconnecter</button>
    </div>
  );
};

export default AdminDashboard;