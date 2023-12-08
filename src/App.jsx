import { FaSearch } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { TiShoppingCart } from "react-icons/ti";
import { GiTargetShot } from "react-icons/gi";
import { IoSettings } from "react-icons/io5";
import { ImMusic } from "react-icons/im";
import { MdSecurity } from "react-icons/md";
import { TbActivityHeartbeat } from "react-icons/tb";
import { BsFacebook } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const App = () => {
  return ( 

    // created header on this project 
    <>

    <nav className=' w-screen h-auto flex items-center justify-around p-2 bg-gradient-to-r from-cyan-500 to-blue-500 ... hover:cursor-pointer '  >
    <div className="logo-container h-25 flex flex-row items-center justify-center hover:  " >
    <a  href="https://youtu.be/CIpIQVJkanI?si=liWiGQiMnodJiRpj " target="_blank"><img className="rounded-lg "  src="./src/images/skull-candy.png " alt="#" /></a> 
    </div>
    <div >
    <a href="">
    <ul className="menu-bar w-70 h-25 flex flex-row items-center justify-center gap-10 text-xl  text-white  ">
      <li className="All-Products hover:translate-y-1  ">All-Products</li>
      <li className="Wired-Headsets hover:translate-y-1 ">Wired-Headsets</li>
      <li className="wireless-HeadPhones hover:translate-y-1 ">wireless-HeadPhones</li>
      <li className="Ear-buds hover:translate-y-1 ">Ear-buds</li>
      <li className="Gaming-Headsets hover:translate-y-1 ">Gaming-Headsets</li>
      <li className="Support hover:translate-y-1 ">Support</li>
    </ul>
    </a>
    </div>
    <div className=" icons w-15 h-25 flex flex-row items-center justify-center gap-10   text-white" >
    <FaSearch className=" text-2xl hover:translate-y-1" />
    <CgProfile className="text-2xl hover:translate-y-1 " />
    <TiShoppingCart className=" text-yellow-400 text-2xl hover:translate-y-1" />

    </div>
    </nav> 

    {/* // creating sub heading here below what we give  */}
    <main className="   bg-gradient-to-r from-indigo-500 ... z-10 ... no-repeat  w-screen h-[40rem] p-[2rem]  flex flex-row
    items-start justify-between"  >
<div className="flex flex-col justify-center items-start gap-[2rem]">
  <img className="w-[70rem] relative bottom-6" src="./src/images/sounds-season-logo.png" alt="sound-season "  />

<p className="text-white text-3xl font-bold w-[30rem] h-[6rem] relative left-[12rem]  bottom-14 leading-[2.5rem]  " >SAVE BIG ON SELECT HEARING PROTECTION PRODUCTS!</p>
<button type="button" class="  bg-gradient-to-r from-sky-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ...  rounded-medium p-3 rounded-lg text-white text-xl font-bold relative bottom-16 left-[18rem]  ">
  SHOP NOW</button>
  </div>
<div>
  <img className=" h-[40rem] relative bottom-8 contrast-100 ... " src="./src/images/Hunting-image.jpg" alt="" /> 
</div>
    </main>

{/* body of the content is here the below code what we wrote  */}
<main className="w-screen h-auto flex items-center justify-around border-8 border-white-500/100 ... gap-2 p-2 text-red-900 text-xl font-bold"  >
  <div className="Hunting & shooting">
    <a href=""> <img className=" contrast-50 ... hover:contrast-100" src="./src/images/shooting-bg.jpg" alt="#" />
    <p className="text-slate-400 hover:text-sky-400 ">HUNTING & SHOOTING</p>
    <GiTargetShot className="absolute bottom-20 text-orange-50 text-4xl  " /></a>
  </div>

  <div >
    <a href=""><img className=" contrast-50 ... hover:contrast-100" src="./src/images/industrial-bg.jpg" alt="" />
    <p className="text-slate-400 hover:text-sky-400">INDUSTRIAL & MANUFACTURING</p>
    <IoSettings className="absolute bottom-20 text-orange-50 text-4xl " />
    </a>
  </div>

  <div>
    <a href=""><img className=" contrast-50 ... hover:contrast-100" src="./src/images/music-bg.jpg" alt="" />
  <p className="text-slate-400 hover:text-sky-400">HEAD PHONES</p></a>
  <ImMusic className="absolute bottom-20 text-orange-50 text-4xl " />
  </div>

  <div>
    <a href=""><img className=" contrast-50 ... hover:contrast-100" src="./src/images/home-ps-31.jpg" alt="" />
  <p className="text-slate-400 hover:text-sky-400 ...">PUBLIC SAFETY & SECURITY</p>
  <MdSecurity className="absolute bottom-20  text-orange-50 text-4xl " /></a>
  </div>

  <div>
    <a href=""> <img className=" contrast-50 ... hover:contrast-100" src="./src/images/home-health-img.jpg" alt="" />
  <p className="text-slate-400 hover:text-sky-400">HEALTHY & SAFETY</p>
  <TbActivityHeartbeat className="absolute bottom-20 text-orange-50 text-4xl  " /></a>
  </div>
</main>

{/* add video about Decibullz */}

<iframe width="1903" height="1070" src="https://www.youtube.com/embed/cWSGs1boCks?list=TLGG0OeiWFwZbBcwNzEyMjAyMw" title="Decibullz Custom Molded Earplugs and Hearing Protection. A fit for every lifestyle." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

{/* some message about our website from left to right */}

<main className="flex flex-row items-center justify-between w-screen h-auto p-4" >
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
<div>
  <img src="./src/images/zig-zag-right.jpg" alt="#" />
</div>
</main>


{/*   some message about our website from right to left*/}

<main className="flex flex-row items-center justify-between w-screen h-auto p-10 relative left-12 " >
<div>
  <img src="./src/images/zig-zag-left.jpg" alt="#" />
</div>
<div className="flex flex-col items-center justify-between  h-auto gap-12 p-8" >
  <h1 className="text-6xl font-bold w-[44.3rem] relative right-20  ">THE DECIBULLZ
EASY SHAPE SYSTEM™</h1>
  <div className="flex flex-col items-center justify-between w-3/4 relative right-20 h-auto gap-5">
<h3 className="text-4xl font-bold  text-orange-500 w-3/4 relative right-20 ">HEAT</h3>
<p className=" text-2xl   text-black pl-4 ">Simply heat the earpieces in warm water for 3-5 minutes. The earpieces will soften for easy moldability.</p>
  </div>
  <div className="flex flex-col items-center justify-between w-3/4 relative right-20 h-auto gap-5">
<h3 className="text-4xl font-bold  text-orange-500  w-3/4 relative right-20"> SHAPE</h3>
<p  className=" text-2xl   text-black pl-4 ">Place the now pliable earpiece into your ear and form them with the flat of your finger for a snug, secure fit.</p>
  </div>
  <div className="flex flex-col items-center justify-between w-3/4 relative right-20 h-auto gap-5">
<h3 className="text-4xl font-bold  text-orange-500 w-3/4 relative right-20">REMOLDABLE</h3>
<p  className=" text-2xl   text-black pl-4 ">Decibullz earpieces can be re-warmed and molded to the shape of your ears until you find the perfect fit.</p>
  </div>
</div>

</main>
{/* footer section */}

<main className="bg-gradient-to-r from-cyan-500 to-blue-500 ...w-screen h-auto  ">
  <div className="flex flex-row items-start justify-around p-4 gap-16 leading-2">
<div className="logo">
<a  href="https://youtu.be/CIpIQVJkanI?si=liWiGQiMnodJiRpj " target="_blank"><img className="rounded-lg "  src="./src/images/skull-candy.png " alt="#" /></a> 
</div>
<ul className="text-white font-bold relative pt-2 bottom-3 text-2xl gap-2">
  <li className="p-1">Terms of Service</li>
  <li className="p-1">Privacy Policy</li>
  <li className="p-1">FAQ</li>
</ul>
<button className="contact-us relative top-5  bg-gradient-to-r from-white to-white hover:from-pink-500 hover:to-yellow-500 ... rounded p-3 text-xl text-black font-bold  ">CONTACT US</button>
<button className="subscribe relative top-5 bg-gradient-to-r from-white to-white hover:from-pink-500 hover:to-yellow-500 ... p-3 font-bold text-xl  text-black rounded">SUBSCRIBE</button>
  </div>

</main>
{/* contact our-website on this three locations   */}
<div className="icon flex flex-row  items-center justify-around p-6   bg-gradient-to-r from-cyan-500 to-blue-500 ...   ">
  <a className=" flex flex-row  items-center justify-around p-4 gap-5" href="">
    <button className="font-bold  text-2xl  text-blue-600  flex flex-row p-3 rounded  items-center justify-around gap-2 bg-gradient-to-r from-white to-white hover:from-pink-500 hover:to-yellow-500 ..."><BsFacebook />Facebook </button>
<button className="font-bold  text-2xl text-red-600  flex flex-row p-3 rounded   items-center justify-around gap-2 bg-gradient-to-r from-white to-white hover:from-pink-500 hover:to-yellow-500 ...  "><FaYoutube  />Youtube</button>
<button className="font-bold  text-2xl text-sky-600  flex flex-row p-3 rounded   items-center justify-around gap-2 bg-gradient-to-r from-white to-white hover:from-pink-500 hover:to-yellow-500 ..."><BsTwitterX />Twitter</button>
  </a>

</div>



</>
    
  
  
  
    
    );
}

export default App;