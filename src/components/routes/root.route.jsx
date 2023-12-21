import { Outlet } from "react-router-dom";
import {Navbar} from "./Navbar"
import{Footer} from "./Footer"
import { Header } from "./Header";
import { Customs} from "./Customs";
import { Systems} from "./Systems"
import {Catagories} from "./Catagories"


const Root = () => {
    return (
        <>
        <Navbar/>
        <Header/>
        <Catagories/>
        <Customs/>
        <Systems/>
        <Outlet/>
        <Footer/>
        
        </>
      );
}

export  default Root ;