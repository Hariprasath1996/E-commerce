import { Header } from "./Header";
import { Customs} from "./Customs";
import { Systems} from "./Systems"
import {Catagories} from "./Catagories"
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
const Home = () => {
    return ( 
        <>
        <Navbar/>
        <Header/>
        <Catagories/>
        <Customs/>
        <Systems/>
        <Footer/>
        </>
        
    );
}

export default  Home;