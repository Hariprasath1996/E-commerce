
const CartItem = ({name,quantity,image,price})=>{
return(
    <main className="cart-items-container">
        <img src={image}alt={name} />
        <div>
            <span className="name">{name}</span>
            <span className="price">
                {quantity} X ₹{price}
            </span>
        </div>
    </main>
)
}

export default CartItem ;
