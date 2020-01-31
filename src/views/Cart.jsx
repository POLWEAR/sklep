import React from 'react';

import CartView from '../components/CartView';

const products = [
  {
    name: 'Bluza HUSARIA',
    price: 75,
    image: require('../assets/husaria.png'),
    description: 'Fajna bluza',
  },
];

const Cart = () => (
  <div>
    <h1>Cart</h1>
    <CartView />
  </div>
);

export default Cart;
