// import { useState } from "react"
// import { FaqData } from "../../constants/Faq";
// import { FaqQuestionsAndAnswers } from "./Faq.Q&A";
// // import { Outlet } from "react-router-dom";

// const Faq = ()=>{

//     const [Data,setData]=useState(FaqData)
//     return (
//         <main className="img-container w-screen h-screen p-2 " >
//             <div className="img w-auto h-auto p-3 "  ><img src="./images/FAQ.png" alt="faq" /> </div>
//                 <div className="Heading-container w-[5rem]  h-auto gap-3 p-3 text-black font-bold  "> FAQ </div>
//                 {/* frequently asking questions part created  */}
//                     <div className="Q&A-container  w-[20rem] h-auto gap-2 text-black p-2 hover:cursor-pointer  ">
//                         {
//                             Data.map((item)=>{
//                                 return(
//                                     <FaqQuestionsAndAnswers key={item.id} item={item}/> 
//                                 )
//                             })
//                         }
//                     </div>
//                             {/* <Outlet/> */}
//         </main>
//     )
    
// }

// export  {Faq};
