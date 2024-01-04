import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import toast, { Toaster } from 'react-hot-toast';
import { RiDeleteBin2Fill } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";

const cart = () => {
// data list added here
    const [list,setList]= useState([])
    // here we create input element
    const [title,setTitle]=useState('')

// editing method
const [isEditing,setIsEditing] = useState(false)
const [itemToEdit,setItemToEdit]=useState[{}]


// onclick component for cart
    const ClickHandlerCart = ()=>{
        if (title) {
            if(isEditing){
            const updatedItems = list.map((item)=>{
                if (item.id === itemToEdit.id){
                    const updatedItem = {...item ,title}
                    return updatedItem
                }
                else{
                    return item;
                }
            });

                setList([updatedItems]);
                setTitle("")
                setIsEditing(false)
                setItemToEdit({})
                toast.success("items added successfully",{
                    duration : 3000
                })

            }else{
                const newItem = {
                    id:uuidv4(),
                    title,
                };
            }
            setList([...item , newItem])
            setTitle("");
            toast.success ("items not founded ", {
                duration:3000
            }
            )
        
            
        }
        else{
                toast.error('title is required ',
                {
                    duration : 3000
                } );
        };
        
        };
    
    };
    const editItem = (id)=>{
        setIsEditing(true);
        setItemToEdit =list.find((item) => item.id===id );
        setTitle(itemToEdit.title);
    };
    
    
    // delete method created
    const deleteItem = (id)=>{
        const remainingItems=list.filter((item)=>item.id !== id );
        setList(remainingItems);
        toast.error('items Deleted');
    
    };

    return (  

        <>
        <Toaster/>
        <main className="w-screen h-screen flex flex-col items-center justify-center p-8 gap-2  ">
                <section className="w-screen h-auto p-4 flex flex-wrap justify-center items-center shadow-lg bg-slate-100 gap-2">
                    <ul className="flex flex-col gap-4">
                    {   list.length ?  (

                        list.map((item)=>(
                            <li className="text-xl font-bold"
                            key={item.id}>
                                <span> {item.title}</span>
                                <button onClick={()=>editItem(item.id)}>
                                <FaEdit />
                                </button>
                                <button onClick={()=>deleteItem(item.id)} >
                                <RiDeleteBin2Fill />
                                </button>
                        
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
        </>
    
    );


export default cart;