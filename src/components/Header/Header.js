import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Links from "../Links/Links";
import "./Header.css";

const DropdownItem = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMouseEnter = () => {
    if (!isMobile) {
      clearTimeout(timeoutRef.current);
      setShowDropdown(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      timeoutRef.current = setTimeout(() => {
        setShowDropdown(false);
      }, 4000);
    }
  };

  if (isMobile) {
    return (
      <div className="linksNavOpen">
        <Links />
      </div>
    );
  }

  return (
    <li
      className="nav-item dropdown"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="nav-link dropbtn">
        Mis Redes <i className="fa fa-caret-down"></i>
      </div>
      {showDropdown && (
        <div className="dropdown-content">
          <Links />
        </div>
      )}
    </li>
  );
};

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollingActive, setScrollingActive] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrollingActive(window.scrollY > 150);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNav = (id) => {
    if (menuOpen) setMenuOpen(false);
    navigate("/");
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const handleNavToPage = (ref) => {
    if (menuOpen) setMenuOpen(false);
    navigate(`/${ref}`);
  };

  return (
    <header className={scrollingActive ? "scrolling-active" : ""}>
      <div className="container">
        <nav className={menuOpen ? "nav open" : "nav"}>
          <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            <i className={`fas ${menuOpen ? "fa-times" : "fa-bars"}`}></i>
          </div>
          <a href="/" className="nav-brand">
            GONORTE
          </a>
          <ul className={`nav-list ${menuOpen ? "open" : ""}`}>
            <li className="nav-item" onClick={() => handleNav("hero")}>
              <span className="nav-link">Inicio</span>
            </li>
            <li className="nav-item" onClick={() => handleNavToPage("planes")}>
              <span className="nav-link">Planes</span>
            </li>
            <li className="nav-item" onClick={() => handleNav("objetivos")}>
              <span className="nav-link">Objetivos</span>
            </li>
            <li className="nav-item" onClick={() => handleNav("services")}>
              <span className="nav-link">Servicios</span>
            </li>
            <li className="nav-item" onClick={() => handleNav("about")}>
              <span className="nav-link">Sobre mí</span>
            </li>
            <DropdownItem />
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
