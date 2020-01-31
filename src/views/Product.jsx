import React from 'react';
import { useParams } from 'react-router-dom';

import products from '../products';

import ProductView from '../components/ProductView';

const Product = () => {
  const { id } = useParams();
  const { name, price, image, description } = products[id];

  return (
    <div>
      <ProductView
        name={name}
        price={price}
        image={image}
        description={description}
      />
    </div>
  );
};

export default Product;
