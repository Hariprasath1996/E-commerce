const Systems = () => {
    return (
        <section className="flex flex-col lg:flex-row items-center justify-between w-screen h-auto p-8 gap-12">
            {/* Image Section */}
            <div className="w-full lg:w-auto flex justify-center lg:justify-start">
                <img
                    className="max-w-full lg:max-w-md object-cover"
                    src="./src/images/zig-zag-left.jpg"
                    alt="Easy Shape System"
                />
            </div>
            <div className="flex flex-col items-start justify-between gap-8 p-8 w-full lg:w-2/3">
                <h1 className="text-4xl lg:text-6xl font-bold">
                    THE DECIBULLZ EASY SHAPE SYSTEM™
                </h1>
                {/* Heat */}
                <div className="flex flex-col items-start justify-between gap-4">
                    <h3 className="text-3xl lg:text-4xl font-bold text-orange-500">
                        HEAT
                    </h3>
                    <p className="text-lg lg:text-2xl text-black">
                        Simply heat the earpieces in warm water for 3-5 minutes. The
                        earpieces will soften for easy moldability.
                    </p>
                </div>
                {/* Shape */}
                <div className="flex flex-col items-start justify-between gap-4">
                    <h3 className="text-3xl lg:text-4xl font-bold text-orange-500">
                        SHAPE
                    </h3>
                    <p className="text-lg lg:text-2xl text-black">
                        Place the now pliable earpiece into your ear and form them with the
                        flat of your finger for a snug, secure fit.
                    </p>
                </div>
                <div className="flex flex-col items-start justify-between gap-4">
                    <h3 className="text-3xl lg:text-4xl font-bold text-orange-500">
                        REMOLDABLE
                    </h3>
                    <p className="text-lg lg:text-2xl text-black">
                        Decibullz earpieces can be re-warmed and molded to the shape of your
                        ears until you find the perfect fit.
                    </p>
                </div>
            </div>
        </section>
    );
};

export { Systems };
