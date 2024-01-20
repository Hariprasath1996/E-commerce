import { createContext,useContext,useState } from "react";
import AllProducts  from "../../../constants/AllProducts";
// import {onAuthStateChangedListener,createUserDocumentFromAuth,signOutUser} from '../../../constants/Fire-base/firebase'




const useProductsContext = createContext(
)


const ProductsProvider = ({children})=>{
    const [products,setProducts]=useState(AllProducts);



    const Values = {products,setProducts}
    return <useProductsContext.Provider value={Values}>
        {children}
    </useProductsContext.Provider>
};

// custom hook
const useProductsGlobalContext = ()=>{
    return useContext (useProductsContext);
};

export {ProductsProvider,useProductsGlobalContext}