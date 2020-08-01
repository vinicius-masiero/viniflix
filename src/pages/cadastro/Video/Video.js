import React, { useEffect, useState } from 'react';
import Parent from '../../../components/Parent/Parent';
import { Link, useHistory } from 'react-router-dom';
import useForm from '../../../hooks/useForm';
import FormField from '../../../components/FormField/FormField';
import apiVideo from '../../../api/videos';
import apiCategories from '../../../api/categories';

const Video = props => {
  const history = useHistory();
  const [categories, setCategories] = useState([]);
  const categoryTitles = categories.map(({title}) => title);
  const { changeHandler, values } = useForm({
    title: '',
    url: '',
    category: '',
  });

  useEffect(() => {
    apiCategories.getAll().then((categoriesFromServer) => {
      setCategories(categoriesFromServer);
    });
  }, []);

  return (
    <Parent>
      <h1>Cadastro de Vídeo</h1>

      <form onSubmit={(event) => {
        event.preventDefault();

        const categorySave = categories.find((category) => {
          return category.title === values.category;
        });

        apiVideo.createVideo({
          title: values.title,
          url: values.url,
          categoryId: categorySave.id,
        }).then(() => {
          alert('Vídeo cadastrado com sucesso!');
          history.push('/viniflix');
        });
      }}>
        <FormField type="text" name="title" label="Título:" value={values.title} onChange={changeHandler} />
        <FormField type="url" name="url" label="URL:" value={values.url} onChange={changeHandler} />
        <FormField type="text" name="category" label="Categoria:" value={values.category} onChange={changeHandler} suggestions={categoryTitles} />
        <button type="submit">
          Cadastrar
        </button>
      </form>

      <Link to="/viniflix/cadastro/categoria">Cadastrar Categoria</Link>
    </Parent>
  );
}

export default Video;