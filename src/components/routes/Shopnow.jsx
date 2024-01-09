import { NavLink } from "react-router-dom";
import AllProducts from "../../constants/AllProducts";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Outlet } from "react-router-dom";
import { useState } from "react";

const ShopProducts = ( ) => {


    const Item = (props) => {
        const {name,price,image}=props;
        console.log(props);
    return (
        <>
        
        <div className=" max-w-sm mx-auto bg-white w-96 ml-10 mt-4 mb-8 flex flex-col items-center
        hover:scale-105 gap-4 shadow-lg rounded-lg overflow-hidden justify-evenly">
        <img className="  w-74 h-64 object-center" src={image} />
        <h2 className="text-xl font-semibold text-gray-800 ">
            {name}
        </h2>
        <span className="text-xl font-semibold text-gray-800 mb-3">
            {price}
        </span>
        <NavLink  >
        <button    className="hover:cursor-pointer hover:translate-y-1 p-2 bg-white text-black rounded-md font-bold border-4 border-yellow-400/100 ... mb-3">ADD TO CART</button>
        
        </NavLink>
        
        </div> 
        </>
        
    );
    };
    return (
        
    <div>
        <Navbar />
        <Outlet  />
        <div className="flex flex-wrap mx-14 pt-[5rem]">
        {AllProducts.map((item,id) => {
            return (
            <Item 
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