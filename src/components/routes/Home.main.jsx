import { Header } from "./Header";
import { Customs} from "./Customs";
import { Systems} from "./Systems"
import {Catagories} from "./Catagories"

const Home = () => {
    return ( 
        <> 
        <Header/>
        <Catagories/>
        <Customs/>
        <Systems/>
        </>
        
    );
}

export default  Home;