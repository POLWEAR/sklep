import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../components/Button';

const Home = () => (
  <div>
    <h1>Home</h1>
    <Link to="/cart">
      <Button>Cart</Button>
    </Link>
  </div>
);

export default Home;
