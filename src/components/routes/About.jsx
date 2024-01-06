import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Outlet } from "react-router-dom";
import React from 'react';

const AboutPage = () => {
return (
    <>
    <Navbar/>
        <Outlet/>
        <div className='w-screen h-auto flex flex-col justify-center items-center bg-white p-6 text-lg gap-8 '>
    <h2 className=' text-black font-bold text-4xl p-2  flex flex-row gap-4 justify-center items-center'>ABOUT US</h2>
    <img className=' ' src="./src/images/Culture.jpg" alt="#" />
    <p className='flex flex-wrap justify-center items-center text-black font-bold text-3xl gap-x-8 p-3  '>Welcome to our website! "Skullcandy"products are primarily targeted at the outdoor action sports  and general consumer market, but they have expanded in recent years into the premium audio market with products such as the Crusher headphones.Skullcandy products are sold through retailers, specialty outlets, corporate incentive programs and the company's online store</p>
    </div>
    <Footer/>
    </>
    
);
};

export  {AboutPage};