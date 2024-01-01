import React from 'react';

const ContactPage = () => {
return (
    <div className='w-screen h-auto flex flex-col justify-center items-center bg-cyan-400 p-6 text-lg gap-8 '>
    <h1 className=' text-black font-bold text-4xl p-2  flex flex-row gap-4 justify-center items-center'>CONTACT US</h1>
    <img className=' ' src="./src/images/music.jpg" alt="#" />
    <h2 className='flex flex-wrap justify-center items-center text-black font-bold text-3xl gap-x-8 p-3  '>Email :- customercare@brandeyes.in</h2>
    <p className='flex flex-wrap justify-center items-center text-black font-bold text-3xl gap-x-8 p-3  '>Phone :- 011-42700400</p>
    <p className='flex flex-wrap justify-center items-center text-black font-bold text-3xl gap-x-8 p-3  '>Mon-Fri, 10 AM – 4 PM</p>
    </div>
);
};

export  {ContactPage};