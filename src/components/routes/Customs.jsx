import { Outlet } from "react-router-dom";

const Customs = () => {
    return ( 
<section className="flex flex-row items-center justify-between w-screen h-auto p-4" >
<div className="flex flex-col items-center justify-between  h-auto gap-12 p-8" >
<h1 className="text-6xl font-bold w-[44.3rem] relative right-20  ">WHY CUSTOM
IS BETTER</h1>
<div className="flex flex-col items-center justify-between w-3/4 relative right-20 h-auto gap-5">
<h3 className="text-4xl font-bold  text-orange-500 w-3/4 relative right-20 ">COMFORT</h3>
<p className=" text-2xl   text-black pl-4 ">Our earpieces easily form to the natural contours of your ear. This results in a perfect fit made just for you.</p>
</div>
<div className="flex flex-col items-center justify-between w-3/4 relative right-20 h-auto gap-5">
<h3 className="text-4xl font-bold  text-orange-500  w-3/4 relative right-20"> ISOLATION</h3>
<p  className=" text-2xl   text-black pl-4 ">Decibullz earplugs are rated for up to 31 NRR. That’s one of the highest levels of hearing protection on the market.</p>
</div>
<div className="flex flex-col items-center justify-between w-3/4 relative right-20 h-auto gap-5">
<h3 className="text-4xl font-bold  text-orange-500 w-3/4 relative right-20">SECURE</h3>
<p  className=" text-2xl   text-black pl-4 ">Thanks to their ability to create a secure, snug fit, Decibullz earpieces will stay in place when you’re on the move.</p>
</div>
</div>
<div><img src="./src/images/zig-zag-right.jpg" alt="#" />
</div>
<Outlet/>
</section>

    );
}

export  {Customs} ;