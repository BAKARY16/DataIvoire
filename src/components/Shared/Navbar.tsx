import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import LoginModal from './LoginModal';
import './Navbar.css';

const Navbar: React.FC = () => {
  const location = useLocation();
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const handleMenuToggle = () => {
    if (isMenuOpen) {
      setIsClosing(true); // Déclenche l'animation de disparition
      setTimeout(() => {
        setIsMenuOpen(false); // Ferme le menu après l'animation
        setIsClosing(false); // Réinitialise l'état
      }, 500); // Durée de l'animation (correspond à celle définie dans le CSS)
    } else {
      setIsMenuOpen(true); // Ouvre le menu
    }
  };

  // Détecter le défilement
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Masque la barre noire après 50px de défilement
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Barre noire d'assistance */}
      <div className={`top-bar ${isScrolled ? 'hidden' : ''} bg-black`}>
        <span>Besoin d’assistance ?</span>
        <a
          href="tel:+2250766652910"
          className="bg-green-500 hover:bg-green-600 px-2 py-1 rounded-md text-white text-sm font-medium transition"
        >
          cliquez ici
        </a>
        <span>
          ou appelez le{' '}
          <a
            href="tel:+2250766652910"
            className="text-orange-500 font-bold hover:underline transition"
          >
            +225 07 66 65 29 10
            </a>
        </span>
      </div>

      {/* Barre de navigation principale */}
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container grid grid-cols-3 items-center px-6">
          {/* Logo */}
          <div className="logo">
            <Link to="/" className="flex items-center gap-2">
              <img src="logo.jpg" alt="Data Ivoire" className="navbar-logo" />
            </Link>
          </div>

          {/* Menu principal */}
          <nav>
            <Link to="/" className={`menu-link ${location.pathname === '/' ? 'active' : ''}`}>
              Accueil
            </Link>
            <Link to="/data-view" className={`menu-link ${location.pathname === '/data-view' ? 'active' : ''}`}>
              Données
            </Link>
            <Link to="/Visualisation" className={`menu-link ${location.pathname === '/Visualisation' ? 'active' : ''}`}>
              Visualisation
            </Link>
            <Link to="/Reutilisation" className={`menu-link ${location.pathname === '/Reutilisation' ? 'active' : ''}`}>
              Réutilisation
            </Link>
            <Link to="/Cartographie" className={`menu-link ${location.pathname === '/Cartographie' ? 'active' : ''}`}>
              Cartographie
            </Link>
            <Link to="/Projets" className={`menu-link ${location.pathname === '/Projets' ? 'active' : ''}`}>
              Projets
            </Link>
            <Link to="/Articles" className={`menu-link ${location.pathname === '/Articles' ? 'active' : ''}`}>
              Articles
            </Link>
            <Link to="/About" className={`menu-link ${location.pathname === '/about' ? 'active' : ''}`}>
              Qui sommes-nous ?
            </Link>
          </nav>

          {/* Icônes utilisateur, notifications et panier */}
          <div className="icons flex items-center justify-end gap-8">
            {/* Connexion / Inscription */}
            <Link
              to="#"
              className="flex items-center gap-2 text-gray-800 hover:text-orange-500 transition hidden-on-mobile"
              onClick={() => setIsLoginModalOpen(true)}
            >
              <button className="hidden md:inline text-sm explore-n">Connexion</button>
            </Link>

            {/* Menu hamburger pour mobile */}
            <button
              className="menu-button md:hidden text-gray-800 hover:text-orange-500 transition"
              onClick={handleMenuToggle}
            >
              {isMenuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
            </button>
          </div>
        </div>

        {/* Menu latéral gauche */}
        {isMenuOpen || isClosing ? (
          <>
            {/* Ombre couvrant toute la page */}
            <div className="menu-overlay"></div>

            <div className={`side-menu ${isMenuOpen ? 'animate-slide-in' : 'animate-slide-out'}`}>
              <div className="side-menu-header">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2">
                  <img src="logo.jpg" alt="Data Ivoire" className="side-menu-logo" />
                </Link>
                {/* Bouton de fermeture */}
                <button className="close-button" onClick={handleMenuToggle}>
                  <FaTimes className="text-xl" />
                </button>
              </div>
              <div className="side-menu-body">
                <Link to="/" className="menu-link" onClick={handleMenuToggle}>
                  Accueil
                </Link>
                <Link to="/data-view" className="menu-link" onClick={handleMenuToggle}>
                  Données
                </Link>
                <Link to="/Visualisation" className="menu-link" onClick={handleMenuToggle}>
                  Visualisation
                </Link>
                <Link to="/Reutilisation" className="menu-link" onClick={handleMenuToggle}>
                  Réutilisation
                </Link>
                <Link to="/Cartographie" className="menu-link" onClick={handleMenuToggle}>
                  Cartographie-nous
                </Link>
                <Link to="/Projets" className="menu-link" onClick={handleMenuToggle}>
                  Projets
                </Link>
                <Link to="/Articles" className="menu-link" onClick={handleMenuToggle}>
                  Articles
                </Link>
                <Link to="/About" className="menu-link" onClick={handleMenuToggle}>
                  Qui sommes-nous ?
                </Link>

                <Link to="/login" className="menu-link"
                  onClick={() => setIsLoginModalOpen(true)}
                >
                  Connexion / Inscription
                </Link>

              </div>
              <div className="side-menu-footer">
                <p className="signature">© 2025 Data Ivoire. Tous droits réservés.</p>
              </div>
            </div>
          </>
        ) : null}
      </header>

      {/* Boîte de dialogue pour la connexion */}
      <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />
    </>
  );
};

export default Navbar;