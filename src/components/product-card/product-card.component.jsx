import Button from "../routes/authentication/button";

const productCard = ({name,price,image})=>{
    return (
        <main className="cart-container  ">
            <img src={image} alt={name}/>
            <div className="footer">
                <span>{name}</span>
                <span>₹{price}</span>
            </div>
            <Button buttonType="inverted">Add To Cart</Button>
        </main>
    )
}
export {productCard} ;