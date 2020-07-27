import React from 'react';
import Menu from './components/Menu/Menu';
import dadosIniciais from './data/dados_iniciais.json';
import BannerMain from './components/BannerMain/BannerMain';
import Carousel from './components/Carousel/Carousel';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Menu />
      <Footer />
    </div>
  );
}

export default App;
