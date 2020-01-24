import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import logo from './assets/LogoLight.svg';
import './App.css';

import Button from './components/Button';
import Hamburger from './components/Hamburger';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Hamburger />
          <img src={logo} alt="POLWEAR" height="50px" />
        </header>
        <Switch>
          <Route path="/" exact>
            <Link to="/cart">
              <Button>Cart</Button>
            </Link>
          </Route>
          <Route path="/cart">
            <Link to="/">
              <Button>Home</Button>
            </Link>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
