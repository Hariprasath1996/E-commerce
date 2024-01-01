import { NavLink } from "react-router-dom";
const Footer = () => {
    return ( 
    <main className="bg-gradient-to-r from-cyan-500 to-blue-500 ...w-screen h-auto  ">
<div className="flex flex-row items-start justify-around p-4 gap-16 leading-2">
<div className="logo">
<a  href="https://youtu.be/CIpIQVJkanI?si=liWiGQiMnodJiRpj " target="_blank"><img className="rounded-lg  "  src="./src/images/skull-candy.png " alt="#" /></a> 
</div>
<ul className= " flex flex-col text-white font-bold relative pt-2 bottom-3 text-2xl gap-2">
<NavLink to="/services" className="p-1">Terms of Service</NavLink>
<NavLink to="/privacy" className="p-1">Privacy Policy</NavLink>
<NavLink to="/faq" className="p-1">FAQ</NavLink>
</ul>
<NavLink to = "/CONTACT">
<button className="contact-us relative top-5  bg-gradient-to-r from-white to-white hover:from-white hover:to-gray-400 ... rounded p-3 text-xl text-black font-bold  ">CONTACT US</button>
</NavLink>

<button className="subscribe relative top-5 bg-gradient-to-r from-white to-white hover:from-white hover:to-gray-400 ... ... p-3 font-bold text-xl  text-black rounded">SUBSCRIBE</button>
</div>
</main>
);
}

export  {Footer};