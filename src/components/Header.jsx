import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../assets/LogoLight.svg';

import CartButton from './CartButton';
import Hamburger from './Hamburger';

const Header = () => (
  <header className="App-header">
    <Hamburger />
    <Link to="/" style={{ margin: '0 20px' }}>
      <img src={logo} alt="POLWEAR" height="40vw" />
    </Link>
    <CartButton empty />
  </header>
);

export default Header;
