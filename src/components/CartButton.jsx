import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';

import fullCartLogo from '../assets/full-cart.svg';
import emptyCartLogo from '../assets/empty-cart.svg';

const CartButtonWrapper = styled(Link)`
  border: none;
  background: transparent;
`;

const isEmpty = ({ cart }) => ({ empty: !cart.length });

const CartButton = ({ empty }) => (
  <CartButtonWrapper to="/cart">
    {empty ? (
      <img src={emptyCartLogo} alt="Cart" />
    ) : (
      <img src={fullCartLogo} alt="Cart" />
    )}
  </CartButtonWrapper>
);

export default connect(isEmpty)(CartButton);
