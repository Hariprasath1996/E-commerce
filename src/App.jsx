import { FaSearch } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { TiShoppingCart } from "react-icons/ti";
import { GiTargetShot } from "react-icons/gi";
import { IoSettings } from "react-icons/io5";
import { ImMusic } from "react-icons/im";
import { MdSecurity } from "react-icons/md";
import { TbActivityHeartbeat } from "react-icons/tb";

const App = () => {
  return ( 

    // created header on this project 
    <>
    <nav className=' w-screen h-auto flex items-center justify-around p-2 bg-gradient-to-r from-cyan-500 to-blue-500 ... hover:cursor-pointer '  >
    <div className="logo-container h-25 flex flex-row items-center justify-center hover:  " >
    <a  href="https://youtu.be/CIpIQVJkanI?si=liWiGQiMnodJiRpj " target="_blank"><img className="rounded-lg"  src="./src/images/logo.jpg " alt="#" /></a> 
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
    <CgProfile className="text-2xl hover:translate-y-1" />
    <TiShoppingCart className="text-2xl hover:translate-y-1" />

    </div>
    </nav> 

    {/* // creating sub heading here below what we give  */}
    <main className=" bg-gradient-to-r from-indigo-500 ... z-10 ... no-repeat  w-screen h-auto p-[2rem] gap-[2rem] flex flex-row
    items-start justify-between"  >
<div className="flex flex-col justify-center items-start gap-[2rem]">
  <img className="w-[70rem]" src="./src/images/sounds-season-logo.png" alt="sound-season "  />

<p className="text-white text-3xl font-bold w-[30rem] h-[6rem] relative left-[12rem] leading-[2.5rem]  " >SAVE BIG ON SELECT HEARING PROTECTION PRODUCTS!</p>
<button type="button" class="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ... rounded-medium p-3 rounded-lg text-white text-xl font-bold relative left-[18rem]  ">
  SHOP NOW</button>
  </div>
<div>
  <img className="" src="./src/images/Hunting-image.jpg" alt="" /> 
</div>
    </main>

{/* body of the content is here the below code what we wrote  */}
<main className="w-screen h-auto flex items-center justify-around border-8 border-white-500/100 ... gap-2 p-2 text-red-900 text-xl font-bold"  >
  <div className="Hunting & shooting">
    <a href=""> <img src="./src/images/shooting-bg.jpg" alt="#" />
    <p className=" ">HUNTING & SHOOTING</p>
    <GiTargetShot className="absolute bottom-20 text-orange-50 text-4xl " /></a>
   
  </div>
  <div >
    <a href=""><img src="./src/images/industrial-bg.jpg" alt="" />
    <p className="">INDUSTRIAL & MANUFACTURING</p>
    <IoSettings className="absolute bottom-20 text-orange-50 text-4xl " />
    </a>
    
    
  </div>
  <div>
    <a href=""><img src="./src/images/music-bg.jpg" alt="" />
  <p className="">HEAD PHONES</p></a>
  
  <ImMusic className="absolute bottom-20 text-orange-50 text-4xl " />

  </div>
  <div>
    <a href=""><img src="./src/images/home-ps-31.jpg" alt="" />
  <p className="">PUBLIC SAFETY & SECURITY</p>
  <MdSecurity className="absolute bottom-20  text-orange-50 text-4xl " /></a>
  
  </div>
  <div>
    <a href=""> <img src="./src/images/home-health-img.jpg" alt="" />
  <p className="">HEALTHY & SAFETY</p>
  <TbActivityHeartbeat className="absolute bottom-20 text-orange-50 text-4xl  " /></a>
 
  </div>
</main>

{/* add video about Decibullz */}
<iframe width="1903" height="1070" src="https://www.youtube.com/embed/cWSGs1boCks?list=TLGG0OeiWFwZbBcwNzEyMjAyMw" title="Decibullz Custom Molded Earplugs and Hearing Protection. A fit for every lifestyle." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

</>
    
  
  
  
    
    );
}

export default App;