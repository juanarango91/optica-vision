import React from 'react';
import './Header.css';
import logo from '../../logo.png'; // Tell webpack this JS file uses this image



const Header = () => {
    return (
        <header>
            <a href='/'>
                <img src={logo} alt='Optica' height={70} width={70} />
            </a>
            <h1>Óptica Visión</h1>
            <nav>
                <a href="/">Inicio</a>
                <a href="/productos">Productos</a>
                <a href="/acerca">Acerca de</a>
                <a href="/contacto">Contacto</a>
                <a href="/mapa">Mapa</a>
                <a href="/testimonios">Testimonios</a>
            </nav>
        </header>
    );
};

export default Header;