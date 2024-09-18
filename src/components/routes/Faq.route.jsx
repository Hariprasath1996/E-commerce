import { FaqData } from "../../constants/Faq";
import { useState } from "react";

const FaqItem = ({ question, answer }) => {
    const [show, setShow] = useState(false); // Toggle to show or hide answers

    return (
        <div className="bg-white w-full md:w-5/12 lg:w-4/12 p-6 mb-5 flex flex-col items-center hover:scale-105 transform transition duration-300 ease-in-out gap-2 shadow-lg rounded-lg overflow-hidden justify-center">
            <img className="w-64 h-48 object-contain" src="./src/images/FAQ.png" alt="FAQ" />
            <div className="w-full h-auto flex flex-col text-center">
                <h2 className="text-xl md:text-2xl font-semibold text-green-800 mb-2 cursor-pointer" onClick={() => setShow(!show)}>
                    {question}
                </h2>
                {show && <p className="text-gray-700 text-md md:text-lg mt-2">{answer}</p>}
            </div>
        </div>
    );
};

const FaqProducts = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-10">
            <div className="container mx-auto flex flex-wrap justify-center gap-6">
                {FaqData.map((item, id) => (
                    <FaqItem
                        key={id}
                        question={item.question}
                        answer={item.Answer}
                    />
                ))}
            </div>
        </div>
    );
};

export { FaqProducts };
