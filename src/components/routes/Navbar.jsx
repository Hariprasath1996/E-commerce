import { TiShoppingCart } from "react-icons/ti";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <nav className="w-screen h-auto flex flex-col md:flex-row items-center justify-between p-4 bg-gradient-to-r from-cyan-500 to-blue-500 shadow-lg">
                {/* Logo Section */}
                <div className="logo-container w-full md:w-auto flex items-center justify-center mb-4 md:mb-0">
                    <a
                        href="https://youtu.be/CIpIQVJkanI?si=liWiGQiMnodJiRpj"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            className="hover:animate-pulse rounded-lg w-48 h-auto"
                            src="./src/images/skull-candy.png"
                            alt="Logo"
                        />
                    </a>
                </div>

                {/* Menu Section */}
                <div className="w-full md:w-auto flex justify-center">
                    <ul className="menu-bar flex flex-col md:flex-row gap-4 md:gap-10 text-lg text-white font-semibold">
                        <NavLink
                            to="/Shop"
                            className="hover:animate-pulse hover:translate-y-1 transition-all duration-300 ease-in-out bg-white text-black px-4 py-2 rounded-md border-2 border-indigo-300 font-bold"
                        >
                            SHOP NOW
                        </NavLink>
                        <NavLink
                            to="/ABOUT"
                            className="hover:animate-pulse hover:translate-y-1 transition-all duration-300 ease-in-out bg-white text-black px-4 py-2 rounded-md border-2 border-indigo-300 font-bold"
                        >
                            ABOUT US
                        </NavLink>
                        <NavLink
                            to="/CONTACT"
                            className="hover:animate-pulse hover:translate-y-1 transition-all duration-300 ease-in-out bg-white text-black px-4 py-2 rounded-md border-2 border-indigo-300 font-bold"
                        >
                            CONTACT
                        </NavLink>
                    </ul>
                </div>

                {/* Icons Section */}
                <div className="w-full md:w-auto flex justify-center mt-4 md:mt-0">
                    <div className="icons flex flex-col md:flex-row items-center gap-4 md:gap-8 text-white">
                        <NavLink
                            to="/log-in"
                            className="hover:animate-pulse hover:translate-y-1 transition-all duration-300 ease-in-out bg-white text-black px-4 py-2 rounded-md border-2 border-indigo-300 font-bold"
                        >
                            LOG IN
                        </NavLink>
                        <div className="cart-container flex items-center justify-center md:justify-start">
                            <NavLink to="/cart" className="flex items-center gap-1">
                                <TiShoppingCart className="text-yellow-400 text-3xl hover:animate-pulse" />
                                <span className="text-xl font-semibold pr-8">0</span>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export { Navbar };
