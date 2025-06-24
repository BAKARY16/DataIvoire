import React, { createContext, useContext, useState } from 'react';

// Définition du type pour le contexte d'authentification
interface AuthContextType {
  isAuthenticated: boolean;
  login: (username: string, password: string) => Promise<void>; // Ajout d'une promesse pour gérer les appels asynchrones
  logout: () => void;
}

// Création du contexte
export const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Fournisseur du contexte d'authentification
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  // Fonction de connexion
  const login = async (username: string, password: string): Promise<void> => {
    try {
      // Exemple de logique d'authentification (remplacez par un appel API réel)
      if (username === 'admin' && password === 'password') {
        setIsAuthenticated(true);
      } else {
        throw new Error('Invalid credentials');
      }
    } catch (error) {
      console.error('Login failed:', error);
      throw error; // Propager l'erreur pour la gestion dans le composant appelant
    }
  };

  // Fonction de déconnexion
  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook personnalisé pour utiliser le contexte d'authentification
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};