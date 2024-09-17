
import { TiShoppingCart } from "react-icons/ti";
import { NavLink } from "react-router-dom";
const Navbar = () => {
    return (
        <>
            <nav className=' w-screen h-auto flex  items-center justify-around p-2 bg-gradient-to-r from-cyan-500 to-blue-500 ...'  >
                <div className="logo-container w-auto h-25 flex flex-row items-center justify-center hover:  " >
                    <a href="https://youtu.be/CIpIQVJkanI?si=liWiGQiMnodJiRpj " target="_blank"><img className=" hover:animate-pulse rounded-lg   " src="./src/images/skull-candy.png " alt="#" /></a>
                </div>
                <div  >
                    <ul className="menu-bar w-auto h-25 flex flex-row items-center justify-center gap-10 text-xl  text-white   ">
                        <NavLink to="/Shop" className="Shop hover:animate-pulse hover:cursor-pointer hover:translate-y-1 p-2 bg-white text-black  rounded-md font-bold border-4 border-indigo-300/100 ...  " >SHOP NOW</NavLink>
                        <NavLink to="/ABOUT" className="About hover:animate-pulse hover:cursor-pointer hover:translate-y-1 p-2 bg-white text-black rounded-md font-bold border-4 border-indigo-300/100 ... ">ABOUT_US </NavLink>
                        <NavLink to="/CONTACT" className="Contact hover:animate-pulse hover:cursor-pointer hover:translate-y-1 p-2 bg-white text-black rounded-md font-bold border-4 border-indigo-300/100 ... ">CONTACT</NavLink>
                    </ul>
                </div>
                <div className="  icons w-25 h-25 flex flex-row items-center justify-center gap-10 text-white" >
                    <NavLink to="/Auth " className="Nav-link hover:animate-pulse hover:cursor-pointer hover:translate-y-1 p-2 bg-white text-black  rounded-md font-bold border-4 border-indigo-300/100 ..." > LOG IN </NavLink>
                    <div className="cart-container">
                        <NavLink to="/cart  " className="flex flex-row" >
                            <span><TiShoppingCart className=" text-yellow-400 text-3xl hover:translate-y-1 hover:animate-pulse" /></span>
                            <span className="flex flex-row justify-end">0</span>
                        </NavLink>
                    </div>
                </div>
            </nav>
        </>

    );
}

export { Navbar };