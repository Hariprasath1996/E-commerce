
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
const ShopProducts =()=>{
    return(
        <>
        <Navbar/>
        <div className="products-container grid grid-cols-4 gap-x-2.5 gap-y-2.5 ">
        </div>
        <Footer/>
        </>
        
    )
}
export default ShopProducts ;