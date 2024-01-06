

import React from 'react';

const Product = ({ product, addToCart}) => {
  return (
    <div className=' max-w-sm mx-auto bg-white w-96 ml-10 mt-4 mb-8 flex flex-col items-center
    hover:scale-105 gap-4 shadow-lg rounded-lg overflow-hidden justify-evenly'>
      <h3 className="text-xl font-semibold text-gray-800 mb-1 relative top-5  ">{product.name}</h3>
      <img className="  w-74 h-64 object-center" src={product.image} />
      <p className="text-xl font-semibold text-gray-800 mb-3">${product.price}</p>
      <button className="hover:cursor-pointer hover:translate-y-1 p-2 bg-white text-black rounded-md font-bold border-4 border-yellow-400/100 ... mb-3" onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default Product;
