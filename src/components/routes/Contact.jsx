import React from 'react';
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
const ContactPage = () => {
return (
    <>
<Navbar/>
<div className='w-screen h-auto flex flex-col justify-center items-center bg-white p-6 text-lg gap-8 '>
    <h1 className=' text-black font-bold text-4xl p-2  flex flex-row gap-4 justify-center items-center'>CONTACT US</h1>
    <img className=' ' src="./src/images/music.jpg" alt="#" />
    <h2 className='flex flex-wrap justify-center items-center text-black font-bold text-3xl gap-x-8 p-3  '>Email :- customercare@brand.in</h2>
    <p className='flex flex-wrap justify-center items-center text-black font-bold text-3xl gap-x-8 p-3  '>Phone :- 012-34567890</p>
    <p className='flex flex-wrap justify-center items-center text-black font-bold text-3xl gap-x-8 p-3  '>Mon-Fri, 10 AM – 4 PM</p>
    </div>
    <Footer/>
    </>
);
};

export  {ContactPage};