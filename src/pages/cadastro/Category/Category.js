import React, { useState, useEffect } from 'react';
import Parent from '../../../components/Parent/Parent';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField/FormField';

const Categoria = props => {
  const defaultValues = {
    name: '',
    description: '',
    color: '#7258c2'
  }

  const [categories, setCategories] = useState([]);
  const [values, setValues] = useState(defaultValues);

  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value,
    })
  }

  function changeHandler(event) {
    setValue(event.target.getAttribute('name'), event.target.value);
  }
  
  function submitHandler(event) {
    event.preventDefault();
    setCategories([...categories, values]);
    setValues(defaultValues);
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
      <h1>Cadastro de Categoria: {values.name}</h1>
      <form onSubmit={submitHandler}>
        <FormField type="text" name="name" label="Nome:" value={values.name} onChange={changeHandler} />
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
            <li key={index}>{category.name}</li>
          )
        })}
      </ul>
      <Link to="/viniflix">Home</Link>
    </Parent>
  );
}

export default Categoria;