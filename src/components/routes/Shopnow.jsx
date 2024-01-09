import { NavLink } from "react-router-dom";
import AllProducts from "../../constants/AllProducts";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Outlet } from "react-router-dom";
import { useState } from "react";

const ShopProducts = ( ) => {
const [cart,setCart]=useState([])


// items added to the cart

const addToCart =(item)=>{
    setCart([...cart,item])
    }

// clickhandler for adding items
const clickHanndler=(item)=>{

console.log(item);
}

    const Item = (props) => {
    return (
        <>
        
        <div className=" max-w-sm mx-auto bg-white w-96 ml-10 mt-4 mb-8 flex flex-col items-center
        hover:scale-105 gap-4 shadow-lg rounded-lg overflow-hidden justify-evenly">
        <img className="  w-74 h-64 object-center" src={props.image} />
        <h2 className="text-xl font-semibold text-gray-800 ">
            {props.name}
        </h2>
        <span className="text-xl font-semibold text-gray-800 mb-3">
            {props.price}
        </span>
        <NavLink  >
        <button onClick={({item})=>{clickHanndler(item)}}  className="hover:cursor-pointer hover:translate-y-1 p-2 bg-white text-black rounded-md font-bold border-4 border-yellow-400/100 ... mb-3">ADD TO CART</button>
        
        </NavLink>
        
        </div> 
        </>
        
    );
    };
    return (
        
    <div>
        <Navbar   size={cart.length} />
        <Outlet  />
        <div className="flex flex-wrap mx-14 pt-[5rem]">
        {AllProducts.map((item,id) => {
            return (
            
            <Item 
                clickHanndler={clickHanndler}
                key={id}
                id={item.id}
                name={item.name}
                price={item.price}
                image={item.image}
                
            />
            );
        })}
        </div>
        <Footer/>
    </div>
    );
};

export   {ShopProducts};