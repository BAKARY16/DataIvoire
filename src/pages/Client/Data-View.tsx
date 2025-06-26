// src/components/SearchSection.tsx
import React, { useState } from "react";
import { FaSearch, FaAngleDown, FaFilter, FaRegHeart, FaCloudDownloadAlt } from "react-icons/fa";
import "./Data-View.css"; // Assuming you have a CSS file for styles
import { AlignCenter, Section } from "lucide-react";

// Définition des catégories de données et leurs couleurs
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

export default function SearchSection() {
  const [active, setActive] = useState<string>("Tout");

  const handleClick = (label: string) => {
    setActive(label);
    // TODO: déclencher la recherche ou filtrage
  };

  return (
    <section className="">
      <div className="search-section">
        <div className="search-header">
          <h1 className="title-line1">Des données ouvertes pour</h1>
          <h1 className="title-line2">des décisions éclairées</h1>
          <p className="subtitle">
            Filtrez par thématique, téléchargez ce dont vous avez besoin, et créez de la valeur.
          </p>
        </div>

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

      <div className="filters-container">
        {/* Section Filtres */}
        <aside className="filter-sidebar">
          <div className="filter-title">
            <span className="AngleDown">
              <FaFilter />
            </span>
            Filtre</div>
          <div className="filter-group">
            <button className="filter-button">
              Toutes les organisations
              <span className="arrow">
                <span className="AngleDown">
                  <FaAngleDown />
                </span>
              </span>
            </button>
          </div>

          <div className="filter-group">
            <button className="filter-button">
              Tous les types
              <span className="arrow">
                <span className="AngleDown">
                  <FaAngleDown />
                </span>
              </span>
            </button>
          </div>

          <div className="filter-group">
            <button className="filter-button">
              Tous les mots-clés
              <span className="arrow">
                <span className="AngleDown">
                  <FaAngleDown />
                </span>
              </span>
            </button>
          </div>

          <div className="filter-group">
            <button className="filter-button">
              Tous les formats
              <span className="arrow">
                <span className="AngleDown">
                  <FaAngleDown />
                </span>
              </span>
            </button>
          </div>

          <div className="filter-group">
            <button className="filter-button">
              Tous les Licences
              <span className="arrow">
                <span className="AngleDown">
                  <FaAngleDown />
                </span>
              </span>
            </button>
          </div>

          <div className="filter-group">
            <button className="filter-button">
              Tous les schémas
              <span className="arrow">
                <span className="AngleDown">
                  <FaAngleDown />
                </span>
              </span>
            </button>
          </div>

          <div className="filter-group">
            <button className="filter-button">
              Tous les Couvertures
              <span className="arrow">
                <span className="AngleDown">
                  <FaAngleDown />
                </span>
              </span>
            </button>
          </div>

          <div className="filter-group">
            <button className="filter-button">
              Tous les Granularités
              <span className="arrow">
                <span className="AngleDown">
                  <FaAngleDown />
                </span>
              </span>
            </button>
          </div>
        </aside>

        {/* Cartes Population par région */}
        <div className="cards-container">
          {/* Première carte avec détails */}
          <div className="region-card">
            <div className="card-header">
              <h3>Population par région</h3>
              <div className="indicator">INDS</div>
            </div>
            <p className="card-description">
              Conformément au décret n° 2018-1350 du 28 décembre 2018 relatif à la publication 
              forme électronique des informations portant sur...
            </p>
            <div className="card-update">
              <span>Mise à jour : </span>
              <span className="date-data">12/04/2024</span>
              <div className="stats">
                <div className="stats-data"><FaCloudDownloadAlt />95</div>
                <div className="stats-data"><FaRegHeart />20</div>
                </div>
            </div>
            <button className="details-btn">Voir les détails</button>
          </div>

          {/* Deuxième carte */}
          <div className="region-card">
            <div className="card-header">
              <h3>Population par région</h3>
              <div className="indicator">INDS</div>
            </div>
            <p className="card-description">
              Conformément au décret n° 2018-1350 du 28 décembre 2018 relatif à la publication forme électronique des informations portant sur...
            </p>
            <div className="card-update">
              <span>Mise à jour : </span>
              <span className="date-data">12/04/2024</span>
              <div className="stats">
                <div className="stats-data"><FaCloudDownloadAlt />95</div>
                <div className="stats-data"><FaRegHeart />20</div>
                </div>
            </div>
            <button className="details-btn">Voir les détails</button>
          </div>

          {/* Troisième carte */}
          <div className="region-card">
            <div className="card-header">
              <h3>Population par région</h3>
              <div className="indicator">INDS</div>
            </div>
            <p className="card-description">
              Conformément au décret n° 2018-1350 du 28 décembre 2018 relatif à la publication forme électronique des informations portant sur...
            </p>
            <div className="card-update">
              <span>Mise à jour : </span>
              <span className="date-data">12/04/2024</span>
              <div className="stats">
                <div className="stats-data"><FaCloudDownloadAlt />95</div>
                <div className="stats-data"><FaRegHeart />20</div>
                </div>
            </div>
            <button className="details-btn">Voir les détails</button>
          </div>

          {/* Première carte avec détails */}
          <div className="region-card">
            <div className="card-header">
              <h3>Population par région</h3>
              <div className="indicator">INDS</div>
            </div>
            <p className="card-description">
              Conformément au décret n° 2018-1350 du 28 décembre 2018 relatif à la publication forme électronique des informations portant sur...
            </p>
            <div className="card-update">
              <span>Mise à jour : </span>
              <span className="date-data">12/04/2024</span>
              <div className="stats">
                <div className="stats-data"><FaCloudDownloadAlt />95</div>
                <div className="stats-data"><FaRegHeart />20</div>
                </div>
            </div>
            <button className="details-btn">Voir les détails</button>
          </div>

          {/* Deuxième carte */}
          <div className="region-card">
            <div className="card-header">
              <h3>Population par région</h3>
              <div className="indicator">INDS</div>
            </div>
            <p className="card-description">
              Conformément au décret n° 2018-1350 du 28 décembre 2018 relatif à la publication forme électronique des informations portant sur...
            </p>
            <div className="card-update">
              <span>Mise à jour : </span>
              <span className="date-data">12/04/2024</span>
              <div className="stats">
                <div className="stats-data"><FaCloudDownloadAlt />95</div>
                <div className="stats-data"><FaRegHeart />20</div>
                </div>
            </div>
            <button className="details-btn">Voir les détails</button>
          </div>

          {/* Troisième carte */}
          <div className="region-card">
            <div className="card-header">
              <h3>Population par région</h3>
              <div className="indicator">INDS</div>
            </div>
            <p className="card-description">
              Conformément au décret n° 2018-1350 du 28 décembre 2018 relatif à la publication forme électronique des informations portant sur...
            </p>
            <div className="card-update">
              <span>Mise à jour : </span>
              <span className="date-data">12/04/2024</span>
              <div className="stats">
                <div className="stats-data"><FaCloudDownloadAlt />95</div>
                <div className="stats-data"><FaRegHeart />20</div>
                </div>
            </div>
            <button className="details-btn">Voir les détails</button>
          </div>
        </div>
      </div>
    </section>
  );
}

