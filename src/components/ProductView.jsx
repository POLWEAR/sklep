import React from 'react';
import styled from 'styled-components';

import { ProductDescription, ProductName, ProductPrice } from './Product';
import Button from './Button';

const ProductViewWrapper = styled.div`
  margin: 25px 10px;
`;

const ProductView = ({ name, price, image, description }) => (
  <ProductViewWrapper>
    <img src={image} alt={name} />
    <ProductDescription style={{ margin: '20px 20px', fontSize: '1.2rem' }}>
      <ProductName>{name}</ProductName>
      <ProductPrice>{price} PLN</ProductPrice>
      <span style={{ margin: '20px 0' }}>
        <Button>Add to the cart</Button>
      </span>
      <p style={{ fontSize: '1rem' }}>{description}</p>
    </ProductDescription>
  </ProductViewWrapper>
);

export default ProductView;
