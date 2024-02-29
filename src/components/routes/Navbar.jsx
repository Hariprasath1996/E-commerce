// import { CgProfile } from "react-icons/cg";
import { TiShoppingCart } from "react-icons/ti";
import { NavLink } from "react-router-dom";
import { useUserGlobalContext } from "./context/user.context";
import { signOutUser } from "../../constants/Fire-base/firebase"
import { Link } from "react-router-dom";
import { useCartGlobalContext } from "./context/cart.context";
// import { useContext } from "react";



const Navbar = () => {
const {currentUser}= useUserGlobalContext()
const signOutHandler = async()=>{
    const response =await signOutUser()
}
const {isCartOpen,setIsCartOpen,cartCount} =useCartGlobalContext;
const toggleCartContainer = ()=>setIsCartOpen(!isCartOpen);
    return ( 
        <>
        <nav className=' w-screen h-auto flex  items-center justify-around p-2 bg-gradient-to-r from-cyan-500 to-blue-500 ...'  >
    <div className="logo-container w-auto h-25 flex flex-row items-center justify-center hover:  " >
    <a  href="https://youtu.be/CIpIQVJkanI?si=liWiGQiMnodJiRpj " target="_blank"><img className=" hover:animate-pulse rounded-lg   "  src="./src/images/skull-candy.png " alt="#" /></a> 
    </div>
    <div  >
    <ul className="menu-bar w-auto h-25 flex flex-row items-center justify-center gap-10 text-xl  text-white   ">
    <NavLink to="/Shop"  className="Shop hover:animate-pulse hover:cursor-pointer hover:translate-y-1 p-2 bg-white text-black  rounded-md font-bold border-4 border-indigo-300/100 ...  " >SHOP NOW</NavLink>
    <NavLink to="/ABOUT" className="About hover:animate-pulse hover:cursor-pointer hover:translate-y-1 p-2 bg-white text-black rounded-md font-bold border-4 border-indigo-300/100 ... ">ABOUT </NavLink>
    <NavLink to="/CONTACT"className="Contact hover:animate-pulse hover:cursor-pointer hover:translate-y-1 p-2 bg-white text-black rounded-md font-bold border-4 border-indigo-300/100 ... ">CONTACT</NavLink> 
    </ul>
    </div>
    <div className="  icons w-25 h-25 flex flex-row items-center justify-center gap-10 text-white" >
    <input  className="w-50 h-10   bg-white text-black rounded font-bold border-4 border-indigo-300/100 ... text-xl  " type="text" placeholder=" Search Here... " />
    <NavLink >
    <button className="bg-cyan-500 px-6 py-1 font-bold shadow-xl text-white text-lg rounded-md hover:animate-pulse ">Submit</button>
    </NavLink>
    <NavLink to="/Login" className="" >
    {/* <CgProfile className="text-3xl hover:translate-y-1 hover:animate-pulse " /> */}
    {
        currentUser ? (<li>
            <span className="Nav-link"
            onClick={signOutHandler}>
            </span>
        SIGN OUT
        </li>)
        : (
            <li className="Nav-item ">
                <Link className="Nav-link hover:animate-pulse hover:cursor-pointer hover:translate-y-1 p-2 bg-white text-black  rounded-md font-bold border-4 border-indigo-300/100 ... "
            to="/Login">
                SIGN IN
                </Link>
            
            </li>
        )
    }
    </NavLink>
    <div className="cart-container" onClick={toggleCartContainer}>
    <NavLink to="/cart"  >
    <span className="flex flex-row justify-end">{cartCount}</span>
    <span><TiShoppingCart className=" text-yellow-400 text-3xl hover:translate-y-1 hover:animate-pulse" /></span>
    </NavLink>
    </div>
    </div>   
    </nav>
        </>
    
    );
}

export  {Navbar};