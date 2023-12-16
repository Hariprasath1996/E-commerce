
import { FaSearch } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { TiShoppingCart } from "react-icons/ti";

const Navbar = ({item}) => {
    return ( 
        <nav className=' w-screen h-auto flex items-center justify-around p-2 bg-gradient-to-r from-cyan-500 to-blue-500 ...'  >
    <div className="logo-container w-auto h-25 flex flex-row items-center justify-center hover:  " >
    <a  href="https://youtu.be/CIpIQVJkanI?si=liWiGQiMnodJiRpj " target="_blank"><img className="rounded-lg "  src="./src/images/skull-candy.png " alt="#" /></a> 
    </div>
    <div >
    <ul className="menu-bar w-70 h-25 flex flex-row items-center justify-center gap-10 text-xl  text-white  ">
    <li className=" hover:cursor-pointer hover:translate-y-1 p-2 bg-white text-black rounded-md font-bold border-4 border-indigo-300/100 ... ">ALL-PRODUCTS</li>
    <li className=" hover:cursor-pointer hover:translate-y-1 p-2 bg-white text-black rounded-md font-bold border-4 border-indigo-300/100 ... ">HUNTING </li>
    <li className=" hover:cursor-pointer hover:translate-y-1 p-2 bg-white text-black rounded-md font-bold border-4 border-indigo-300/100 ... ">INDUSTRIAL </li>
    <li className=" hover:cursor-pointer hover:translate-y-1 p-2 bg-white text-black rounded-md font-bold border-4 border-indigo-300/100 ... ">MUSIC</li>
    <li className=" hover:cursor-pointer hover:translate-y-1 p-2 bg-white text-black rounded-md font-bold border-4 border-indigo-300/100 ..."> SECURITY</li>
    <li className=" hover:cursor-pointer hover:translate-y-1 p-2 bg-white text-black rounded-md font-bold border-4 border-indigo-300/100 ..."> SAFETY</li>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
    </ul>
    </div>
    <div className=" icons w-15 h-25 flex flex-row items-center justify-center gap-6 text-white" >
    <FaSearch className=" text-2xl hover:translate-y-1" />
    <CgProfile className="text-2xl hover:translate-y-1 " />
    <TiShoppingCart className=" text-yellow-400 text-2xl hover:translate-y-1" />
    </div>
    </nav>
    );
}

export default Navbar;