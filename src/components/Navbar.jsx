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
      <nav className="bg-white shadow-lg fixed w-full z-10 top-0 left-0">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex space-x-7">
              <div>
                <Link to="/" className="flex items-center py-4 px-2">
                  <img src="../public/holiday-g9f5529b5d_640.PNG" alt="logo" className="h-8 w-8 mr-2" />
                  <span className="font-semibold text-gray-500 text-lg">FitnessApp</span>
                </Link>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-1">
              <Link to="/about2" className="py-4 px-2 text-green-500 border-b-4 border-green-500 font-semibold">About</Link>
              <Link to="/projectos" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Projectos</Link>
              <Link to="/login" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Login</Link>
              <Link to="/keepapp" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Keep App</Link>
              <Link to="/exercicio" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Exercises</Link>
            </div>
            <div className="md:hidden flex items-center">
              <button className="outline-none mobile-menu-button" onClick={toggleMenu}>
                <svg className="w-6 h-6 text-gray-500 hover:text-green-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="mobile-menu md:hidden" ref={dropdownRef}>
            <ul>
              <li>
                <Link to="/about" className="block text-sm px-2 py-4 text-gray-500 hover:bg-gray-200 transition duration-300" onClick={handleMenuItemClick}>About</Link>
              </li>
              <li>
                <Link to="/projectos" className="block text-sm px-2 py-4 text-gray-500 hover:bg-gray-200 transition duration-300" onClick={handleMenuItemClick}>Projectos</Link>
              </li>
              <li>
                <Link to="/autentica" className="block text-sm px-2 py-4 text-gray-500 hover:bg-gray-200 transition duration-300" onClick={handleMenuItemClick}>Autentica</Link>
              </li>
              <li>
                <Link to="/exercicio" className="block text-sm px-2 py-4 text-gray-500 hover:bg-gray-200 transition duration-300" onClick={handleMenuItemClick}>Exercises</Link>
              </li>
              <li>
                <Link to="/keepapp" className="block text-sm px-2 py-4 text-gray-500 hover:bg-gray-200 transition duration-300" onClick={handleMenuItemClick}>Keep App</Link>
              </li>
              <li>
                <Link to="/login" className="block text-sm px-2 py-4 text-gray-500 hover:bg-gray-200 transition duration-300" onClick={handleMenuItemClick}>Login</Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};
