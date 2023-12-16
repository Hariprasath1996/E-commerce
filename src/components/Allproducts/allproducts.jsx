import { useState } from "react";
import Products from "../../constants/index";
import productList from "./allproducts.list";

const allProducts = () => {
    const [data,Setdata]=useState (Products)
    return ( 
        <div className="flex flex-wrap gap-8">
            {data.map((items)=>{
                return(
                    <productList  key={items.id} items={items}/>
                )
            })}
        </div>

    );
}

export default allProducts;