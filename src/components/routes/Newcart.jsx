import { useState } from "react";
import { Navbar } from "./Navbar";

const NewCart = () => {
const [show,setShow]=useState(true);
const [cart,setCart]=useState([])

    return (
<React.Fragment>
    <Navbar/> 

</React.Fragment>
    );
}

export default NeewCart;