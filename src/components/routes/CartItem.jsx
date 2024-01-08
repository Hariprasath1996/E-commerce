

// const cartItems =({name,quantity,image,price})=>{
//     return(
//         <>
//         <main className="Cart-items-container">
//             <img src={image}alt={name} />
//             <div className="items-details">
//                 <h1>
//                     {name}
//                 </h1>
//                 <p>
//                 {quantity}* ${price}
//                 </p>
//             </div>
//         </main>
//         </>
//     )

// }
// export {cartItems}



import React from 'react';
import { NavLink } from 'react-router-dom';

const Cart = ({ cartItems, removeFromCart }) => {
return (
    <div className=' max-w-sm mx-auto bg-white w-96 ml-10 mt-4 mb-8 flex flex-col items-center
    hover:scale-105 gap-4 shadow-lg rounded-lg overflow-hidden justify-evenly'>
    <h2 className=''>Shopping Cart</h2>
    <ul>
        {cartItems.map((item, id) => (
        <li key={id}>
        <img className='w-74 h-64 object-center' src={item.image} alt="#" />
            {item.name} - {item.price} $ 
    <NavLink  >
    <button onClick={() => removeFromCart(index)}>Remove</button>
        </NavLink>     
        </li>
        ))}
    </ul>
    </div>
);
};

export default Cart;
