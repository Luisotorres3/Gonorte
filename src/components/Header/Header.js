import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
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
      }, 400);
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
      <div className="dropdown-wrapper">
        <div className="nav-link dropbtn">
          Mis Redes <i className="fa fa-caret-down"></i>
        </div>
        <div className={`dropdown-content ${showDropdown ? "visible" : ""}`}>
          <Links />
        </div>
      </div>
    </li>
  );
};

const navItems = [
  { label: "Inicio", type: "page", target: "Gonorte" },
  { label: "Planes", type: "page", target: "Gonorte/planes" },
  { label: "Colaboraciones", type: "page", target: "Gonorte/colaboraciones" },
  { label: "Testimonios", type: "page", target: "Gonorte/testimonios" },
  { label: "Contacto", type: "page", target: "Gonorte/contacto" },
];

const NavItem = ({
  label,
  type,
  target,
  isActive,
  handleNav,
  handleNavToPage,
}) => (
  <li
    className={`nav-item ${isActive ? "active-link" : ""}`}
    onClick={() =>
      type === "section" ? handleNav(target) : handleNavToPage(target)
    }
  >
    <span className="nav-link">{label}</span>
  </li>
);

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollingActive, setScrollingActive] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrollingActive(window.scrollY > 150);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (id) => {
    if (menuOpen) setMenuOpen(false);
    navigate("/Gonorte");
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
          <a href="/Gonorte" className="nav-brand">
            GONORTE
          </a>
          <ul className={`nav-list ${menuOpen ? "open" : ""}`}>
            {navItems.map((item, index) => (
              <NavItem
                key={index}
                {...item}
                isActive={location.pathname === `/${item.target}`}
                handleNav={handleNav}
                handleNavToPage={handleNavToPage}
              />
            ))}
            <DropdownItem />
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
