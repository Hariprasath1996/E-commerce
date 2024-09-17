import { HuntingProducts } from "../../constants/Hunting";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

const Hunt = () => {
    const Item = (props) => {
        return (
            <div className="max-w-sm mx-auto bg-white w-80 md:w-96 m-4 flex flex-col items-center hover:scale-105 transition-transform duration-300 ease-in-out gap-4 shadow-lg rounded-lg overflow-hidden">
                <img
                    className="w-64 h-64 object-cover object-center"
                    src={props.image}
                    alt={props.name}
                />
                <h2 className="text-xl font-semibold text-gray-800 mb-1 text-center">
                    {props.name}
                </h2>
                <span className="text-xl font-semibold text-gray-800 mb-3 text-center">
                    ₹{props.price}
                </span>
                <button className="hover:cursor-pointer hover:bg-yellow-400 hover:text-white transition-all duration-300 ease-in-out p-2 bg-white text-black rounded-md font-bold border-2 border-yellow-400 mb-3">
                    ADD TO CART
                </button>
            </div>
        );
    };

    return (
        <div>
            <div className="flex flex-wrap justify-center mx-4 md:mx-14 pt-[5rem]">
                {HuntingProducts.map((item, id) => {
                    return (
                        <Item
                            key={id}
                            id={item.id}
                            name={item.name}
                            price={item.price}
                            image={item.image}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export { Hunt };
