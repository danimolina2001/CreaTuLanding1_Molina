import React from 'react';
import { Link } from 'react-router-dom';
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
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/category/productos">Productos</Link></li>
        <li><Link to="/category/nosotros">Nosotros</Link></li>
        <li><Link to="/category/contacto">Contacto</Link></li>
        <li><Link to="/category/libros">Libros</Link></li>
        <li><Link to="/category/peliculas">Peliculas</Link></li>
        <li><Link to="/category/musica">Musica</Link></li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;