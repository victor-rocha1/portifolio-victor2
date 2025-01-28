import React, { useState, useEffect } from 'react';
import logo from '../../../../public/images/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css';
import DarkMode from '../../components/DarkMode/DarkMode';

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false); // Estado centralizado

  // Atualiza a classe 'dark' no body
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header>
      <nav className="navbar">
        <a href="#">
          <img src={logo} alt="logo" />
        </a>

        <div className="nav-links">
          <a href="#about">Sobre Mim</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projetos</a>
          <a href="#experiences">Experiências</a>
        </div>

        <div className="theme-toggle-wrapper">
          <DarkMode darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>
        <button className="menu" onClick={toggleMenu}></button>
      </nav>

      <div className={`side-menu ${isMenuOpen ? 'open' : ''}`}>
        <div className="side-menu-header">
          <button className="close-menu" onClick={closeMenu}>X</button>
          <div className="dark-mode-button">
            <DarkMode darkMode={darkMode} setDarkMode={setDarkMode} />
          </div>
        </div>
        <a href="#">Home</a>
        <a href="#about">Sobre Mim</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projetos</a>
        <a href="#experiences">Experiências</a>
      </div>
    </header>
  );
}

export default NavBar;