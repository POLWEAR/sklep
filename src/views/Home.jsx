import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import products from '../products';
import Product from '../components/Product';

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const Home = () => (
  <div>
    <h2>Popularne produkty</h2>
    {products.map(({ name, price, image }, index) => (
      <StyledLink to={`/product/${index}`} key={index}>
        <Product name={name} price={price} image={image} />
      </StyledLink>
    ))}
  </div>
);

export default Home;
