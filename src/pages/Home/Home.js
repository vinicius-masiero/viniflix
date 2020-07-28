import React from 'react';
import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain/BannerMain';
import Carousel from '../../components/Carousel/Carousel';
import Parent from '../../components/Parent/Parent';

function Home() {
  return (
    <Parent>
      <Carousel category={dadosIniciais.categorias[3]} />
      <Carousel category={dadosIniciais.categorias[4]} />
    </Parent>
  );
}

export default Home;
