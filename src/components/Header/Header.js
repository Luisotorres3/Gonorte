import React, { useState, useEffect } from "react";

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
          <a href="index.html" className="nav-brand">
            Gonorte.
          </a>
          <ul className={`nav-list ${menuOpen ? "open" : ""}`}>
            <li
              className="nav-item"
              onClick={() => (menuOpen ? setMenuOpen(!menuOpen) : {})}
            >
              <a href="index.html" className="nav-link">
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
              <a href="#contact" className="nav-link">
                Contacto
              </a>
            </li>
            <li
              className="nav-item"
              onClick={() => (menuOpen ? setMenuOpen(!menuOpen) : {})}
            >
              <a href="https://www.google.com/" className="nav-link">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
