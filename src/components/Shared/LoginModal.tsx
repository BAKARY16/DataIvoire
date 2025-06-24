import React, { useState } from 'react';
import './LoginModal.css';
import { FaGoogle, FaFacebook, FaTwitter } from 'react-icons/fa';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true); // Déclenche l'animation de disparition
    setTimeout(() => {
      onClose(); // Retire la boîte de dialogue après l'animation
      setIsClosing(false); // Réinitialise l'état
    }, 500); // Durée de l'animation (correspond à celle définie dans le CSS)
  };

  if (!isOpen && !isClosing) return null;

  return (
    <div className={`modal-overlay ${isClosing ? 'fade-out' : ''}`}>
      <div className={`modal-container ${isClosing ? 'fade-out' : 'animate-modal'}`}>
        <button className="modal-close-button" onClick={handleClose}>
          &times;
        </button>
        <h2 className="modal-title">Connectez-vous!</h2>
        <h4 className="modal-subtitle">Saisissez votre adresse email pour continuer</h4>
        <form className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Entrez votre email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Mot de passe</label>
            <input type="password" id="password" name="password" placeholder="Entrez votre mot de passe" required />
          </div>
          <button type="submit" className="submit-button">Se connecter</button>
        </form>
        <div className="additional-options">
          <a href="#" className="forgot-password">Mot de passe oublié ?</a>
          <div className="social-login">
            <div className="line-container">
              <span className="line"></span>
              <div className="line-text">Ou</div>
              <span className="line"></span>
            </div>
            <p className="online">connectez-vous avec :</p>
            <div className="social-icons">
              <button className="social-button google"><FaGoogle /> Google</button>
              <button className="social-button facebook"><FaFacebook /> Facebook</button>
            </div>
          </div>
          <p className="signup-option">
            Pas encore inscrit ? <a href="#" className="signup-link">Créer un compte</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;