import React, { useState } from 'react';
import { DEFAULT_PASSWORDS } from '../../config';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Vérification des identifiants
    if (email === 'client@example.com' && password === DEFAULT_PASSWORDS.client) {
      alert('Connexion réussie en tant que client');
      // Redirigez vers la page client
    } else if (email === 'artisan@example.com' && password === DEFAULT_PASSWORDS.artisan) {
      alert('Connexion réussie en tant qu\'artisan');
      // Redirigez vers la page artisan
    } else {
      alert('Identifiants incorrects');
    }
  };

  return (
    <div className="login-container">
      <h2>Connexion</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Mot de passe:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
};

export default Login;