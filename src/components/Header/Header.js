import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollingActive, setScrollingActive] = useState(false);

  // Manejar evento de scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrollingActive(window.scrollY > 150);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={scrollingActive ? "scrolling-active" : ""}>
      <div className="container">
        <nav className={menuOpen ? "nav open" : "nav"}>
          <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            <i className={`fas ${menuOpen ? "fa-times" : "fa-bars"}`}></i>
          </div>
          <a href="/Gonorte" className="nav-brand">
            GONORTE
          </a>
          <ul className={`nav-list ${menuOpen ? "open" : ""}`}>
            <li
              className="nav-item"
              onClick={() => (menuOpen ? setMenuOpen(!menuOpen) : {})}
            >
              <a href="#hero" className="nav-link">
                Inicio
              </a>
            </li>
            <li
              className="nav-item"
              onClick={() => (menuOpen ? setMenuOpen(!menuOpen) : {})}
            >
              <a href="#about" className="nav-link">
                Sobre mí
              </a>
            </li>
            <li
              className="nav-item"
              onClick={() => (menuOpen ? setMenuOpen(!menuOpen) : {})}
            >
              <a href="#services" className="nav-link">
                Servicios
              </a>
            </li>
            <li
              className="nav-item"
              onClick={() => (menuOpen ? setMenuOpen(!menuOpen) : {})}
            >
              <a href="#objetivos" className="nav-link">
                Objetivos
              </a>
            </li>

            <li
              className="nav-item"
              onClick={() => (menuOpen ? setMenuOpen(!menuOpen) : {})}
            >
              <a
                href="https://www.instagram.com/gonorte.biomechanics"
                className="nav-link"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li
              className="nav-item"
              onClick={() => (menuOpen ? setMenuOpen(!menuOpen) : {})}
            >
              <a
                href="https://www.tiktok.com/@gonorte.biomechanics"
                className="nav-link"
              >
                <i className="fab fa-tiktok">
                  <FontAwesomeIcon icon={faTiktok} />
                </i>
              </a>
            </li>
            <li
              className="nav-item"
              onClick={() => (menuOpen ? setMenuOpen(!menuOpen) : {})}
            >
              <a
                href="https://www.facebook.com/profile.php?id=61572526556682"
                target="_blank"
                className="nav-link"
              >
                <i class="fab fa-facebook-f"></i>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
