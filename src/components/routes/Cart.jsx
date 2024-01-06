import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Outlet } from "react-router-dom";
import React, { useState } from 'react';
import Product from './CartProducts';
import Cart from "./CartItem"
import AllProducts from '../../constants/AllProducts';

const ListItems = () => {
const [cartItems, setCartItems] = useState([]);

const addToCart = (product) => {
    setCartItems([...cartItems, product]);
};

const removeFromCart = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
};

// const products = [
//     { id: 1, name: 'Product 1', description: 'Description 1', price: 10 },
//     { id: 2, name: 'Product 2', description: 'Description 2', price: 15 },
// ];

return (
    <>
    <Navbar/>
        <Outlet/>
    <div  >
    <h1 className="text-5xl flex flex-row justify-center border-stone-950 bg-slate-800 p-4 text-white ">Online Store</h1>
    <div className="flex flex-wrap w-screen h-auto justify-center items-center  gap-14 ">
        {AllProducts.map((product) => (
        <Product key={product.id} product={product} addToCart={addToCart} />
        ))}
    </div>
    <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
    </div>
    <Footer/>
    </>

);
};

export default ListItems;
