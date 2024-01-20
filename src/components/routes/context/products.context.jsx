import { createContext,useContext,useState } from "react";
import AllProducts  from "../../../constants/AllProducts";
// import {onAuthStateChangedListener,createUserDocumentFromAuth,signOutUser} from '../../../constants/Fire-base/firebase'




const productsContext = createContext()


const ProductsProvider = ({children})=>{
    const [products,setProducts]=useState(AllProducts);



    const Values = {products,setProducts}
    return <productsContext.Provider value={Values}>
        {children}
    </productsContext.Provider>
};

// custom hook
const useProductsGlobalContext = ()=>{
    return useContext (productsContext);
};

export {ProductsProvider,useProductsGlobalContext}