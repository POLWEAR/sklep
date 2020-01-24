import React from 'react';

import logo from '../assets/LogoLight.svg';

import Hamburger from './Hamburger';

const Header = () => (
  <header className="App-header">
    <Hamburger />
    <img src={logo} alt="POLWEAR" height="50px" />
  </header>
);

export default Header;
