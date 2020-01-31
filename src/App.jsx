import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Home from './views/Home';
import Cart from './views/Cart';
import Product from './views/Product';

import Header from './components/Header';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/product/:id">
            <Product />
          </Route>
        </Switch>
      </div>
      <div style={{ margin: '50px auto', textAlign: 'center' }}>
        POLWEAR 2020 (R)
      </div>
    </Router>
  );
}

export default App;
