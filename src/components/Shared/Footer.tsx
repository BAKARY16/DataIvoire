// src/components/FooterSection.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import "./Footer.css";
import "./Navbar.css";
import { FaFacebook, FaYoutube, FaInstagram, FaLinkedin, FaMapPin, FaPhoneAlt, FaMailBulk, FaShareSquare } from 'react-icons/fa';


export default function FooterSection() {
  return (
    <section className="footer-section">
      <div className="footer-menu">
        {/* Logo */}
        <div className="logo">
          <Link to="/" className="flex items-center gap-2">
            <img src="/logo.jpg" alt="O'Artisan" className="navbar-logo" />
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

      </div>
      <div className="footer-content">
        {/* Liens utiles */}
        <div className="footer-block">
          <h3>Liens utiles</h3>
          <ul>
            <li><a href="https://anstat.ci" target="_blank">anstat.ci</a> <FaShareSquare /></li>
            <li><a href="https://data.gouv.ci" target="_blank">data.gouv.ci</a> <FaShareSquare /></li>
            <li><a href="https://ins.ci" target="_blank">ins.ci</a> <FaShareSquare /></li>
            <li><a href="https://plan.gouv.ci" target="_blank">plan.gouv.ci</a> <FaShareSquare /></li>
            <li><a href="https://education.gouv.ci" target="_blank">education.gouv.ci</a> <FaShareSquare /></li>
            <li><a href="https://gouv.ci" target="_blank">gouv.ci</a> <FaShareSquare /></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-block">
          <h3>Contact</h3>
          <p className="text"><span className="emoji"><FaMapPin /></span> Côte d'ivoire, Abidjan</p>
          <p><span className="emoji"><FaPhoneAlt /></span> <a href="tel:+22566652910">+225 07 66 65 29 10</a></p>
          <p><span className="emoji"><FaMailBulk /></span> <a href="mailto:infos@dataivoire.ci">infos@dataivoire.ci</a></p>
        </div>

        {/* Call to action */}
        <div className="footer-block footer-cta">
          <h3>La plateforme<br />en un clin d’œil</h3>
          <a href="/explore" className="cta-button">Explorer les données</a>
        </div>
      </div>

      {/* Bas de page */}
      <div className="footer-bottom">
        <span>Datalvoire © 2025</span>
        <div className="social-icons">
          <a href="Facebook" aria-label="Facebook"><FaFacebook /></a>
          <a href="Youtube" aria-label="Youtube"><FaYoutube /></a>
          <a href="Instagram" aria-label="Instagram"><FaInstagram /></a>
          <a href="LinkedIn" aria-label="LinkedIn"><FaLinkedin /></a>
        </div>
      </div>
    </section>
  );
}
