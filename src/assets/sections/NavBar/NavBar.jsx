import React, { useState } from 'react';
import logo from '../../../../public/images/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css';
import DarkMode from '../../components/DarkMode/DarkMode';

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
          <DarkMode />
        </div>
        <button className='menu' onClick={toggleMenu}></button>
      </nav>
      <div className={`side-menu ${isMenuOpen ? 'open' : ''}`}>
        <button className="close-menu" onClick={closeMenu}>X</button> {/* Botão para fechar */}
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
