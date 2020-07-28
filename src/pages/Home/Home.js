import React from 'react';
import Menu from '../../components/Menu/Menu';
import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain/BannerMain';
import Carousel from '../../components/Carousel/Carousel';
import Footer from '../../components/Footer/Footer';

function Home() {
  return (
    <div style={{background: '#141414'}}>
      <Menu />
      <Carousel category={dadosIniciais.categorias[3]} />
      <Carousel category={dadosIniciais.categorias[4]} />
      <Footer />
    </div>
  );
}

export default Home;
