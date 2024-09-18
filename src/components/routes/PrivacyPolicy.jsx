import React from 'react';


const PolicyPage = () => {
    return (
        <>
            <div className='w-full min-h-screen flex flex-col items-center bg-gray-50 py-8 px-4 lg:px-24'>
                <h1 className='text-black font-extrabold text-4xl lg:text-6xl text-center mb-8'>WARRANTY POLICY</h1>
                
                <div className='w-full lg:w-10/12 xl:w-8/12 text-left'>
                    <p className='text-gray-700 mb-6 text-lg leading-7'>
                        How can I cancel my order? The cancellation of your order is only possible pre-dispatch, by mailing us or calling the toll no. 011-42700400...
                        {/* Truncated text for brevity */}
                    </p>

                    <div className='my-6'>
                        <h2 className='text-black font-bold text-2xl'>Customer Support</h2>
                        <p>Email: <a href="mailto:customercare@brand.in" className='text-blue-500'>customercare@brand.in</a></p>
                        <p>Phone: <span className='text-blue-500'>012-34567890</span></p>
                        <p>Hours: Mon-Fri, 10 AM – 4 PM</p>
                    </div>

                    <h2 className='text-black font-bold text-3xl mt-10 mb-4'>Replacement Terms & Conditions</h2>
                    <ul className='list-disc list-inside text-gray-700 leading-7 mb-8'>
                        <li>Product shall be entertained under warranty provided the original Purchase Invoice is presented.</li>
                        <li>The product should have been purchased from an authorized dealer...</li>
                        {/* Continue with your points */}
                    </ul>

                    <h2 className='text-black font-bold text-3xl mt-10 mb-4'>Terms and Conditions</h2>
                    <p className='text-gray-700 leading-7'>
                        Please allow us at least 14 working days for successful completion of your warranty claim...
                        {/* Rest of your content */}
                    </p>
                </div>
            </div>
        </>
    );
};

export { PolicyPage };
