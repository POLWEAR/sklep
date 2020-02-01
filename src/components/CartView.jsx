import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Button from '../components/Button';
import Product from '../components/Product';

const mapProductsToProps = (state) => ({
  products: state.cart,
});

const isEmpty = (cart) => cart === [];

const CartView = ({ products }) => {
  console.log(products);
  return (
    <>
      {isEmpty(products) ? (
        products.map(({ name, price, image }, index) => (
          <Product key={index} name={name} price={price} image={image} />
        ))
      ) : (
        <div style={{ margin: '0 30px' }}>
          <span style={{ display: 'block', margin: '20px' }}>
            Your cart is empty
          </span>
          <Link to="/">
            <Button>Go shopping</Button>
          </Link>
        </div>
      )}
    </>
  );
};

export default connect(mapProductsToProps)(CartView);
