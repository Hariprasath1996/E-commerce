import React from "react";

const CardsComponent = ({item, addToCart }) => {
    const {name,price,image}=item;
    console.log(item);
    return ( 
        <>
        <main className=" max-w-sm mx-auto bg-white w-96 ml-10 mt-4 mb-8 flex flex-col items-center
        hover:scale-105 gap-4 shadow-lg rounded-lg overflow-hidden justify-evenly">
            <p className="text-xl  font-bold text-gray-800 mt-4 ">{name}</p>
            <div  >
                <img className="  w-74 h-64 object-center" src={image}  alt="image" />
            </div>
            <div className="details">
                <p className="text-xl font-semibold text-gray-800 mb-3">{price}</p>
                <button onClick={()=>addToCart(item)} className="hover:cursor-pointer hover:translate-y-1 p-2 bg-white text-black rounded-md font-bold border-4 border-yellow-400/100 ... mb-3">Add To Cart</button>
            </div>
        </main>
        </>
    );
}
export default CardsComponent;