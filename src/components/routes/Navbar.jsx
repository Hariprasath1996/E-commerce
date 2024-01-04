
import { FaSearch } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { TiShoppingCart } from "react-icons/ti";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return ( 
    <nav className=' w-screen h-auto flex  items-center justify-around p-2 bg-gradient-to-r from-cyan-500 to-blue-500 ...'  >
    <div className="logo-container w-auto h-25 flex flex-row items-center justify-center hover:  " >
    <a  href="https://youtu.be/CIpIQVJkanI?si=liWiGQiMnodJiRpj " target="_blank"><img className="rounded-lg   "  src="./src/images/skull-candy.png " alt="#" /></a> 
    </div>
    <div  >
    <ul className="menu-bar w-auto h-25 flex flex-row items-center justify-center gap-10 text-xl  text-white   ">
    <NavLink to="/Home" className="Home w-auto hover:cursor-pointer hover:translate-y-1 p-2 bg-white text-black rounded-md font-bold border-4 border-indigo-300/100 ... ">HOME</NavLink>
    <NavLink to="/Shop"  className="Shop hover:cursor-pointer hover:translate-y-1 p-2 bg-white text-black  rounded-md font-bold border-4 border-indigo-300/100 ... {({is Active})=> is Active ? `text-red-500`} ">SHOP NOW</NavLink>
    <NavLink to="/ABOUT" className="About hover:cursor-pointer hover:translate-y-1 p-2 bg-white text-black rounded-md font-bold border-4 border-indigo-300/100 ... ">ABOUT </NavLink>
    <NavLink to="/CONTACT"className="Contact hover:cursor-pointer hover:translate-y-1 p-2 bg-white text-black rounded-md font-bold border-4 border-indigo-300/100 ... ">CONTACT</NavLink> 
    </ul>
    </div>
    <div className=" icons w-25 h-25 flex flex-row items-center justify-center gap-10 text-white" >
        <label htmlFor="title" className="text-lg font-bold ">
        
        </label>
    <input value={title} onChange={
        (e)=>{e.target.value}
    } id="title" className="w-50 h-10  bg-white text-black rounded font-bold border-4 border-indigo-300/100 ... text-xl  " type="text" placeholder=" Search Here... " />
    <button onClick={ClickHandler} className="bg-cyan-500 px-6 py-1 font-bold shadow-xl text-white text-lg rounded-md ">Submit</button>
    <NavLink to="/Login" className="" >
    <CgProfile className="text-3xl hover:translate-y-1 " />
    </NavLink>
    <NavLink to="/CartItems">
    <TiShoppingCart className=" text-yellow-400 text-3xl hover:translate-y-1" />
    </NavLink>
    
    </div>   
    </nav>
    );
}

export  {Navbar};