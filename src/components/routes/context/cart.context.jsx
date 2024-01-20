import { Children } from "react";
import { createContext,useContext,useEffect,useState } from "react";
const CartContext =createContext();



const addCartItem =(cartItems,ProductToAdd)=>{

const existingCartItem=cartItems.find(
    (cartItem)=>cartItem.id === ProductToAdd.id
);
if (existingCartItem) {
    return cartItems.map((cartItem)=>
        cartItem.id === ProductToAdd.id
        ? {...cartItem,quantity:cartItem.quantity+1}
        : cartItem

    
    )
}


return [...cartItems,{...ProductToAdd,quantity:1}];
}


const CartProvider = ()=>{
const [isCartOpen,setIsCartOpen]=useState(false);
const [cartItems,setCartItems]=useState([]);
const [cartCount,setCartCount]=(0);
const [cartTotal,setCartTotal]=(0)

const addItemToCart=(ProductToAdd)=>{
    setCartItems(addCartItem(cartItems,ProductToAdd))
}
const value={
    cartItems,addItemToCart
}

    return <CartContext.Provider value={value}>
        {Children}
    </CartContext.Provider>
}
const useCartGlobalContext =()=>{
    return useContext(CartContext)
};

export {CartProvider,useCartGlobalContext}