import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-cyan-500 to-blue-500 w-auto h-auto py-6">
            <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start justify-around p-4 gap-8 md:gap-16">
                {/* Logo Section */}
                <div className="logo mb-4 md:mb-0">
                    <a
                        href="https://youtu.be/CIpIQVJkanI?si=liWiGQiMnodJiRpj"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            className="hover:animate-pulse rounded-lg w-64 h-auto mt-6"
                            src="./src/images/skull-candy.png"
                            alt="Logo"
                        />
                    </a>
                </div>

                {/* Links Section */}
                <ul className="flex flex-col text-white font-bold text-lg gap-2">
                    <NavLink
                        to="/services"
                        className="hover:animate-pulse hover:underline transition duration-300 ease-in-out"
                    >
                        Terms And Conditions
                    </NavLink>
                    <NavLink
                        to="/privacy"
                        className="hover:animate-pulse hover:underline transition duration-300 ease-in-out"
                    >
                        Privacy Policy
                    </NavLink>
                    <NavLink
                        to="/faq"
                        className="hover:animate-pulse hover:underline transition duration-300 ease-in-out"
                    >
                        FAQ
                    </NavLink>
                </ul>
                
                <div className="flex flex-col gap-4">
                    <NavLink to="/CONTACT">
                        <button className="hover:animate-pulse bg-white hover:bg-gray-400 text-black font-bold text-lg py-2 px-4 rounded-md transition duration-300 ease-in-out">
                            CONTACT US
                        </button>
                    </NavLink>
                    <button className="hover:animate-pulse bg-white hover:bg-gray-400 text-black font-bold text-lg py-2 px-4 rounded-md transition duration-300 ease-in-out">
                        SUBSCRIBE
                    </button>
                </div>
            </div>
        </footer>
    );
};

export { Footer };
