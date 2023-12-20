import { useState } from "react"






const Faq = ()=>{

    const [Data,setData]=useState(FaqData)
    return (
        <main className="img-container" >
            <div className="img">
                <div className="Heading-container ">
                    <div className="Q&A-container">
                        {
                            Data.map((items)=>{
                                return(
                                    <FaqQuestionsAndAnswers key={items.id} items={items}/> 
                                )
                            })
                        }

                    </div>

                </div>
            </div>
        </main>
    )
    
}