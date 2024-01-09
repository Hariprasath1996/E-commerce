import React, { useState } from 'react';

const CartPage = () => {
  // data for items in the cart
const [cartItems, setCartItems] = useState([]);

  // Function to remove an item from the cart
const removeFromCart = (itemId) => {
    const updatedCart = cartItems.filter(item => item.id !== itemId);
    setCartItems(updatedCart);
};

  // Function to handle product click
const handleProductClick = (productName) => {
    console.log(`Product clicked: ${productName}`);
};

  // Calculate total price of items in the cart
const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
};

return (
    <div>
    <h2>Shopping Cart</h2>
    <ul>
        {cartItems.map(item => (
        <li key={item.id} onClick={() => handleProductClick(item.name)}>
            {item.name} - ${item.price}
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </li>
        ))}
    </ul>
    <p>Total: ${calculateTotal()}</p>
    </div>
);
};

export default CartPage;
