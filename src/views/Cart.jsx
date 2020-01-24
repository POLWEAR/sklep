import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../components/Button';

const Cart = () => (
  <div>
    <h1>Cart</h1>
    <Link to="/">
      <Button>Home</Button>
    </Link>
  </div>
);

export default Cart;
