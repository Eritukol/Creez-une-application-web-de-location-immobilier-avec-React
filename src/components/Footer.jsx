// src/components/Footer.jsx
import logoWhite from "../assets/logo.png"; // Utilise un logo blanc si nécessaire
import "../styles/Footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <img src={logoWhite} alt="Kasa logo blanc" className="footer__logo" />
      <p className="footer__text">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}
