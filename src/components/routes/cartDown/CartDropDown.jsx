import Button from "../authentication/button";
import CartItem from "../../cart-components.jsx/Cart";
import { useCartGlobalContext } from "./context/cart.context";

const CartDropDown = ()=>{
const {cartItems} =useCartGlobalContext();
const goToCheckOutHandler =()=>{};
return(
    <>
    <div className="cart-dropDown-container">
        <div className="Cart-Items">
            {
                cartItems.map((cartItem)=>(
                    <CartItem
                    {...cartItem}
                    key={cartItem.id}
                    />

                ))
            }
        </div>
        <Button onClick ={goToCheckOutHandler} >
Go To CheckOut
        </Button>
    </div>
    </>
)
}

export {CartDropDown}