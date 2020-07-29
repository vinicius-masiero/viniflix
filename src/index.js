import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.css';
import Home from './pages/Home/Home';
import CadastroVideo from './pages/cadastro/Video/Video';
import CadastroCategory from './pages/cadastro/Category/Category';


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/viniflix/" component={Home} exact />
      <Route path="/viniflix/cadastro/video" component={CadastroVideo} />
      <Route path="/viniflix/cadastro/categoria" component={CadastroCategory} />
      <Route component={() => (<div>404</div>)} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
