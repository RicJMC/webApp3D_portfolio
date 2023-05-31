import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleOutsideClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };
  const handleMenuItemClick = () => {
    setIsOpen(false); // Fecha o menu hamburguer
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <header>
      <nav className={`navbar ${isOpen ? "open" : ""}`}>
      <div className="menu-icon" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        <div className="navbar-container">
          <div className="logo">
            <Link to="/" className="logo"> <img src="../public/holiday-g9f5529b5d_640.PNG" height="40" alt="logo" className="logo" />
            </Link>
            
          </div>
          <div className="navbar-options">
            <Link to="/about2" className="navbar-option">About</Link>
            <Link to="/services" className="navbar-option">Services</Link>
            <Link to="/login" className="navbar-option">Login</Link>
          </div>

          {isOpen && (
            <div className="dropdown-menu" ref={dropdownRef}>
              <ul>
                <li>
                  <Link to="/about" onClick={handleMenuItemClick}>
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/Projectos" onClick={handleMenuItemClick}>
                    Projectos
                  </Link>
                </li>
                <li>
                  <Link to="/more-info" onClick={handleMenuItemClick}>
                    More Info
                  </Link>
                </li>
                <li>
                  <Link to="/exercicio" onClick={handleMenuItemClick}>
                    Exercises
                  </Link>
                </li>
                <li>
                  <Link to="/keepApp" onClick={handleMenuItemClick}>
                    Keep App
                  </Link>
                </li>
                <li>
                  <Link
                    to="/other-applications"
                    onClick={handleMenuItemClick}
                  >
                    Other Applications
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};