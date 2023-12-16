import { useEffect, useState } from "react";
import { url } from "./constants/dataUrl";


// create data's with copied url from api store

const dataUrl= ()=>{
const [products,setProducts]=useState([])

//  create async programs here

const fetchProducts = async ()=>{
    try{
        const response =await fetch (url);
        const data = await response .json ();
        setProducts(data)
    }catch (Error){
        console.log(`something went wrong`,Error)
    }
};

// call the async function in use effect hook method 

useEffect(()=>{ 
    fetchProducts()},[])
    return <main className="flex flex-wrap items-center justify-center gap-6 min-h-screen min-w-full" >{products.map ((product)=>{
        return (
            <div className="flex flex-col items-center justify-center gap-2 p-2  " key={product.id}>
                <img src={product.image} alt={product.title} />
            {/* <h2>Title</h2>
                <h3>Price</h3>
                <p>Category</p> */}


            </div> 
        )
    })}</main>
}
//  created delete logic here 





export default dataUrl;
