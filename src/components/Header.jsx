import React from 'react';
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/logo-platzi.webp';

const Header = () => (
    <div className="navbar-wrap">
        <nav className="navbar navbar-light navbar-expand-md">
            <div className="container">
                <a href="#" className="navbar-brand">
                    <span className="titulo">React from</span>
                    <img src={logo} alt="logo"/>
                </a>
            </div>
        </nav>
    </div>
);

export default Header;