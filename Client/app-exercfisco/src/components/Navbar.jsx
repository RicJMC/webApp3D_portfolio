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

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <header>
      <nav className={`navbar ${isOpen ? "open" : ""}`}>
        <div className="navbar-container">
          <img src="../public/holiday-g9f5529b5d_640.PNG" height="40" alt="logo" className="logo"/>

          <div className="menu-icon" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          {isOpen && (
            <div className="dropdown-menu" ref={dropdownRef}>
              <ul>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/Projectos">Projectos</Link>
                </li>
                <li>
                  <Link to="/more-info">More Info</Link>
                </li>
                <li>
                  <Link to="/exercicio">Exercises</Link>
                </li>
                <li>
                  <Link to="/keepApp">Keep App</Link></li>
                <li><Link to="/other-applications">Other Applications</Link>
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className="navbar-options">
            <Link to="/about" className="navbar-option">About</Link>
            <Link to="/services" className="navbar-option">Services</Link>
            <Link to="/login" className="navbar-option">Login</Link>
          </div>
      </nav>
    </header>
  );
};
