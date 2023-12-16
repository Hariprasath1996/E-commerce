import { BsFacebook } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";


const Footer = () => {
    return ( 
        <footer className="bg-gradient-to-r from-cyan-500 to-blue-500 ...w-screen h-auto  ">
<div className="flex flex-row items-start justify-around p-4 gap-16 leading-2">
<div className="logo">
<a  href="https://youtu.be/CIpIQVJkanI?si=liWiGQiMnodJiRpj " target="_blank"><img className="rounded-lg  "  src="./src/images/skull-candy.png " alt="#" /></a> 
</div>
<ul className="text-white font-bold relative pt-2 bottom-3 text-2xl gap-2">
<a href=""><li className="p-1">Terms of Service</li> </a>
<a href=""><li className="p-1">Privacy Policy</li></a> 
<a href=""><li className="p-1">FAQ</li>
</a>
</ul>
<button className="contact-us relative top-5  bg-gradient-to-r from-white to-white hover:from-white hover:to-gray-400 ... rounded p-3 text-xl text-black font-bold  ">CONTACT US</button>
<button className="subscribe relative top-5 bg-gradient-to-r from-white to-white hover:from-white hover:to-gray-400 ... ... p-3 font-bold text-xl  text-black rounded">SUBSCRIBE</button>
</div>


<div className=" w-screen h-auto icon flex flex-row  items-center justify-around p-6   bg-gradient-to-r from-cyan-500 to-blue-500 ...   ">
<a className=" w-screen h-auto  flex flex-row  items-center justify-around   relative left- " href="">
<button className="font-bold  text-2xl  text-blue-600  flex flex-row p-3 rounded  items-center justify-around gap-2 bg-gradient-to-r from-white to-white hover:from-white hover:to-blue-300 ..."><BsFacebook />Facebook </button>
<button className="font-bold  text-2xl text-red-600  flex flex-row p-3 rounded   items-center justify-around gap-2 bg-gradient-to-r from-white to-white hover:from-white hover:to-red-400 ...  "><FaYoutube  />Youtube</button>
<button className="font-bold  text-2xl text-sky-600  flex flex-row p-3 rounded   items-center justify-around gap-2 bg-gradient-to-r from-white to-white hover:from-white hover:to-sky-300 ..."><BsTwitterX />Twitter</button>
</a>

</div>

</footer>
);
}

export default Footer;