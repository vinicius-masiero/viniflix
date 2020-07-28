import React from 'react';
import dadosIniciais from '../../data/dados_iniciais.json';
import Menu from '../../components/Menu/Menu';
import Footer from '../../components/Footer/Footer';
import BannerMain from '../../components/BannerMain/BannerMain';
import Carousel from '../../components/Carousel/Carousel';

function Home() {
  return (
    <div style={{background: "#141414"}}>
      <Menu />
      <BannerMain videoTitle={dadosIniciais.categorias[1].videos[0].titulo} url={dadosIniciais.categorias[1].videos[0].url} />
      <Carousel category={dadosIniciais.categorias[0]} />
      <Carousel category={dadosIniciais.categorias[1]} />
      <Footer />
    </div>
  );
}

export default Home;
