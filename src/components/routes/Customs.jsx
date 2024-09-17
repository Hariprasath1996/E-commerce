const Customs = () => {
    return (
        <section className="flex flex-col lg:flex-row items-center justify-between w-screen h-auto p-8 gap-12">
            {/* Text Section */}
            <div className="flex flex-col items-start justify-between gap-12">
                <h1 className="text-4xl lg:text-6xl font-bold lg:w-[44.3rem]">
                    WHY CUSTOM IS BETTER
                </h1>
                {/* Comfort */}
                <div className="flex flex-col items-start justify-between w-full lg:w-3/4 gap-5">
                    <h3 className="text-3xl lg:text-4xl font-bold text-orange-500">
                        COMFORT
                    </h3>
                    <p className="text-lg lg:text-2xl text-black">
                        Our earpieces easily form to the natural contours of your ear. This
                        results in a perfect fit made just for you.
                    </p>
                </div>
                {/* Isolation */}
                <div className="flex flex-col items-start justify-between w-full lg:w-3/4 gap-5">
                    <h3 className="text-3xl lg:text-4xl font-bold text-orange-500">
                        ISOLATION
                    </h3>
                    <p className="text-lg lg:text-2xl text-black">
                        Decibullz earplugs are rated for up to 31 NRR. That’s one of the
                        highest levels of hearing protection on the market.
                    </p>
                </div>
                {/* Secure */}
                <div className="flex flex-col items-start justify-between w-full lg:w-3/4 gap-5">
                    <h3 className="text-3xl lg:text-4xl font-bold text-orange-500">
                        SECURE
                    </h3>
                    <p className="text-lg lg:text-2xl text-black">
                        Thanks to their ability to create a secure, snug fit, Decibullz
                        earpieces will stay in place when you’re on the move.
                    </p>
                </div>
            </div>
            {/* Image Section */}
            <div className="w-full lg:w-auto flex justify-center">
                <img
                    className="max-w-full lg:max-w-md object-cover"
                    src="./src/images/zig-zag-right.jpg"
                    alt="Custom Benefits"
                />
            </div>
        </section>
    );
};

export { Customs };
