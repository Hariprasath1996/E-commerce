

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

const Cart = ({ cartItems, removeFromCart }) => {
return (
    <div>
    <h2>Shopping Cart</h2>
    <ul>
        {cartItems.map((item, index) => (
        <li key={index}>
            {item.name} - {item.price} $
            <button onClick={() => removeFromCart(index)}>Remove</button>
        </li>
        ))}
    </ul>
    </div>
);
};

export default Cart;
