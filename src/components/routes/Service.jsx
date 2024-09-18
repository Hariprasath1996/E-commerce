import React from 'react';

const ServicePage = () => {
    return (
        <>
            <div className='w-full h-auto flex flex-col justify-center items-center bg-white py-12 px-6'>
                {/* Terms and Conditions Section */}
                <h1 className='text-black font-bold text-4xl md:text-6xl p-4 text-center'>
                    Terms And Conditions
                </h1>
                <p className='text-base md:text-xl text-green-800 font-semibold max-w-5xl leading-relaxed text-justify'>
                    Contest winner will be announced on Skullcandy.in website on the contest page.
                    To participate in the contest, users are required to tag his/her Love and Like/Follow our social media page. 
                    No change and encashment requests will be entertained. 
                    The offer/contest can be withdrawn without any notice. 
                    In case of any conflict, the decision of Skullcandy.in Management will be final. 
                    By participating in this contest and if you are a winner of any draw/contest, you agree and allow Skullcandy.in to display/announce your name on the website and social media pages of Skullcandy India. 
                    By filling out the participation form, you confirm to abide by the above terms and conditions.
                </p>
                {/* Contact Information Section */}
                <h1 className='text-black font-bold text-3xl md:text-4xl p-4 text-center mt-8'>
                    Contact Us
                </h1>
                <div className='flex flex-col items-center space-y-4'>
                    <h2 className='text-lg md:text-2xl text-black font-bold'>
                        Email: <span className="text-blue-600">customercare@brand.in</span>
                    </h2>
                    <p className='text-lg md:text-2xl text-black font-bold'>
                        Phone: <span className="text-blue-600">012-34567890</span>
                    </p>
                    <p className='text-lg md:text-2xl text-black font-bold'>
                        Mon-Fri, 10 AM – 4 PM
                    </p>
                </div>
            </div>
        </>
    );
};

export { ServicePage };
