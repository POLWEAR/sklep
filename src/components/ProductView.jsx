import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { addToCart } from '../store/actions';
import { ProductDescription, ProductName, ProductPrice } from './Product';
import Button from './Button';

const ProductViewWrapper = styled.div`
  margin: 25px 10px;
`;

const ProductView = ({ id, name, price, image, description, dispatch }) => (
  <ProductViewWrapper>
    <img src={image} alt={name} />
    <ProductDescription style={{ margin: '20px 20px', fontSize: '1.2rem' }}>
      <ProductName>{name}</ProductName>
      <ProductPrice>{price} PLN</ProductPrice>
      <span style={{ margin: '20px 0' }}>
        {/*<p style={{ fontSize: '0.7rem' }}>Towar niedostępny</p>*/}
        <Button onClick={(e) => dispatch(addToCart(id))}>
          Add to the cart
        </Button>
      </span>
      <p style={{ fontSize: '1rem' }}>{description}</p>
    </ProductDescription>
  </ProductViewWrapper>
);

export default connect()(ProductView);
