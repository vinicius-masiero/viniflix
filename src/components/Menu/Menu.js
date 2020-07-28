import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logo.png';
import './Menu.css';
import ButtonLink from '../ButtonLink/ButtonLink';

const Menu = props => {
  return (
    <nav className="Menu">
      <Link to="/viniflix">
        <img className="Logo" src={Logo} alt="ViniFlix logo" />
      </Link>
      <ButtonLink as={Link} className="ButtonLink" to="/viniflix/cadastro/video">
        Novo vídeo
      </ButtonLink>
    </nav>
  );
}

export default Menu;