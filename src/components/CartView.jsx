import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../components/Button';
import Product from '../components/Product';

const CartView = ({ products }) => (
  <>
    {products ? (
      products.map(({ name, price, image }) => (
        <Product key={name} name={name} price={price} image={image} />
      ))
    ) : (
      <>
        <span style={{ display: 'block', margin: '20px' }}>
          Your cart is empty
        </span>
        <Link to="/">
          <Button>Go shopping</Button>
        </Link>
      </>
    )}
  </>
);

export default CartView;
