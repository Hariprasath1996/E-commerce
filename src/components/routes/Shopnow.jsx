import React from 'react';
import AllProducts from './AllProducts';

const Shopnow = () => {

    return (
        <div className="w-full p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {AllProducts.map((product) => (
                <div key={product.id} className="bg-white shadow-lg rounded-lg p-4">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-48 object-cover rounded-md mb-4"
                    />
                    <h2 className="text-xl font-bold text-gray-800">{product.name}</h2>
                    <p className="text-lg text-gray-600">₹{product.price}</p>
                </div>
            ))}
        </div>
    );
};

export  {Shopnow};
