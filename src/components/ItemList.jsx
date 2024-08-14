import React from 'react';
import Item from './Item';

const ItemList = ({ products }) => {
  return (
    <ul>
      {products.map(product => (
        <li key={product.id}>
          <Item product={product} />
        </li>
      ))}
    </ul>
  );
};

export default ItemList;