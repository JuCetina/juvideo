import React from 'react';

import '../assets/styles/components/Header.scss';

import logoBlanco from '../assets/static/logo-ju-video-BW2.png';
import icon from '../assets/static/user-icon.png';

const Header = () => (
    <header className="header">
        <img className="header__img" src={ logoBlanco } alt="Ju Video" />
        <div className="header__menu">
          <div className="header__menu--profile">
            <img src={ icon } alt="" />
            <p>Perfil</p>
          </div>
          <ul>
            <li><a href="/">Cuenta</a></li>
            <li><a href="/">Cerrar Sesión</a></li>
          </ul>
        </div>
    </header>
);

export default Header;