import React from 'react';
import CartWidget from './CartWidget';
import logo from '../logo.png'; 
import './NavBar.css';


const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo de la tienda" />
        <span className="brand-name">Oasis Cultural</span> 
      </div>
      <ul className="nav-links">
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Productos</a></li>
        <li><a href="#">Nosotros</a></li>
        <li><a href="#">Contacto</a></li>
        <li><a href="#">Libros</a></li> 
        <li><a href="#">Peliculas</a></li> 
        <li><a href="#">Musica</a></li> 
      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
