import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import logo from '../assets/LogoLight.svg';

import CartButton from './CartButton';
import Hamburger from './Hamburger';

const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: row;
  padding: 20px 10%;
  justify-content: center;
  align-items: center;
`;

const Header = () => (
  <HeaderWrapper>
    <Hamburger />
    <Link to="/" style={{ flex: 1, margin: '0 20px' }}>
      <img src={logo} alt="POLWEAR" height="40vw" />
    </Link>
    <CartButton empty />
  </HeaderWrapper>
);

export default Header;
