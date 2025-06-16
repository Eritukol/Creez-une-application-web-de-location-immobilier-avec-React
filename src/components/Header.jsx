// src/components/Header.jsx
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png"; // Assure-toi que le logo est bien ici
import "../styles/Header.scss";

export default function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Kasa logo" className="header__logo" />
      <nav className="header__nav">
        <NavLink to="/" className="header__link">Accueil</NavLink>
        <NavLink to="/a-propos" className="header__link">A Propos</NavLink>
      </nav>
    </header>
  );
}
