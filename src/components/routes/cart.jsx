import { useState } from "react";

const cart = () => {

    const [list,setList]= useState([])
    // here we create input element
    const [title,setTitle]=useState('')
// onclick component for cart
    const ClickHandlerCart = ()=>{
        if (title) {
            const newItem = {
                id:"",
                title,
            };
            setList([...list,newItem]);
            setTitle("")
            
        }
    } 

    return (  

        <main className="w-screen h-screen flex flex-col items-center justify-center p-8 gap-2  ">
                <section className="w-screen h-auto p-4 flex flex-wrap justify-center items-center shadow-lg bg-slate-100 gap-2">
                    <ul className="flex flex-col gap-4">
                    {   list.length ?  (

                        list.map((item)=>(
                            <li className="text-xl font-bold"
                            key={item.id}>
                            {item.title}
                            </li>
                        ))
                    ) : (
                        <h2 className="text-center text-xl font-bold my-4 ">
                            No Items Exist
                        </h2>
                    ) }
                    
                    </ul>
                </section>

        </main>
    );
}

export default cart;