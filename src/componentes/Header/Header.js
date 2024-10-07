import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header>
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