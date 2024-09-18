import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import React from "react";

const AboutPage = () => {
    return (
        <>
            <div className="w-full h-auto flex flex-col justify-center items-center bg-gray-100 py-12 px-4">
                {/* Heading */}
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
                    ABOUT US
                </h2>

                {/* Image */}
                <img
                    className="w-full max-w-4xl h-auto rounded-lg shadow-lg mb-8"
                    src="./src/images/Culture.jpg"
                    alt="Company Culture"
                />

                {/* Description */}
                <p className="text-lg md:text-2xl text-center font-semibold text-gray-800 leading-relaxed max-w-3xl px-4">
                    Welcome to our website! <strong>"Skullcandy"</strong> products
                    are primarily targeted at the outdoor action sports and
                    general consumer market, but they have expanded in recent
                    years into the premium audio market with products such as the
                    Crusher headphones. Skullcandy products are sold through
                    retailers, specialty outlets, corporate incentive programs, and
                    the company's online store.
                </p>
            </div>
        </>
    );
};

export { AboutPage };
