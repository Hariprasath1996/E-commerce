
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

import { useProductsGlobalContext } from "./context/products.context";
import { ProductCard } from "../product-card/product-card.component";

const ShopProducts =()=>{
    const{products}=useProductsGlobalContext();

    return(
        <>
        <Navbar/>
        <div className="products-container grid grid-cols-4 gap-x-2.5 gap-y-2.5 ">
            {
                products.map((product)=>{
                    return(
                        <ProductCard 
                        key={product.id}
                        {...product}
                        />
                    )
                })
            }

        </div>
        <Footer/>
        </>
        
    )
}
export default ShopProducts ;