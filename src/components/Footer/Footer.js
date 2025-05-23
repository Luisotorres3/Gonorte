import React from "react";
import {
  faInstagram,
  faTiktok,
  faFacebookF,
  faWhatsapp,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content-wrapper">
        <div className="footer-grid">
          <div className="footer-block">
            <h2>Instagram</h2>
            <a
              href="https://www.instagram.com/gonorte.biomechanics"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>

          <div className="footer-block">
            <h2>Contacto</h2>
            <div className="contact-icons">
              <FontAwesomeIcon icon={faPhone} />
              <FontAwesomeIcon icon={faWhatsapp} />
            </div>
            <a href="tel:+34644001599">644 001 599</a>
            <p>Jaén</p>
          </div>

          <div className="footer-block">
            <h2>TikTok</h2>
            <a
              href="https://www.tiktok.com/@gonorte.biomechanics"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faTiktok} />
            </a>
          </div>

          <div className="footer-block">
            <h2>Facebook</h2>
            <a
              href="https://www.facebook.com/profile.php?id=61572526556682"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
          </div>

          <div className="footer-block">
            <h2>LinkedIn</h2>
            <a
              href="https://www.linkedin.com/in/carmen-mar%C3%ADa-gonz%C3%A1lez-ortega-3747b5258/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>

          <div className="footer-block">
            <h2>Email</h2>
            <FontAwesomeIcon icon={faEnvelope} />
            <p>
              <a href="mailto:gonorte.biomechanics@gmail.com">
                gonorte.biomechanics@gmail.com
              </a>
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 Gonorte. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
