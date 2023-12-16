import { useState } from "react";
import Products from "../../constants/index";

const allProducts = () => {
    const [data,Setdata]=useState (Products)
    return ( 
        <div>
            {data.map((items)=>{
                return(
                    <article>

                    </article>
                )
            })}
        </div>

    );
}

export default allProducts;