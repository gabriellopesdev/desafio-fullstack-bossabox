import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './pages/login'
import { BrowserRouter, Switch, Route } from 'react-router-dom' 

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={ Login } exact/>  
      <Route path="/tools" component={ App }/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);