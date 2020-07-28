import React from 'react';
import Parent from '../../../components/Parent/Parent';
import { Link } from 'react-router-dom';

const Video = props => {
  return (
    <Parent>
      <h1>Cadastro de Vídeo</h1>
      <Link to="/viniflix/cadastro/categoria">Cadastrar Categoria</Link>
    </Parent>
  );
}

export default Video;