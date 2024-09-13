import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "./assets/stayEaseLogo.png"; // Importation du logo

const Header = () => {
  return (
    <header className="main-header">
      <div className="logo-container">
        <img src={logo} alt="StayEase Logo" className="logo" />{" "}
        {/* Affichage du logo */}
      </div>
      <div className="header-content">
        <h1>StayEase</h1>
      </div>
      <nav>
        <Link to="/">Accueil</Link>
      </nav>
    </header>
  );
};

export default Header;
