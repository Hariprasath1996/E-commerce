// import { useState } from "react"
// const cartProducts = ()=>{
//     const [cartItems,setCartItems] = useState([]);
//     const [totalPrice, setTotalPrice] = useState(0);
    
//     // Function to add an item to the cart
        
//     const addItemToCart =(items)=>{
//     const updatedCartItems= [...cartItems,items];
//     setCartItems(updatedCartItems)
//     setTotalPrice(updatedCartItems)
//     } 

//     // Function to remove an item from the cart
//     const removeItemFromTheCart=()=>{
//         const updatedCartItems = [...cartItems];
//         updatedCartItems.splice(index,1);
//         setCartItems(updatedCartItems);
//         setTotalPrice(updatedCartItems)

//     }
// // Function To Update The Total  Price Of The Cart
//         const updateTotalPrice = (cart) => {
//         const newTotalPrice = cart.reduce((total, item) => total + item.price, 0);
//     setTotalPrice(newTotalPrice);
// };

// return(

//     <main>
//         <h1>SHOPPING CART ITEMS</h1>
//         <ul>
//         {cartItems.map((item, index) => (
//         <li key={index}>
//             {item.name} - ${item.price}
//             <button onClick={() => removeItemFromTheCart(index)}>Remove</button>
//         </li>
        
//         ))}
//         <p>Total Price: ${totalPrice}</p>
//     </ul>
//     </main>
// )
// }
// export {cartProducts}