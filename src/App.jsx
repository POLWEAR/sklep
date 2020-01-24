import React from 'react';
import logo from './assets/LogoLight.svg';
import './App.css';

import Hamburger from './components/Hamburger';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Hamburger />
        <img src={logo} alt="POLWEAR" height="50px" />
      </header>
    </div>
  );
}

export default App;
