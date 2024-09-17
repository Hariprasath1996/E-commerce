
const Header = () => {
    return (
        <main className="bg-gradient-to-r from-indigo-500 w-screen h-[35rem] lg:h-[40rem] p-4 md:p-8 flex flex-col md:flex-row items-center justify-between">
            <div className="flex flex-col justify-center items-start gap-4 md:gap-8 w-full md:w-1/2">
                {/* Logo Image */}
                <img
                    className="w-full md:w-[30rem] lg:w-[40rem] object-contain"
                    src="./src/images/sounds-season-logo.png"
                    alt="sound-season"
                />
                {/* Promotional Text */}
                <p className="text-white text-lg md:text-2xl lg:text-3xl font-bold w-full lg:w-[30rem] leading-snug">
                    SAVE BIG ON SELECT HEARING PROTECTION PRODUCTS!
                </p>
            </div>
            <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
                {/* Background Image */}
                <img
                    className="w-full h-auto max-h-[30rem] md:max-h-[40rem] object-cover contrast-100"
                    src="./src/images/Hunting-image.jpg"
                    alt="Hunting"
                />
            </div>
        </main>
    );
};

export { Header };
