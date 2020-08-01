import React, { useState, useEffect } from 'react';
import Parent from '../../../components/Parent/Parent';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField/FormField';
import useForm from '../../../hooks/useForm';

const Categoria = props => {
  const defaultValues = {
    title: '',
    description: '',
    color: '#7258c2'
  }

  const { changeHandler, values, clearForm } = useForm(defaultValues);

  const [categories, setCategories] = useState([]);
  
  function submitHandler(event) {
    event.preventDefault();
    setCategories([...categories, values]);
    clearForm();
  }

  useEffect(() => {
    const url = window.location.hostname.includes('localhost') ? 'http://localhost:8080/categorias' : 'https://viniflix.herokuapp.com/categorias';
    fetch(url).then(async (response) => {
      const json = await response.json();
      setCategories([...json]);
    });
  }, []);

  return (
    <Parent>
      <h1>Cadastro de Categoria: {values.title}</h1>
      <form onSubmit={submitHandler}>
        <FormField type="text" name="title" label="Nome:" value={values.title} onChange={changeHandler} />
        <FormField type="textarea" name="description" label="Descrição:" value={values.description} onChange={changeHandler} />
        <FormField type="color" name="color" label="Cor:" value={values.color} onChange={changeHandler} />
        <button>
          Cadastrar
        </button>
      </form>

      {categories.length === 0 && (
        <div>Loading...</div>
      )}
      
      <ul>
        {categories.map((category, index) => {
          return (
            <li key={index}>{category.title}</li>
          )
        })}
      </ul>
      <Link to="/viniflix">Home</Link>
    </Parent>
  );
}

export default Categoria;