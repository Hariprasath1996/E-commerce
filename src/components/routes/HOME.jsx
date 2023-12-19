// import { useState } from "react";
// import Products from "../../constants/index";
// import productList from "./allproducts.list";

// const allProducts = () => {
//     const [data,Setdata]=useState (Products)
//     return ( 
//         <div className="flex flex-wrap gap-8">
//             {data.map((items)=>{
//                 return(
//                     <productList  key={items.id} items={items}/>
//                 )
//             })}
//         </div>

//     );
// }

// export default allProduc

import Products from "../../constants/index";

const products = () => {
    const Item = (props) => {
    return (
        <div className="max-w-sm mx-auto bg-white w-96 ml-10 mt-4 mb-8 flex flex-col items-center
        hover:scale-105 gap-4 shadow-lg rounded-lg overflow-hidden justify-evenly">
        <img className=" mt-full w-74 h-64 object-center" src={props.image} />
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
            {props.name}
        </h2>
        <span className="text-xl font-semibold text-gray-800 mb-2">
            {props.price}
        </span>
        </div>
    );
    };
    return (
    <div>
        <div className="flex flex-wrap mx-14 pt-[5rem]">
        {Products.map((item, id) => {
            return (
            <Item
                key={id}
                id={item.id}
                name={item.name}
                price={item.price}
                image={item.imgUrl}
            />
            );
        })}
        </div>
    </div>
    );
};

export default products;
