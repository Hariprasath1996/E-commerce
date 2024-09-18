import React from 'react';

const ContactPage = () => {
    return (
        <>
            <div className="w-full h-auto flex flex-col justify-center items-center bg-gray-50 py-12 px-4">
                {/* Heading */}
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
                    CONTACT US
                </h1>
                {/* Image */}
                <img
                    className="w-full max-w-3xl h-auto rounded-lg shadow-lg mb-8"
                    src="./src/images/music.jpg"
                    alt="Contact"
                />
                {/* Contact Information */}
                <div className="text-center space-y-4">
                    <h2 className="text-lg md:text-2xl text-gray-700 font-semibold">
                        Email: <span className="text-blue-600">customercare@brand.in</span>
                    </h2>
                    <p className="text-lg md:text-2xl text-gray-700 font-semibold">
                        Phone: <span className="text-blue-600">012-34567890</span>
                    </p>
                    <p className="text-lg md:text-2xl text-gray-700 font-semibold">
                        Working Hours: <span className="text-blue-600">Mon-Fri, 10 AM – 4 PM</span>
                    </p>
                </div>
            </div>
        </>
    );
};

export { ContactPage };
