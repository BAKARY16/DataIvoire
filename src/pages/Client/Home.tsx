import React, { useState, useRef, useEffect } from 'react';
import './Home.css';
import { FaUser, FaMedium, FaHandshake, FaMercury, FaHome, FaBusAlt, FaCamera, FaCheckCircle, FaHammer, FaCar, FaShoppingBag, FaCut, FaUtensils, FaVideo, FaBus, FaCouch, FaMountain, FaWrench, FaSpa, FaBolt, FaLaptop, FaTshirt, FaCogs, FaBuilding, FaPaintBrush } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";


const categories = [
  { label: "Économie", color: "#FF6B6B" },
  { label: "Population", color: "#54A0FF" },
  { label: "Santé", color: "#1DD1A1" },
  { label: "Éducation", color: "#F368E0" },
  { label: "Agriculture", color: "#FF9F43" },
  { label: "Environnement", color: "#00d2d3" },
  { label: "Infrastructure", color: "#576574" },
  { label: "Technologie", color: "#8395a7" },
  { label: "Transport", color: "#ee5253" },
  { label: "Énergie", color: "#10ac84" }
];

const Home: React.FC = () => {

  const [active, setActive] = useState<string>("Tout");

  const handleClick = (label: string) => {
    setActive(label);
    // TODO: déclencher la recherche ou filtrage
  }
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.fade-in');
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          section.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } }
    ]
  };


  return (
    <div className="home-container">
      <div className="carousel">
        <div className="carousel-indicators">
        </div>
        <div className="hero-banner" data-v-8d4d8d3a data-v-0b83107a>
          <div className="carousel-overlay">
            <div className="row justify-content-center" data-v-8d4d8d3a="">
              <div className="col-lg-12" data-v-8d4d8d3a="">
                <div className="banner-content" data-v-8d4d8d3a="">
                  <h2 className="title-big" data-v-8d4d8d3a="">
                    <div className="message_parent" data-v-8d4d8d3a="">
                      <span className="message" data-v-8d4d8d3a="">
                        Explorer, analyser et décider grâce a la DATA
                      </span>
                    </div>
                  </h2>
                  <p className="title-small" data-v-8d4d8d3a="">
                    Accédez gratuitement aux données démographiques,
                    économiques, éducatives et bien plus encore pour comprendre et agir
                  </p>
                  <div className="button-container">
                    <button className="button">Explorer les données</button>
                    <button className="button">S'inscire a la communauté</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* */}
      <div className="search-sections">
        <div className="search-bar-wrapper">
          <form action="#" className="m-button m-button-theme2" data-v-8d4d8d3a="" method="GET">
            <input
              type="text"
              className="search-bars"
              placeholder="Recherchez ici..."
            />
            <button className="button-icons" type="submit" data-v-8d4d8d3a="">
              <i className="fa-solid fa-magnifying-glass" data-v-8d4d8d3a="">
                <span className="material-symbols-outlined">
                  <FaSearch />
                </span>
              </i>
            </button>
          </form>
        </div>

        <div className="tag-list">
          <button
            className={`tag-button ${active === "Tout" ? "active" : ""}`}
            style={active === "Tout" ? { backgroundColor: "#FFA200", color: "#fff" } : {}}
            onClick={() => handleClick("Tout")}
          >
            Tout
          </button>
          {categories.map(({ label, color }) => (
            <button
              key={label}
              className={`tag-button ${active === label ? "active" : ""}`}
              style={active === label ? { backgroundColor: color, color: "#fff", borderColor: color } : { borderColor: color, color }}
              onClick={() => handleClick(label)}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="container-id" role="region" aria-labelledby="initiative-title">
        <section className="header-id">
          <div className="image-container" aria-hidden="true">
            <svg
              width="200"
              height="200"
              viewBox="0 0 120 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              {/* Base monitor */}
              <rect x="15" y="20" width="72" height="50" fill="#2E7D32" rx="4" />
              <rect x="15" y="20" width="72" height="26" fill="#388E3C" rx="4" />
              <rect x="15" y="20" width="72" height="5" fill="#A5D6A7" rx="2" />
              {/* Code lines */}
              <rect x="25" y="28" width="60" height="8" fill="#A5D6A7" />
              <rect x="25" y="40" width="60" height="8" fill="#81C784" />
              <rect x="25" y="52" width="60" height="8" fill="#A5D6A7" />
              {/* Gear shape below */}
              <circle cx="55" cy="75" r="7" stroke="#A5D6A7" strokeWidth="2" />
              <path
                stroke="#A5D6A7"
                strokeWidth="2"
                d="M48 70 L42 65 M62 70 L68 65 M48 80 L42 85 M62 80 L68 85"
              />
              {/* Person */}
              <circle cx="100" cy="65" r="18" fill="#4CAF50" />
              <path
                d="M89.5 78.5q-3 7 6 7t6-7q-4-6-6-24-2 18-6 24z"
                fill="#2E7D32"
              />
              <rect x="88" y="48" width="24" height="6" fill="#81C784" rx="2" />
            </svg>
          </div>
          <div className="headers-text">
            <h2 id="initiative-title" className="title-id">
              Une initiative citoyenne et ouverte
            </h2>
            <p className="description-id">
              Ce site vise à centraliser, partager et valoriser les données publiques collectées
              auprès d’institutions fiables. Il est porté par une communauté engagée pour plus
              de transparence et d'inclusion numérique.
            </p>
          </div>
        </section>
        <section aria-label="Statistics" className="cards">
          <article className="card-data highlight-orange" aria-labelledby="data-accessible-label">
            <p id="data-accessible-label" className="number number-orange">+1200</p>
            <p className="texts text-orange">Jeux de données accessibles gratuitement</p>
          </article>
          <article className="card-data highlight-green" aria-labelledby="regions-covered-label">
            <p id="regions-covered-label" className="number number-black">32</p>
            <p className="texts">
              Régions couvertes par les données cartographiques
            </p>
          </article>
          <article className="card-data highlight-orange" aria-labelledby="downloads-label">
            <p id="downloads-label" className="number number-orange">8 500+</p>
            <p className="texts text-orange">
              Téléchargements de jeux de données depuis le lancement
            </p>
          </article>
          <article className="card-data highlight-yellow" aria-labelledby="official-data-label">
            <p id="official-data-label" className="number number-black">98 %</p>
            <p className="texts">
              Des sources de données issues d’institutions officielles
            </p>
          </article>
        </section>
      </div>

    </div >
  );
};

export default Home;