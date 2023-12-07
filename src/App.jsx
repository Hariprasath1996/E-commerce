import { FaSearch } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { TiShoppingCart } from "react-icons/ti";

const App = () => {
  return ( 

    // created header on this project 
    <nav className=' w-screen h-auto flex items-center justify-around p-2 bg-yellow-200 hover:cursor-pointer '  >
    <div className="logo-container h-25 flex flex-row items-center justify-center hover:  " >
    <a  href="https://youtu.be/CIpIQVJkanI?si=liWiGQiMnodJiRpj " target="_blank"><img  src="./src/images/logo.jpg " alt="#" /></a> 
    </div>
    <div >
    <a href="">
    <ul className="menu-bar w-70 h-25 flex flex-row items-center justify-center gap-10 text-xl  ">
      <li className="All-Products hover:translate-y-1 ">All-Products</li>
      <li className="Wired-Headsets hover:translate-y-1 ">Wired-Headsets</li>
      <li className="wireless-HeadPhones hover:translate-y-1 ">wireless-HeadPhones</li>
      <li className="Ear-buds hover:translate-y-1 ">Ear-buds</li>
      <li className="Gaming-Headsets hover:translate-y-1 ">Gaming-Headsets</li>
      <li className="Support hover:translate-y-1 ">Support</li>
    </ul>
    </a>
    </div>
    <div className=" icons w-15 h-25 flex flex-row items-center justify-center gap-10 " >
    < FaSearch className=" text-2xl hover:translate-y-1" />
    <CgProfile className="text-2xl hover:translate-y-1" />
    <TiShoppingCart className="text-2xl hover:translate-y-1" />
    </div>
    </nav>

    // creating sub heading here below what we give 
    
    
    );
}

export default App;