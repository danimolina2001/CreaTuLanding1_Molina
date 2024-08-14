import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ product }) => {
  return (
    <div>
      <Link to={`/item/${product.id}`}>{product.name}</Link>
    </div>
  );
};

export default Item;