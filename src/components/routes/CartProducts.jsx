

import React from 'react';

const Product = ({ product, addToCart}) => {
  return (
    <div>
      <h3>{product.name}</h3>
      <img className="  w-74 h-64 object-center" src={product.image} />
      <p>${product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default Product;
