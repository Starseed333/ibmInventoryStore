//import React and the products list here
//return the products here 
import React from 'react';
import ProductsList from './ProductsList';


export default ({ products, handleAdd }) => {
  if (products) {
    return (
      <div>
        <ProductsList products={products} handleAdd={handleAdd} />
      </div>
    );
  } else {
    return (
      <div>
        <p>Loading</p>
      </div>
    );
  }
};