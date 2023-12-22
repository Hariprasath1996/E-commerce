import { FaqData } from "../../constants/Faq";
import { useState } from "react";
const FaqProducts = () => {
    const Faq= (items) => {
        const [Show,setShow]=useState(false)
        
        const ClickFaqHandler =()=>{
            setShow((prev)=>!(prev))
        }
    return (
        <div className="  bg-purple-100 w-screen h-auto p-2 mb-5 flex flex-col items-center
        hover:scale-105 gap-1 shadow-lg rounded-lg overflow-hidden justify-center ">
        <img className="  w-74 h-64 object-center" src="./src/images/FAQ.png " />
        <div className="w-[100rem] h-auto flex flex-row ml-7 p-4 " >
        <h2 className="text-2xl font-semibold text-green-800 mb-1  " >
        {items.question}
        </h2>
        </div>
        { Show || <p className="text-yellow-800 font-bold text-2xl  p-2">{items.answer}</p> }
        </div>
    );
    };
    return (
        
    <div>
        <div className="flex flex-wrap mx-14 pt-[5rem]">
        {FaqData.map((item,id) => {
            return (
            <Faq
                key={id}
                id={item.id}
                question={item.question}
                answer={item.Answer}
                
            />
            );
        })}
        </div>
    </div>
    );
};

export   {FaqProducts};