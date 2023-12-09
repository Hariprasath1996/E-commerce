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

// call the fetch function in use effect hook method 
useEffect(()=>{ 
    fetchProducts()},[])
}
//  created delete logic here 





export default dataUrl;
