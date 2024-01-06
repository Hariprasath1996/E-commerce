import { Outlet } from "react-router-dom";
import {Navbar} from "./Navbar"
import{Footer} from "./Footer"
import Home from "./Home.main"



const Root = () => {
    return (
        <>
        <Navbar/> 
        <Outlet/>
        <Home/>
        <Footer/>      
        </>
      );
}

export  default Root ;