
import React, { useState } from 'react';
import Product from './CartProducts';
import Cart from "./CartItem"

const listItems = () => {
const [cartItems, setCartItems] = useState([]);

const addToCart = (product) => {
    setCartItems([...cartItems, product]);
};

const removeFromCart = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
};

const products = [
    { id: 1, name: 'Product 1', description: 'Description 1', price: 10 },
    { id: 2, name: 'Product 2', description: 'Description 2', price: 15 },
    // Add more products as needed
];

return (
    <div>
    <h1>Online Store</h1>
    <div>
        {products.map((product) => (
        <Product key={product.id} product={product} addToCart={addToCart} />
        ))}
    </div>
    <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
    </div>
);
};

export default listItems;
