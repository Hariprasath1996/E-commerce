
import { FaSearch } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { TiShoppingCart } from "react-icons/ti";

const Navbar = ({item}) => {
    return ( 
        <nav className=' w-screen h-auto flex items-center justify-around p-2 bg-gradient-to-r from-cyan-500 to-blue-500 ... hover:cursor-pointer '  >
    <div className="logo-container h-25 flex flex-row items-center justify-center hover:  " >
    <a  href="https://youtu.be/CIpIQVJkanI?si=liWiGQiMnodJiRpj " target="_blank"><img className="rounded-lg "  src="./src/images/skull-candy.png " alt="#" /></a> 
    </div>
    <div >
    <ul className="menu-bar w-70 h-25 flex flex-row items-center justify-center gap-8 text-xl  text-white  ">
    <button href=""><li className="All-Products hover:translate-y-1 p-3 bg-white text-black rounded-md font-bold  ">All-Products</li></button>
    <a href=""><li className="Wired-Headsets hover:translate-y-1 p-3 bg-white text-black rounded-md font-bold  ">Wired-Headsets</li></a>
    <a href=""><li className="wireless-HeadPhones hover:translate-y-1 p-3 bg-white text-black rounded-md font-bold  ">wireless-HeadPhones</li></a>
    <a href=""> <li className="Ear-buds hover:translate-y-1 p-3 bg-white text-black rounded-md font-bold  ">Ear-buds</li></a>
    <a href=""><li className="Gaming-Headsets hover:translate-y-1 p-3 bg-white text-black rounded-md font-bold  ">Gaming-Headsets</li></a>
    <a href=""> <li className="Support hover:translate-y-1 p-3 bg-white text-black rounded-md font-bold  ">Support</li>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       </a>
    <a href=""></a>
    </ul>
    </div>
    <div className=" icons w-15 h-25 flex flex-row items-center justify-center gap-8 text-white" >
    <FaSearch className=" text-2xl hover:translate-y-1" />
    <CgProfile className="text-2xl hover:translate-y-1 " />
    <TiShoppingCart className=" text-yellow-400 text-2xl hover:translate-y-1" />
    </div>
    </nav>
    );
}

export default Navbar;