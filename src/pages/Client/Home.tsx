import React, { useState, useRef, useEffect } from 'react';
import './Home.css';
import { FaUser, FaMedium, FaHandshake, FaMercury, FaHome, FaBusAlt, FaCamera, FaCheckCircle, FaHammer, FaCar, FaShoppingBag, FaCut, FaUtensils, FaVideo, FaBus, FaCouch, FaMountain, FaWrench, FaSpa, FaBolt, FaLaptop, FaTshirt, FaCogs, FaBuilding, FaPaintBrush } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";



const Home: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    'https://img.freepik.com/photos-premium/attrayante-vendeuse-africaine-au-stand-fruits-bras-croises_536628-1325.jpg?semt=ais_hybrid&w=740',
    'https://media.istockphoto.com/id/484799032/fr/photo/hommes-au-travail-dans-le-domaine-de-la-menuiserie-atelier-afrique-du-sud.jpg?s=612x612&w=0&k=20&c=X5n0yQVvzlgJKtaCerfRX4tk00eaJIugVTPAVzX6VJ8=',
    'https://img.freepik.com/photos-premium/chef-cuisinier-tranche-du-filet-poulet-dans-cuisine-du-restaurant_1003394-1707.jpg?semt=ais_hybrid&w=740',
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Défilement automatique toutes les 5 secondes
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

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
        <button className="carousel-button next" onClick={nextSlide}>
          &#8250;
        </button>
        <button className="carousel-button prev" onClick={prevSlide}>
          &#8249;
        </button>
        <div
          className="carousel-images"
          style={{ backgroundImage: `url(${images[currentIndex]})` }}
        >

        </div>
        <div className="carousel-indicators">
          {images.map((_, index) => (
            <span
              key={index}
              className={`indicator ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            >

            </span>
          ))}
        </div>
        <div className="hero-banner" data-v-8d4d8d3a data-v-0b83107a>
          <div className="carousel-overlay">
            <div className="row justify-content-center" data-v-8d4d8d3a="">
              <div className="col-lg-12" data-v-8d4d8d3a="">
                <div className="banner-content" data-v-8d4d8d3a="">
                  <h2 className="title-big" data-v-8d4d8d3a="">
                    <div className="message_parent" data-v-8d4d8d3a="">
                      <span className="message" data-v-8d4d8d3a="">Optez pour le
                        meilleur pour vos besoins
                      </span>
                    </div>
                  </h2>
                  <p className="title-small" data-v-8d4d8d3a="">
                    Des artisans qualifiés pour vos

                    {/*& nbsp;*/}
                    <span className="rotating-words">
                      <span className="word"> travaux </span>
                      <span className="word">projets </span>
                      <span className="word">services </span>
                      <span className="word">besoins </span>
                    </span>
                  </p>
                  <div className="container top-230 display-desktop" data-v-8d4d8d3a="">
                    <form action="/app/recherche/recherche.php" className="m-btn m-btn-theme2" data-v-8d4d8d3a="" method="GET">
                      <input
                        type="text"
                        className="search-bar"
                        placeholder="Recherchez ici..."
                      />
                      <button className="icon" type="submit" data-v-8d4d8d3a="">
                        <i className="fa-solid fa-magnifying-glass" data-v-8d4d8d3a="">
                          <span className="material-symbols-outlined">
                            <FaSearch />
                          </span>
                        </i>
                      </button>
                    </form>
                  </div>
                  <div className="container top-230 display-mobile" data-v-8d4d8d3a="">
                    <button className="m-btn m-btn-theme2" data-v-8d4d8d3a="">
                      <div data-v-8d4d8d3a="">
                        <input
                          type="text"
                          className="search-bar"
                          placeholder="Recherchez ici..."
                        />
                      </div>
                      <span className="icon" data-v-8d4d8d3a="">
                        <i className="fa-solid fa-magnifying-glass" data-v-8d4d8d3a="">
                          <span className="material-symbols-outlined">
                            <FaSearch />
                          </span>
                        </i>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="instructions-bar">
        <h2>Comment ça marche ?</h2>
        <div className="instructions-container">
          <div className="instruction-step">
            <FaSearch className="instruction-icon" />
            <h3>Rechercher</h3>
            <p>Explorez les profils d'artisans qualifiés et trouvez celui qui correspond à vos besoins.</p>
          </div>
          <div className="instruction-step">
            <FaHandshake className="instruction-icon" />
            <h3>Engager</h3>
            <p>Contactez l'artisan choisi, discutez des détails et engagez-le pour votre projet.</p>
          </div>
          <div className="instruction-step">
            <FaCheckCircle className="instruction-icon" />
            <h3>Finaliser</h3>
            <p>Recevez un service de qualité, finalisez votre projet et partagez votre avis.</p>
          </div>
        </div>
      </div>

      {/*########################################### */}
      <div className="card">
        <div className="image-container">
          <img src="https://obat-directory-production.s3.amazonaws.com/obat-directory-production/yS9Iqmafprd7H9fhCF0rljBrRoT95jwPh94pgme2.jpg" alt="Pool and garden" />
          <div className="status">Disponible</div>
        </div>
        <div className="content">
          <h3>SARL SWEET GARDEN PAYSAGISTE</h3>
          <div className="rating">
            ⭐️ 4,8/5 (17 avis)
          </div>
          <div className="location">Pornic (44210)</div>
          <p>
            Sweet Garden à Pornic : l’expert en aménagement extérieur et...
          </p>
          <div className="icons">
            {/* Icons can be replaced with actual SVG or icon components */}
            <span>📄</span>
            <span>⭐</span>
            <span>📞</span>
          </div>
          <button className="button">Paysagiste</button>
        </div>
      </div>

      {/*########################################### */}

      < div className="popular-products-section fade-in" >
        <h2>Produits populaires</h2>
        <div className="products-container">
          <div className="product-card">
            <img src="data:image/png;base64,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" alt="Produit" />
            <h3>Produit 1</h3>
            <p>Prix : 20€</p>
          </div>
          <div className="product-card">
            <img src="data:image/png;base64,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" alt="Produit " />
            <h3>Produit 2</h3>
            <p>Prix : 35€</p>
          </div>
          <div className="product-card">
            <img src="data:image/png;base64,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" alt="Produit" />
            <h3>Produit 3</h3>
            <p>Prix : 50€</p>
          </div>
        </div>
      </div >
    </div >
  );
};

export default Home;