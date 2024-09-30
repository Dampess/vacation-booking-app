import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "./assets/stayEaseLogo.png"; // Importation du logo
import { FaBars } from "react-icons/fa"; // Importation de l'icône burger

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // État pour gérer l'ouverture du menu
  const menuRef = useRef(null); // Référence pour le menu

  const toggleMenu = () => {
    console.log("Menu toggled!"); // Vérifiez si le message s'affiche dans la console
    setIsMenuOpen(!isMenuOpen);
  };

  // Ferme le menu si l'utilisateur clique en dehors de celui-ci
  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    // Ajout d'un écouteur d'événement lors du montage
    document.addEventListener("mousedown", handleClickOutside);

    // Nettoyage de l'écouteur d'événement lors du démontage
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="main-header">
      <div className="logo-container">
        <img src={logo} alt="StayEase Logo" className="logo" />
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        <FaBars className={isMenuOpen ? "open" : ""} />{" "}
        {/* Ajout de la classe "open" */}
      </div>
      <nav className={`nav-links ${isMenuOpen ? "open" : ""}`} ref={menuRef}>
        {" "}
        {/* Ajout de la ref */}
        <Link to="/vacation-booking-app" className="nav-link">
          Accueil
        </Link>
        <Link to="/about" className="nav-link">
          À propos
        </Link>
        <Link to="/services" className="nav-link">
          Services
        </Link>
        <Link to="/contact" className="nav-link">
          Contact
        </Link>
        <div className="auth-buttons">
          <Link to="/login" className="nav-link">
            Connexion
          </Link>
          <Link to="/signup" className="nav-link">
            Inscription
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
