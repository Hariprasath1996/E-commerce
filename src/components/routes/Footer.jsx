
const Footer = () => {
    return ( 
    <main className="bg-gradient-to-r from-cyan-500 to-blue-500 ...w-screen h-auto  ">
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
</main>
);
}

export default Footer;