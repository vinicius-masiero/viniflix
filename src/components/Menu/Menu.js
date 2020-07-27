import React from 'react';
import Logo from '../../assets/img/logo.png';
import './Menu.css';
import ButtonLink from '../ButtonLink/ButtonLink';

const Menu = props => {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={Logo} alt="ViniFlix logo" />
      </a>
      <ButtonLink className="ButtonLink" href="/">
        Novo vídeo
      </ButtonLink>
    </nav>
  );
}

export default Menu;