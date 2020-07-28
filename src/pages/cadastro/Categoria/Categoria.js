import React from 'react';
import Parent from '../../../components/Parent/Parent';
import { Link } from 'react-router-dom';

const Categoria = props => {
  return (
    <Parent>
      <h1>Cadastro de Categoria</h1>
      <form>
        <label>
          Nome da Categoria:
          <input
            type="text"
          />
        </label>
        <button>
          Cadastrar
        </button>
      </form>
      <Link to="/viniflix">Home</Link>
    </Parent>
  );
}

export default Categoria;