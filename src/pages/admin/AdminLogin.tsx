import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLogin: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Mot de passe par défaut pour les administrateurs
  const DEFAULT_ADMIN_PASSWORD = 'admin123';

  const handleLogin = () => {
    // Vérification des identifiants
    if (username === 'admin' && password === DEFAULT_ADMIN_PASSWORD) {
      localStorage.setItem('isAdmin', 'true');
      navigate('/admin/dashboard');
    } else {
      alert('Identifiants incorrects');
    }
  };

  return (
    <div>
      <h1>Connexion Administrateur</h1>
      <input
        type="text"
        placeholder="Nom d'utilisateur"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Mot de passe"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Se connecter</button>
    </div>
  );
};

export default AdminLogin;