

import React, { useState } from 'react';

const Cart = () => {
const [cartItems, setCartItems] = useState([]);

  // Function to add an item to the cart
const addItemToCart = (item) => {
    setCartItems([...cartItems, item]);
};

  // Function to remove an item from the cart


const removeItemFromCart = (id) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(id, 1);
    setCartItems(updatedCart);
};

return (
    <div>
    <h2>Your Cart</h2>
    {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
    ) : (
        <ul>
    {cartItems.map((item, id) => (
        <li key={id}>
            {item.name} - ${item.price}
            <button onClick={() => removeItemFromCart(index)}>Remove</button>
            </li>
        ))}
        </ul>
    )}
      {/* Example items to add to the cart */}
    {/* <div>
        <button onClick={() => addItemToCart({ name: 'Item 1', price: 10 })}>
        Add Item 1 to Cart
        </button>
        <button onClick={() => addItemToCart({ name: 'Item 2', price: 20 })}>
        Add Item 2 to Cart
        </button>
    </div> */}
    </div>
);
};

export default Cart;
