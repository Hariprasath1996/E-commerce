import Button from "../routes/authentication/button";
import { useCartGlobalContext } from "../routes/context/cart.context";

const ProductCard = ({name,price,image,id})=>{
    const addItemToCart = useCartGlobalContext();
    const addToCartHandler=()=>{
        addItemToCart({id,name,price,image})
    }
    return (
        <main className="cart-container max-w-sm mx-auto bg-white w-96 mt-6 mb-8 flex flex-col items-center
        //         hover:scale-105 gap-4 shadow-lg rounded-lg overflow-hidden justify-evenly    ">
            <span className="text-xl font-semibold text-gray-800 mt-3">{name}</span>
            <img className=" w-74 h-64 object-center" src={image} alt={name}/>
            <div className="footer">
                
                <span className="text-xl font-semibold text-gray-800 mb-3">₹{price}</span>
            </div>
            <Button onClick={addToCartHandler}   className="hover:cursor-pointer hover:translate-y-1 p-2 bg-white text-black rounded-md font-bold border-4 border-yellow-400/100 ... mb-3" buttonType="inverted">Add To Cart</Button>
        </main>
    )
}
export {ProductCard} ;