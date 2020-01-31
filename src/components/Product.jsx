import React from 'react';
import styled from 'styled-components';

const ProductWrapper = styled.div`
  background: #ffffff;
  border: 2px solid #f1f1f1;
  border-radius: 2px;
  margin: 15px;
  padding: 15px;
`;

export const ProductDescription = styled.div`
  margin-top: 20px;
  * {
    display: block;
  }
`;

export const ProductName = styled.span`
  font-weight: 600;
  font-size: 1.2em;
  text-align: left;
`;

export const ProductPrice = styled.span`
  text-align: right;
`;

const Product = ({ name, image, price }) => (
  <ProductWrapper>
    <img src={image} alt={name} />
    <ProductDescription>
      <ProductName>{name}</ProductName>
      <ProductPrice>{price} PLN</ProductPrice>
    </ProductDescription>
  </ProductWrapper>
);

export default Product;
